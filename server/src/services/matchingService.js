/**
 * Panoply Provider Matching Service
 * 
 * Ranks available providers using a weighted scoring formula:
 * score = (rating × 0.5) + (completedJobs × 0.3) - (distance × 0.2)
 * 
 * Distance is calculated using the Haversine formula.
 * Maximum search radius: 20km
 */

const prisma = require("../config/prisma");

const MAX_RADIUS_KM = 20;

/**
 * Haversine formula — calculates straight-line distance
 * between two GPS coordinates in kilometres.
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in kilometres
    
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c; // Distance in km
};

const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};

/**
 * Weighted scoring formula.
 * Weights: rating (0.5), completedJobs (0.3), distance (0.2)
 */
const calculateScore = (rating, completedJobs, distanceKm) => {
    return (rating * 0.5) + (completedJobs * 0.3) - (distanceKm * 0.2);
};

/**
 * Main matching function.
 * Finds and ranks available providers for a service request.
 */
const findMatchingProviders = async (category, customerLat, customerLon) => {
    // Get all available providers in the requested category
    const providers = await prisma.providerProfile.findMany({
        where: {
            category: category,
            isAvailable: true
        },
        include: {
            user: {
                select: {
                    id: true,
                    fullName: true,
                    email: true,
                    phone: true
                }
            }
        }
    });

    if (providers.length === 0) {
        return [];
    }

    // Calculate distance and score for each provider
    const scoredProviders = providers
        .map((provider) => {
            const distanceKm = calculateDistance(
                customerLat,
                customerLon,
                provider.latitude,
                provider.longitude
            );

            const score = calculateScore(
                provider.averageRating,
                provider.completedJobsCount,
                distanceKm
            );

            return {
                providerId: provider.user.id,
                fullName: provider.user.fullName,
                email: provider.user.email,
                phone: provider.user.phone,
                category: provider.category,
                averageRating: provider.averageRating,
                completedJobsCount: provider.completedJobsCount,
                isAvailable: provider.isAvailable,
                distanceKm: Math.round(distanceKm * 10) / 10, // round to 1 decimal
                score: Math.round(score * 100) / 100           // round to 2 decimals
            };
        })
        .filter((provider) => provider.distanceKm <= MAX_RADIUS_KM)
        .sort((a, b) => b.score - a.score); // highest score first

    return scoredProviders;
};

module.exports = {
    findMatchingProviders,
    calculateDistance,
    calculateScore
};
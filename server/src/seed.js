/**
 * seed.js — Panoply
 * Populates the database with one verified provider per trade category.
 * Run from the server directory: node src/seed.js
 */

const bcrypt = require("bcrypt");
const prisma = require("./config/prisma");

const providers = [
    {
        fullName: "Tunde Adeyemi",
        email: "tunde.adeyemi@panoply.ng",
        phone: "08012345671",
        password: "Provider1234",
        category: "Electrical",
        bio: "Certified electrician with 8 years experience in residential and commercial wiring across Lagos.",
        averageRating: 4.8,
        completedJobsCount: 47,
        latitude: 6.5244,
        longitude: 3.3792
    },
    {
        fullName: "Emeka Okafor",
        email: "emeka.okafor@panoply.ng",
        phone: "08012345672",
        password: "Provider1234",
        category: "Plumbing",
        bio: "Expert plumber specialising in pipe repairs, installations and drainage systems.",
        averageRating: 4.6,
        completedJobsCount: 38,
        latitude: 6.4550,
        longitude: 3.3841
    },
    {
        fullName: "Chidinma Eze",
        email: "chidinma.eze@panoply.ng",
        phone: "08012345673",
        password: "Provider1234",
        category: "Cleaning",
        bio: "Professional cleaner offering deep cleaning, post-construction and regular home cleaning services.",
        averageRating: 4.9,
        completedJobsCount: 62,
        latitude: 6.4698,
        longitude: 3.5852
    },
    {
        fullName: "Bayo Adeleke",
        email: "bayo.adeleke@panoply.ng",
        phone: "08012345674",
        password: "Provider1234",
        category: "AC_Repair",
        bio: "Aircon technician trained in installation, servicing and gas refilling for all major brands.",
        averageRating: 4.7,
        completedJobsCount: 29,
        latitude: 6.6018,
        longitude: 3.3515
    },
    {
        fullName: "Chukwuemeka Nwosu",
        email: "chukwuemeka.nwosu@panoply.ng",
        phone: "08012345675",
        password: "Provider1234",
        category: "Carpentry",
        bio: "Skilled carpenter handling furniture repairs, wardrobes, doors and custom woodwork.",
        averageRating: 4.5,
        completedJobsCount: 33,
        latitude: 6.5776,
        longitude: 3.3426
    },
    {
        fullName: "Musa Ibrahim",
        email: "musa.ibrahim@panoply.ng",
        phone: "08012345676",
        password: "Provider1234",
        category: "Generator",
        bio: "Generator technician with expertise in servicing, repairs and installations of all generator types.",
        averageRating: 4.6,
        completedJobsCount: 41,
        latitude: 6.4281,
        longitude: 3.4219
    },
    {
        fullName: "Segun Fashola",
        email: "segun.fashola@panoply.ng",
        phone: "08012345677",
        password: "Provider1234",
        category: "Solar",
        bio: "Solar energy specialist offering panel installation, inverter setup and maintenance services.",
        averageRating: 4.7,
        completedJobsCount: 22,
        latitude: 6.5355,
        longitude: 3.3087
    },
    {
        fullName: "Amaka Obiora",
        email: "amaka.obiora@panoply.ng",
        phone: "08012345678",
        password: "Provider1234",
        category: "Painting",
        bio: "Professional painter offering interior, exterior and decorative painting for homes and offices.",
        averageRating: 4.8,
        completedJobsCount: 55,
        latitude: 6.4922,
        longitude: 3.3564
    },
        {
        fullName: "Biodun Akinwale",
        email: "biodun.akinwale@panoply.ng",
        phone: "08012345681",
        password: "Provider1234",
        category: "Electrical",
        bio: "Licensed electrician with 6 years experience serving Abuja residents and businesses.",
        averageRating: 4.7,
        completedJobsCount: 39,
        latitude: 9.0579,
        longitude: 7.4951
    },
    {
        fullName: "Kelechi Nnaji",
        email: "kelechi.nnaji@panoply.ng",
        phone: "08012345682",
        password: "Provider1234",
        category: "Plumbing",
        bio: "Reliable plumber handling all pipe, drainage and sanitary installations in Abuja.",
        averageRating: 4.5,
        completedJobsCount: 31,
        latitude: 9.0420,
        longitude: 7.4692
    },
    {
        fullName: "Fatima Bello",
        email: "fatima.bello@panoply.ng",
        phone: "08012345683",
        password: "Provider1234",
        category: "Cleaning",
        bio: "Thorough and professional cleaner serving homes and offices across Abuja.",
        averageRating: 4.9,
        completedJobsCount: 58,
        latitude: 9.0643,
        longitude: 7.4892
    },
    {
        fullName: "Yakubu Sani",
        email: "yakubu.sani@panoply.ng",
        phone: "08012345684",
        password: "Provider1234",
        category: "AC_Repair",
        bio: "AC technician with expertise in all major brands, serving Abuja and environs.",
        averageRating: 4.6,
        completedJobsCount: 27,
        latitude: 9.0764,
        longitude: 7.5183
    },
    {
        fullName: "Obi Nzekwe",
        email: "obi.nzekwe@panoply.ng",
        phone: "08012345685",
        password: "Provider1234",
        category: "Carpentry",
        bio: "Expert carpenter with a passion for quality woodwork and furniture in Abuja.",
        averageRating: 4.4,
        completedJobsCount: 24,
        latitude: 9.0320,
        longitude: 7.4712
    },
    {
        fullName: "Aliyu Musa",
        email: "aliyu.musa@panoply.ng",
        phone: "08012345686",
        password: "Provider1234",
        category: "Generator",
        bio: "Generator specialist offering prompt repairs and servicing across Abuja.",
        averageRating: 4.7,
        completedJobsCount: 44,
        latitude: 9.0512,
        longitude: 7.4823
    },
    {
        fullName: "Ngozi Okonkwo",
        email: "ngozi.okonkwo@panoply.ng",
        phone: "08012345687",
        password: "Provider1234",
        category: "Solar",
        bio: "Solar energy expert helping Abuja homes reduce electricity costs.",
        averageRating: 4.8,
        completedJobsCount: 19,
        latitude: 9.0678,
        longitude: 7.5012
    },
    {
        fullName: "Hadiza Umar",
        email: "hadiza.umar@panoply.ng",
        phone: "08012345688",
        password: "Provider1234",
        category: "Painting",
        bio: "Creative painter delivering quality interior and exterior finishes in Abuja.",
        averageRating: 4.6,
        completedJobsCount: 36,
        latitude: 9.0445,
        longitude: 7.4934
    }
    
];

async function seed() {
    console.log("Starting seed...");

    let created = 0;
    let skipped = 0;

    for (const p of providers) {
        try {
            // Check if already exists
            const existing = await prisma.user.findUnique({
                where: { email: p.email }
            });

            if (existing) {
                console.log(`Skipping ${p.fullName} — already exists.`);
                skipped++;
                continue;
            }

            const hashedPassword = await bcrypt.hash(p.password, 10);

            await prisma.$transaction(async (tx) => {
                // Create user
                const user = await tx.user.create({
                    data: {
                        fullName: p.fullName,
                        email:    p.email,
                        phone:    p.phone,
                        password: hashedPassword,
                        role:     "provider",
                        status:   "active"
                    }
                });

                // Create provider profile with full details
                await tx.providerProfile.create({
                    data: {
                        userId:             user.id,
                        category:           p.category,
                        bio:                p.bio,
                        averageRating:      p.averageRating,
                        completedJobsCount: p.completedJobsCount,
                        isAvailable:        true,
                        latitude:           p.latitude,
                        longitude:          p.longitude
                    }
                });
            });

            console.log(`✓ Created ${p.fullName} — ${p.category}`);
            created++;

        } catch (error) {
            console.error(`✗ Failed to create ${p.fullName}:`, error.message);
        }
    }

    console.log(`\nSeed complete. Created: ${created}, Skipped: ${skipped}`);
    await prisma.$disconnect();
}

seed();
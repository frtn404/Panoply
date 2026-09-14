
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProviderProfile
 * 
 */
export type ProviderProfile = $Result.DefaultSelection<Prisma.$ProviderProfilePayload>
/**
 * Model CustomerProfile
 * 
 */
export type CustomerProfile = $Result.DefaultSelection<Prisma.$CustomerProfilePayload>
/**
 * Model ServiceRequest
 * 
 */
export type ServiceRequest = $Result.DefaultSelection<Prisma.$ServiceRequestPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Blacklist
 * 
 */
export type Blacklist = $Result.DefaultSelection<Prisma.$BlacklistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  customer: 'customer',
  provider: 'provider',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TradeCategory: {
  Electrical: 'Electrical',
  Plumbing: 'Plumbing',
  Cleaning: 'Cleaning',
  AC_Repair: 'AC_Repair',
  Carpentry: 'Carpentry',
  Generator: 'Generator',
  Solar: 'Solar',
  Painting: 'Painting'
};

export type TradeCategory = (typeof TradeCategory)[keyof typeof TradeCategory]


export const JobStatus: {
  pending: 'pending',
  assigning: 'assigning',
  quoted: 'quoted',
  accepted: 'accepted',
  in_progress: 'in_progress',
  completed: 'completed',
  cancelled: 'cancelled',
  failed: 'failed'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const UserStatus: {
  active: 'active',
  pending: 'pending',
  suspended: 'suspended'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const PaymentStatus: {
  pending: 'pending',
  held: 'held',
  released: 'released',
  refunded: 'refunded',
  failed: 'failed'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TradeCategory = $Enums.TradeCategory

export const TradeCategory: typeof $Enums.TradeCategory

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerProfile`: Exposes CRUD operations for the **ProviderProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderProfiles
    * const providerProfiles = await prisma.providerProfile.findMany()
    * ```
    */
  get providerProfile(): Prisma.ProviderProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerProfile`: Exposes CRUD operations for the **CustomerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerProfiles
    * const customerProfiles = await prisma.customerProfile.findMany()
    * ```
    */
  get customerProfile(): Prisma.CustomerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRequest`: Exposes CRUD operations for the **ServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequests
    * const serviceRequests = await prisma.serviceRequest.findMany()
    * ```
    */
  get serviceRequest(): Prisma.ServiceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blacklist`: Exposes CRUD operations for the **Blacklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blacklists
    * const blacklists = await prisma.blacklist.findMany()
    * ```
    */
  get blacklist(): Prisma.BlacklistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ProviderProfile: 'ProviderProfile',
    CustomerProfile: 'CustomerProfile',
    ServiceRequest: 'ServiceRequest',
    Review: 'Review',
    Payment: 'Payment',
    Blacklist: 'Blacklist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "providerProfile" | "customerProfile" | "serviceRequest" | "review" | "payment" | "blacklist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProviderProfile: {
        payload: Prisma.$ProviderProfilePayload<ExtArgs>
        fields: Prisma.ProviderProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>
          }
          findFirst: {
            args: Prisma.ProviderProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>
          }
          findMany: {
            args: Prisma.ProviderProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>[]
          }
          create: {
            args: Prisma.ProviderProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>
          }
          createMany: {
            args: Prisma.ProviderProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProviderProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>
          }
          update: {
            args: Prisma.ProviderProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProviderProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProviderProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderProfilePayload>
          }
          aggregate: {
            args: Prisma.ProviderProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderProfile>
          }
          groupBy: {
            args: Prisma.ProviderProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderProfileCountAggregateOutputType> | number
          }
        }
      }
      CustomerProfile: {
        payload: Prisma.$CustomerProfilePayload<ExtArgs>
        fields: Prisma.CustomerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          findFirst: {
            args: Prisma.CustomerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          findMany: {
            args: Prisma.CustomerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>[]
          }
          create: {
            args: Prisma.CustomerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          createMany: {
            args: Prisma.CustomerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          update: {
            args: Prisma.CustomerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          deleteMany: {
            args: Prisma.CustomerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          aggregate: {
            args: Prisma.CustomerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerProfile>
          }
          groupBy: {
            args: Prisma.CustomerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerProfileCountAggregateOutputType> | number
          }
        }
      }
      ServiceRequest: {
        payload: Prisma.$ServiceRequestPayload<ExtArgs>
        fields: Prisma.ServiceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findFirst: {
            args: Prisma.ServiceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findMany: {
            args: Prisma.ServiceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          create: {
            args: Prisma.ServiceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          createMany: {
            args: Prisma.ServiceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          update: {
            args: Prisma.ServiceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          deleteMany: {
            args: Prisma.ServiceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          aggregate: {
            args: Prisma.ServiceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceRequest>
          }
          groupBy: {
            args: Prisma.ServiceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Blacklist: {
        payload: Prisma.$BlacklistPayload<ExtArgs>
        fields: Prisma.BlacklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlacklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlacklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          findFirst: {
            args: Prisma.BlacklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlacklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          findMany: {
            args: Prisma.BlacklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>[]
          }
          create: {
            args: Prisma.BlacklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          createMany: {
            args: Prisma.BlacklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlacklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          update: {
            args: Prisma.BlacklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          deleteMany: {
            args: Prisma.BlacklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlacklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlacklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          aggregate: {
            args: Prisma.BlacklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlacklist>
          }
          groupBy: {
            args: Prisma.BlacklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlacklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlacklistCountArgs<ExtArgs>
            result: $Utils.Optional<BlacklistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    providerProfile?: ProviderProfileOmit
    customerProfile?: CustomerProfileOmit
    serviceRequest?: ServiceRequestOmit
    review?: ReviewOmit
    payment?: PaymentOmit
    blacklist?: BlacklistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requestsAsCustomer: number
    requestsAsProvider: number
    ReviewsGiven: number
    ReviewsReceived: number
    paymentsMade: number
    paymentsReceived: number
    blacklistsCreated: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestsAsCustomer?: boolean | UserCountOutputTypeCountRequestsAsCustomerArgs
    requestsAsProvider?: boolean | UserCountOutputTypeCountRequestsAsProviderArgs
    ReviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    ReviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
    paymentsMade?: boolean | UserCountOutputTypeCountPaymentsMadeArgs
    paymentsReceived?: boolean | UserCountOutputTypeCountPaymentsReceivedArgs
    blacklistsCreated?: boolean | UserCountOutputTypeCountBlacklistsCreatedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsAsProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlacklistsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistWhereInput
  }


  /**
   * Count Type ServiceRequestCountOutputType
   */

  export type ServiceRequestCountOutputType = {
    payments: number
  }

  export type ServiceRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | ServiceRequestCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceRequestCountOutputType without action
   */
  export type ServiceRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestCountOutputType
     */
    select?: ServiceRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceRequestCountOutputType without action
   */
  export type ServiceRequestCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    status: $Enums.UserStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    status: $Enums.UserStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    password: number
    role: number
    createdAt: number
    status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    email: string
    phone: string | null
    password: string
    role: $Enums.Role
    createdAt: Date
    status: $Enums.UserStatus
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    status?: boolean
    ProviderProfile?: boolean | User$ProviderProfileArgs<ExtArgs>
    CustomerProfile?: boolean | User$CustomerProfileArgs<ExtArgs>
    requestsAsCustomer?: boolean | User$requestsAsCustomerArgs<ExtArgs>
    requestsAsProvider?: boolean | User$requestsAsProviderArgs<ExtArgs>
    ReviewsGiven?: boolean | User$ReviewsGivenArgs<ExtArgs>
    ReviewsReceived?: boolean | User$ReviewsReceivedArgs<ExtArgs>
    paymentsMade?: boolean | User$paymentsMadeArgs<ExtArgs>
    paymentsReceived?: boolean | User$paymentsReceivedArgs<ExtArgs>
    blacklistEntry?: boolean | User$blacklistEntryArgs<ExtArgs>
    blacklistsCreated?: boolean | User$blacklistsCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "password" | "role" | "createdAt" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProviderProfile?: boolean | User$ProviderProfileArgs<ExtArgs>
    CustomerProfile?: boolean | User$CustomerProfileArgs<ExtArgs>
    requestsAsCustomer?: boolean | User$requestsAsCustomerArgs<ExtArgs>
    requestsAsProvider?: boolean | User$requestsAsProviderArgs<ExtArgs>
    ReviewsGiven?: boolean | User$ReviewsGivenArgs<ExtArgs>
    ReviewsReceived?: boolean | User$ReviewsReceivedArgs<ExtArgs>
    paymentsMade?: boolean | User$paymentsMadeArgs<ExtArgs>
    paymentsReceived?: boolean | User$paymentsReceivedArgs<ExtArgs>
    blacklistEntry?: boolean | User$blacklistEntryArgs<ExtArgs>
    blacklistsCreated?: boolean | User$blacklistsCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ProviderProfile: Prisma.$ProviderProfilePayload<ExtArgs> | null
      CustomerProfile: Prisma.$CustomerProfilePayload<ExtArgs> | null
      requestsAsCustomer: Prisma.$ServiceRequestPayload<ExtArgs>[]
      requestsAsProvider: Prisma.$ServiceRequestPayload<ExtArgs>[]
      ReviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      ReviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      paymentsMade: Prisma.$PaymentPayload<ExtArgs>[]
      paymentsReceived: Prisma.$PaymentPayload<ExtArgs>[]
      blacklistEntry: Prisma.$BlacklistPayload<ExtArgs> | null
      blacklistsCreated: Prisma.$BlacklistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      phone: string | null
      password: string
      role: $Enums.Role
      createdAt: Date
      status: $Enums.UserStatus
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProviderProfile<T extends User$ProviderProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$ProviderProfileArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    CustomerProfile<T extends User$CustomerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomerProfileArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requestsAsCustomer<T extends User$requestsAsCustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsAsCustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requestsAsProvider<T extends User$requestsAsProviderArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsAsProviderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReviewsGiven<T extends User$ReviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReviewsReceived<T extends User$ReviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentsMade<T extends User$paymentsMadeArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentsReceived<T extends User$paymentsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blacklistEntry<T extends User$blacklistEntryArgs<ExtArgs> = {}>(args?: Subset<T, User$blacklistEntryArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    blacklistsCreated<T extends User$blacklistsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$blacklistsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'UserStatus'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ProviderProfile
   */
  export type User$ProviderProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    where?: ProviderProfileWhereInput
  }

  /**
   * User.CustomerProfile
   */
  export type User$CustomerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    where?: CustomerProfileWhereInput
  }

  /**
   * User.requestsAsCustomer
   */
  export type User$requestsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    cursor?: ServiceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * User.requestsAsProvider
   */
  export type User$requestsAsProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    cursor?: ServiceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * User.ReviewsGiven
   */
  export type User$ReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.ReviewsReceived
   */
  export type User$ReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.paymentsMade
   */
  export type User$paymentsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.paymentsReceived
   */
  export type User$paymentsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.blacklistEntry
   */
  export type User$blacklistEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    where?: BlacklistWhereInput
  }

  /**
   * User.blacklistsCreated
   */
  export type User$blacklistsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    where?: BlacklistWhereInput
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    cursor?: BlacklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ProviderProfile
   */

  export type AggregateProviderProfile = {
    _count: ProviderProfileCountAggregateOutputType | null
    _avg: ProviderProfileAvgAggregateOutputType | null
    _sum: ProviderProfileSumAggregateOutputType | null
    _min: ProviderProfileMinAggregateOutputType | null
    _max: ProviderProfileMaxAggregateOutputType | null
  }

  export type ProviderProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    averageRating: number | null
    completedJobsCount: number | null
    latitude: number | null
    longitude: number | null
  }

  export type ProviderProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    averageRating: number | null
    completedJobsCount: number | null
    latitude: number | null
    longitude: number | null
  }

  export type ProviderProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    category: $Enums.TradeCategory | null
    bio: string | null
    averageRating: number | null
    isAvailable: boolean | null
    completedJobsCount: number | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type ProviderProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    category: $Enums.TradeCategory | null
    bio: string | null
    averageRating: number | null
    isAvailable: boolean | null
    completedJobsCount: number | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type ProviderProfileCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    bio: number
    averageRating: number
    isAvailable: number
    completedJobsCount: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type ProviderProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    averageRating?: true
    completedJobsCount?: true
    latitude?: true
    longitude?: true
  }

  export type ProviderProfileSumAggregateInputType = {
    id?: true
    userId?: true
    averageRating?: true
    completedJobsCount?: true
    latitude?: true
    longitude?: true
  }

  export type ProviderProfileMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    bio?: true
    averageRating?: true
    isAvailable?: true
    completedJobsCount?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type ProviderProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    bio?: true
    averageRating?: true
    isAvailable?: true
    completedJobsCount?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type ProviderProfileCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    bio?: true
    averageRating?: true
    isAvailable?: true
    completedJobsCount?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type ProviderProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderProfile to aggregate.
     */
    where?: ProviderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderProfiles
    **/
    _count?: true | ProviderProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderProfileMaxAggregateInputType
  }

  export type GetProviderProfileAggregateType<T extends ProviderProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderProfile[P]>
      : GetScalarType<T[P], AggregateProviderProfile[P]>
  }




  export type ProviderProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderProfileWhereInput
    orderBy?: ProviderProfileOrderByWithAggregationInput | ProviderProfileOrderByWithAggregationInput[]
    by: ProviderProfileScalarFieldEnum[] | ProviderProfileScalarFieldEnum
    having?: ProviderProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderProfileCountAggregateInputType | true
    _avg?: ProviderProfileAvgAggregateInputType
    _sum?: ProviderProfileSumAggregateInputType
    _min?: ProviderProfileMinAggregateInputType
    _max?: ProviderProfileMaxAggregateInputType
  }

  export type ProviderProfileGroupByOutputType = {
    id: number
    userId: number
    category: $Enums.TradeCategory | null
    bio: string | null
    averageRating: number
    isAvailable: boolean
    completedJobsCount: number
    latitude: number | null
    longitude: number | null
    createdAt: Date
    _count: ProviderProfileCountAggregateOutputType | null
    _avg: ProviderProfileAvgAggregateOutputType | null
    _sum: ProviderProfileSumAggregateOutputType | null
    _min: ProviderProfileMinAggregateOutputType | null
    _max: ProviderProfileMaxAggregateOutputType | null
  }

  type GetProviderProfileGroupByPayload<T extends ProviderProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProviderProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    bio?: boolean
    averageRating?: boolean
    isAvailable?: boolean
    completedJobsCount?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerProfile"]>



  export type ProviderProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    bio?: boolean
    averageRating?: boolean
    isAvailable?: boolean
    completedJobsCount?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type ProviderProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "bio" | "averageRating" | "isAvailable" | "completedJobsCount" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["providerProfile"]>
  export type ProviderProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProviderProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      category: $Enums.TradeCategory | null
      bio: string | null
      averageRating: number
      isAvailable: boolean
      completedJobsCount: number
      latitude: number | null
      longitude: number | null
      createdAt: Date
    }, ExtArgs["result"]["providerProfile"]>
    composites: {}
  }

  type ProviderProfileGetPayload<S extends boolean | null | undefined | ProviderProfileDefaultArgs> = $Result.GetResult<Prisma.$ProviderProfilePayload, S>

  type ProviderProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderProfileCountAggregateInputType | true
    }

  export interface ProviderProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderProfile'], meta: { name: 'ProviderProfile' } }
    /**
     * Find zero or one ProviderProfile that matches the filter.
     * @param {ProviderProfileFindUniqueArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderProfileFindUniqueArgs>(args: SelectSubset<T, ProviderProfileFindUniqueArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderProfileFindUniqueOrThrowArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileFindFirstArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderProfileFindFirstArgs>(args?: SelectSubset<T, ProviderProfileFindFirstArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileFindFirstOrThrowArgs} args - Arguments to find a ProviderProfile
     * @example
     * // Get one ProviderProfile
     * const providerProfile = await prisma.providerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderProfiles
     * const providerProfiles = await prisma.providerProfile.findMany()
     * 
     * // Get first 10 ProviderProfiles
     * const providerProfiles = await prisma.providerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerProfileWithIdOnly = await prisma.providerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderProfileFindManyArgs>(args?: SelectSubset<T, ProviderProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderProfile.
     * @param {ProviderProfileCreateArgs} args - Arguments to create a ProviderProfile.
     * @example
     * // Create one ProviderProfile
     * const ProviderProfile = await prisma.providerProfile.create({
     *   data: {
     *     // ... data to create a ProviderProfile
     *   }
     * })
     * 
     */
    create<T extends ProviderProfileCreateArgs>(args: SelectSubset<T, ProviderProfileCreateArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderProfiles.
     * @param {ProviderProfileCreateManyArgs} args - Arguments to create many ProviderProfiles.
     * @example
     * // Create many ProviderProfiles
     * const providerProfile = await prisma.providerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderProfileCreateManyArgs>(args?: SelectSubset<T, ProviderProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderProfile.
     * @param {ProviderProfileDeleteArgs} args - Arguments to delete one ProviderProfile.
     * @example
     * // Delete one ProviderProfile
     * const ProviderProfile = await prisma.providerProfile.delete({
     *   where: {
     *     // ... filter to delete one ProviderProfile
     *   }
     * })
     * 
     */
    delete<T extends ProviderProfileDeleteArgs>(args: SelectSubset<T, ProviderProfileDeleteArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderProfile.
     * @param {ProviderProfileUpdateArgs} args - Arguments to update one ProviderProfile.
     * @example
     * // Update one ProviderProfile
     * const providerProfile = await prisma.providerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderProfileUpdateArgs>(args: SelectSubset<T, ProviderProfileUpdateArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderProfiles.
     * @param {ProviderProfileDeleteManyArgs} args - Arguments to filter ProviderProfiles to delete.
     * @example
     * // Delete a few ProviderProfiles
     * const { count } = await prisma.providerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderProfileDeleteManyArgs>(args?: SelectSubset<T, ProviderProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderProfiles
     * const providerProfile = await prisma.providerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderProfileUpdateManyArgs>(args: SelectSubset<T, ProviderProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderProfile.
     * @param {ProviderProfileUpsertArgs} args - Arguments to update or create a ProviderProfile.
     * @example
     * // Update or create a ProviderProfile
     * const providerProfile = await prisma.providerProfile.upsert({
     *   create: {
     *     // ... data to create a ProviderProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderProfile we want to update
     *   }
     * })
     */
    upsert<T extends ProviderProfileUpsertArgs>(args: SelectSubset<T, ProviderProfileUpsertArgs<ExtArgs>>): Prisma__ProviderProfileClient<$Result.GetResult<Prisma.$ProviderProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileCountArgs} args - Arguments to filter ProviderProfiles to count.
     * @example
     * // Count the number of ProviderProfiles
     * const count = await prisma.providerProfile.count({
     *   where: {
     *     // ... the filter for the ProviderProfiles we want to count
     *   }
     * })
    **/
    count<T extends ProviderProfileCountArgs>(
      args?: Subset<T, ProviderProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderProfileAggregateArgs>(args: Subset<T, ProviderProfileAggregateArgs>): Prisma.PrismaPromise<GetProviderProfileAggregateType<T>>

    /**
     * Group by ProviderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProviderProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderProfile model
   */
  readonly fields: ProviderProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderProfile model
   */
  interface ProviderProfileFieldRefs {
    readonly id: FieldRef<"ProviderProfile", 'Int'>
    readonly userId: FieldRef<"ProviderProfile", 'Int'>
    readonly category: FieldRef<"ProviderProfile", 'TradeCategory'>
    readonly bio: FieldRef<"ProviderProfile", 'String'>
    readonly averageRating: FieldRef<"ProviderProfile", 'Float'>
    readonly isAvailable: FieldRef<"ProviderProfile", 'Boolean'>
    readonly completedJobsCount: FieldRef<"ProviderProfile", 'Int'>
    readonly latitude: FieldRef<"ProviderProfile", 'Float'>
    readonly longitude: FieldRef<"ProviderProfile", 'Float'>
    readonly createdAt: FieldRef<"ProviderProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderProfile findUnique
   */
  export type ProviderProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where: ProviderProfileWhereUniqueInput
  }

  /**
   * ProviderProfile findUniqueOrThrow
   */
  export type ProviderProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where: ProviderProfileWhereUniqueInput
  }

  /**
   * ProviderProfile findFirst
   */
  export type ProviderProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where?: ProviderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderProfiles.
     */
    cursor?: ProviderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderProfiles.
     */
    distinct?: ProviderProfileScalarFieldEnum | ProviderProfileScalarFieldEnum[]
  }

  /**
   * ProviderProfile findFirstOrThrow
   */
  export type ProviderProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProviderProfile to fetch.
     */
    where?: ProviderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderProfiles.
     */
    cursor?: ProviderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderProfiles.
     */
    distinct?: ProviderProfileScalarFieldEnum | ProviderProfileScalarFieldEnum[]
  }

  /**
   * ProviderProfile findMany
   */
  export type ProviderProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProviderProfiles to fetch.
     */
    where?: ProviderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderProfiles to fetch.
     */
    orderBy?: ProviderProfileOrderByWithRelationInput | ProviderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderProfiles.
     */
    cursor?: ProviderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderProfiles.
     */
    skip?: number
    distinct?: ProviderProfileScalarFieldEnum | ProviderProfileScalarFieldEnum[]
  }

  /**
   * ProviderProfile create
   */
  export type ProviderProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderProfile.
     */
    data: XOR<ProviderProfileCreateInput, ProviderProfileUncheckedCreateInput>
  }

  /**
   * ProviderProfile createMany
   */
  export type ProviderProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderProfiles.
     */
    data: ProviderProfileCreateManyInput | ProviderProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderProfile update
   */
  export type ProviderProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderProfile.
     */
    data: XOR<ProviderProfileUpdateInput, ProviderProfileUncheckedUpdateInput>
    /**
     * Choose, which ProviderProfile to update.
     */
    where: ProviderProfileWhereUniqueInput
  }

  /**
   * ProviderProfile updateMany
   */
  export type ProviderProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderProfiles.
     */
    data: XOR<ProviderProfileUpdateManyMutationInput, ProviderProfileUncheckedUpdateManyInput>
    /**
     * Filter which ProviderProfiles to update
     */
    where?: ProviderProfileWhereInput
    /**
     * Limit how many ProviderProfiles to update.
     */
    limit?: number
  }

  /**
   * ProviderProfile upsert
   */
  export type ProviderProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderProfile to update in case it exists.
     */
    where: ProviderProfileWhereUniqueInput
    /**
     * In case the ProviderProfile found by the `where` argument doesn't exist, create a new ProviderProfile with this data.
     */
    create: XOR<ProviderProfileCreateInput, ProviderProfileUncheckedCreateInput>
    /**
     * In case the ProviderProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderProfileUpdateInput, ProviderProfileUncheckedUpdateInput>
  }

  /**
   * ProviderProfile delete
   */
  export type ProviderProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
    /**
     * Filter which ProviderProfile to delete.
     */
    where: ProviderProfileWhereUniqueInput
  }

  /**
   * ProviderProfile deleteMany
   */
  export type ProviderProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderProfiles to delete
     */
    where?: ProviderProfileWhereInput
    /**
     * Limit how many ProviderProfiles to delete.
     */
    limit?: number
  }

  /**
   * ProviderProfile without action
   */
  export type ProviderProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderProfile
     */
    select?: ProviderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderProfile
     */
    omit?: ProviderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderProfileInclude<ExtArgs> | null
  }


  /**
   * Model CustomerProfile
   */

  export type AggregateCustomerProfile = {
    _count: CustomerProfileCountAggregateOutputType | null
    _avg: CustomerProfileAvgAggregateOutputType | null
    _sum: CustomerProfileSumAggregateOutputType | null
    _min: CustomerProfileMinAggregateOutputType | null
    _max: CustomerProfileMaxAggregateOutputType | null
  }

  export type CustomerProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CustomerProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CustomerProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type CustomerProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type CustomerProfileCountAggregateOutputType = {
    id: number
    userId: number
    address: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type CustomerProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
  }

  export type CustomerProfileSumAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
  }

  export type CustomerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CustomerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CustomerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerProfile to aggregate.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerProfiles
    **/
    _count?: true | CustomerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerProfileMaxAggregateInputType
  }

  export type GetCustomerProfileAggregateType<T extends CustomerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerProfile[P]>
      : GetScalarType<T[P], AggregateCustomerProfile[P]>
  }




  export type CustomerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerProfileWhereInput
    orderBy?: CustomerProfileOrderByWithAggregationInput | CustomerProfileOrderByWithAggregationInput[]
    by: CustomerProfileScalarFieldEnum[] | CustomerProfileScalarFieldEnum
    having?: CustomerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerProfileCountAggregateInputType | true
    _avg?: CustomerProfileAvgAggregateInputType
    _sum?: CustomerProfileSumAggregateInputType
    _min?: CustomerProfileMinAggregateInputType
    _max?: CustomerProfileMaxAggregateInputType
  }

  export type CustomerProfileGroupByOutputType = {
    id: number
    userId: number
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date
    _count: CustomerProfileCountAggregateOutputType | null
    _avg: CustomerProfileAvgAggregateOutputType | null
    _sum: CustomerProfileSumAggregateOutputType | null
    _min: CustomerProfileMinAggregateOutputType | null
    _max: CustomerProfileMaxAggregateOutputType | null
  }

  type GetCustomerProfileGroupByPayload<T extends CustomerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerProfileGroupByOutputType[P]>
        }
      >
    >


  export type CustomerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerProfile"]>



  export type CustomerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type CustomerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "address" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["customerProfile"]>
  export type CustomerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      address: string | null
      latitude: number | null
      longitude: number | null
      createdAt: Date
    }, ExtArgs["result"]["customerProfile"]>
    composites: {}
  }

  type CustomerProfileGetPayload<S extends boolean | null | undefined | CustomerProfileDefaultArgs> = $Result.GetResult<Prisma.$CustomerProfilePayload, S>

  type CustomerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerProfileCountAggregateInputType | true
    }

  export interface CustomerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerProfile'], meta: { name: 'CustomerProfile' } }
    /**
     * Find zero or one CustomerProfile that matches the filter.
     * @param {CustomerProfileFindUniqueArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerProfileFindUniqueArgs>(args: SelectSubset<T, CustomerProfileFindUniqueArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerProfileFindUniqueOrThrowArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileFindFirstArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerProfileFindFirstArgs>(args?: SelectSubset<T, CustomerProfileFindFirstArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileFindFirstOrThrowArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerProfiles
     * const customerProfiles = await prisma.customerProfile.findMany()
     * 
     * // Get first 10 CustomerProfiles
     * const customerProfiles = await prisma.customerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerProfileWithIdOnly = await prisma.customerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerProfileFindManyArgs>(args?: SelectSubset<T, CustomerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerProfile.
     * @param {CustomerProfileCreateArgs} args - Arguments to create a CustomerProfile.
     * @example
     * // Create one CustomerProfile
     * const CustomerProfile = await prisma.customerProfile.create({
     *   data: {
     *     // ... data to create a CustomerProfile
     *   }
     * })
     * 
     */
    create<T extends CustomerProfileCreateArgs>(args: SelectSubset<T, CustomerProfileCreateArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerProfiles.
     * @param {CustomerProfileCreateManyArgs} args - Arguments to create many CustomerProfiles.
     * @example
     * // Create many CustomerProfiles
     * const customerProfile = await prisma.customerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerProfileCreateManyArgs>(args?: SelectSubset<T, CustomerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerProfile.
     * @param {CustomerProfileDeleteArgs} args - Arguments to delete one CustomerProfile.
     * @example
     * // Delete one CustomerProfile
     * const CustomerProfile = await prisma.customerProfile.delete({
     *   where: {
     *     // ... filter to delete one CustomerProfile
     *   }
     * })
     * 
     */
    delete<T extends CustomerProfileDeleteArgs>(args: SelectSubset<T, CustomerProfileDeleteArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerProfile.
     * @param {CustomerProfileUpdateArgs} args - Arguments to update one CustomerProfile.
     * @example
     * // Update one CustomerProfile
     * const customerProfile = await prisma.customerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerProfileUpdateArgs>(args: SelectSubset<T, CustomerProfileUpdateArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerProfiles.
     * @param {CustomerProfileDeleteManyArgs} args - Arguments to filter CustomerProfiles to delete.
     * @example
     * // Delete a few CustomerProfiles
     * const { count } = await prisma.customerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerProfileDeleteManyArgs>(args?: SelectSubset<T, CustomerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerProfiles
     * const customerProfile = await prisma.customerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerProfileUpdateManyArgs>(args: SelectSubset<T, CustomerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerProfile.
     * @param {CustomerProfileUpsertArgs} args - Arguments to update or create a CustomerProfile.
     * @example
     * // Update or create a CustomerProfile
     * const customerProfile = await prisma.customerProfile.upsert({
     *   create: {
     *     // ... data to create a CustomerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerProfile we want to update
     *   }
     * })
     */
    upsert<T extends CustomerProfileUpsertArgs>(args: SelectSubset<T, CustomerProfileUpsertArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileCountArgs} args - Arguments to filter CustomerProfiles to count.
     * @example
     * // Count the number of CustomerProfiles
     * const count = await prisma.customerProfile.count({
     *   where: {
     *     // ... the filter for the CustomerProfiles we want to count
     *   }
     * })
    **/
    count<T extends CustomerProfileCountArgs>(
      args?: Subset<T, CustomerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerProfileAggregateArgs>(args: Subset<T, CustomerProfileAggregateArgs>): Prisma.PrismaPromise<GetCustomerProfileAggregateType<T>>

    /**
     * Group by CustomerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerProfileGroupByArgs['orderBy'] }
        : { orderBy?: CustomerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerProfile model
   */
  readonly fields: CustomerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerProfile model
   */
  interface CustomerProfileFieldRefs {
    readonly id: FieldRef<"CustomerProfile", 'Int'>
    readonly userId: FieldRef<"CustomerProfile", 'Int'>
    readonly address: FieldRef<"CustomerProfile", 'String'>
    readonly latitude: FieldRef<"CustomerProfile", 'Float'>
    readonly longitude: FieldRef<"CustomerProfile", 'Float'>
    readonly createdAt: FieldRef<"CustomerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerProfile findUnique
   */
  export type CustomerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile findUniqueOrThrow
   */
  export type CustomerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile findFirst
   */
  export type CustomerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerProfiles.
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerProfiles.
     */
    distinct?: CustomerProfileScalarFieldEnum | CustomerProfileScalarFieldEnum[]
  }

  /**
   * CustomerProfile findFirstOrThrow
   */
  export type CustomerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerProfiles.
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerProfiles.
     */
    distinct?: CustomerProfileScalarFieldEnum | CustomerProfileScalarFieldEnum[]
  }

  /**
   * CustomerProfile findMany
   */
  export type CustomerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfiles to fetch.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerProfiles.
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    distinct?: CustomerProfileScalarFieldEnum | CustomerProfileScalarFieldEnum[]
  }

  /**
   * CustomerProfile create
   */
  export type CustomerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerProfile.
     */
    data: XOR<CustomerProfileCreateInput, CustomerProfileUncheckedCreateInput>
  }

  /**
   * CustomerProfile createMany
   */
  export type CustomerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerProfiles.
     */
    data: CustomerProfileCreateManyInput | CustomerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerProfile update
   */
  export type CustomerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerProfile.
     */
    data: XOR<CustomerProfileUpdateInput, CustomerProfileUncheckedUpdateInput>
    /**
     * Choose, which CustomerProfile to update.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile updateMany
   */
  export type CustomerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerProfiles.
     */
    data: XOR<CustomerProfileUpdateManyMutationInput, CustomerProfileUncheckedUpdateManyInput>
    /**
     * Filter which CustomerProfiles to update
     */
    where?: CustomerProfileWhereInput
    /**
     * Limit how many CustomerProfiles to update.
     */
    limit?: number
  }

  /**
   * CustomerProfile upsert
   */
  export type CustomerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerProfile to update in case it exists.
     */
    where: CustomerProfileWhereUniqueInput
    /**
     * In case the CustomerProfile found by the `where` argument doesn't exist, create a new CustomerProfile with this data.
     */
    create: XOR<CustomerProfileCreateInput, CustomerProfileUncheckedCreateInput>
    /**
     * In case the CustomerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerProfileUpdateInput, CustomerProfileUncheckedUpdateInput>
  }

  /**
   * CustomerProfile delete
   */
  export type CustomerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter which CustomerProfile to delete.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile deleteMany
   */
  export type CustomerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerProfiles to delete
     */
    where?: CustomerProfileWhereInput
    /**
     * Limit how many CustomerProfiles to delete.
     */
    limit?: number
  }

  /**
   * CustomerProfile without action
   */
  export type CustomerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
  }


  /**
   * Model ServiceRequest
   */

  export type AggregateServiceRequest = {
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  export type ServiceRequestAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    providerId: number | null
    latitude: number | null
    longitude: number | null
    amount: number | null
    quote: number | null
  }

  export type ServiceRequestSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    providerId: number | null
    latitude: number | null
    longitude: number | null
    amount: number | null
    quote: number | null
  }

  export type ServiceRequestMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    providerId: number | null
    category: $Enums.TradeCategory | null
    description: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    scheduledDate: Date | null
    status: $Enums.JobStatus | null
    amount: number | null
    cancelReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customerOtp: string | null
    providerOtp: string | null
    otpExpiresAt: Date | null
    otpVerifiedAt: Date | null
    quote: number | null
    quoteMessage: string | null
    quoteAt: Date | null
  }

  export type ServiceRequestMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    providerId: number | null
    category: $Enums.TradeCategory | null
    description: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    scheduledDate: Date | null
    status: $Enums.JobStatus | null
    amount: number | null
    cancelReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customerOtp: string | null
    providerOtp: string | null
    otpExpiresAt: Date | null
    otpVerifiedAt: Date | null
    quote: number | null
    quoteMessage: string | null
    quoteAt: Date | null
  }

  export type ServiceRequestCountAggregateOutputType = {
    id: number
    customerId: number
    providerId: number
    category: number
    description: number
    address: number
    latitude: number
    longitude: number
    scheduledDate: number
    status: number
    amount: number
    cancelReason: number
    createdAt: number
    updatedAt: number
    customerOtp: number
    providerOtp: number
    otpExpiresAt: number
    otpVerifiedAt: number
    quote: number
    quoteMessage: number
    quoteAt: number
    _all: number
  }


  export type ServiceRequestAvgAggregateInputType = {
    id?: true
    customerId?: true
    providerId?: true
    latitude?: true
    longitude?: true
    amount?: true
    quote?: true
  }

  export type ServiceRequestSumAggregateInputType = {
    id?: true
    customerId?: true
    providerId?: true
    latitude?: true
    longitude?: true
    amount?: true
    quote?: true
  }

  export type ServiceRequestMinAggregateInputType = {
    id?: true
    customerId?: true
    providerId?: true
    category?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    scheduledDate?: true
    status?: true
    amount?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
    customerOtp?: true
    providerOtp?: true
    otpExpiresAt?: true
    otpVerifiedAt?: true
    quote?: true
    quoteMessage?: true
    quoteAt?: true
  }

  export type ServiceRequestMaxAggregateInputType = {
    id?: true
    customerId?: true
    providerId?: true
    category?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    scheduledDate?: true
    status?: true
    amount?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
    customerOtp?: true
    providerOtp?: true
    otpExpiresAt?: true
    otpVerifiedAt?: true
    quote?: true
    quoteMessage?: true
    quoteAt?: true
  }

  export type ServiceRequestCountAggregateInputType = {
    id?: true
    customerId?: true
    providerId?: true
    category?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    scheduledDate?: true
    status?: true
    amount?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
    customerOtp?: true
    providerOtp?: true
    otpExpiresAt?: true
    otpVerifiedAt?: true
    quote?: true
    quoteMessage?: true
    quoteAt?: true
    _all?: true
  }

  export type ServiceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequest to aggregate.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequests
    **/
    _count?: true | ServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type GetServiceRequestAggregateType<T extends ServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequest[P]>
      : GetScalarType<T[P], AggregateServiceRequest[P]>
  }




  export type ServiceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithAggregationInput | ServiceRequestOrderByWithAggregationInput[]
    by: ServiceRequestScalarFieldEnum[] | ServiceRequestScalarFieldEnum
    having?: ServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequestCountAggregateInputType | true
    _avg?: ServiceRequestAvgAggregateInputType
    _sum?: ServiceRequestSumAggregateInputType
    _min?: ServiceRequestMinAggregateInputType
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type ServiceRequestGroupByOutputType = {
    id: number
    customerId: number
    providerId: number | null
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date
    status: $Enums.JobStatus
    amount: number | null
    cancelReason: string | null
    createdAt: Date
    updatedAt: Date
    customerOtp: string | null
    providerOtp: string | null
    otpExpiresAt: Date | null
    otpVerifiedAt: Date | null
    quote: number | null
    quoteMessage: string | null
    quoteAt: Date | null
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  type GetServiceRequestGroupByPayload<T extends ServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    providerId?: boolean
    category?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    scheduledDate?: boolean
    status?: boolean
    amount?: boolean
    cancelReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerOtp?: boolean
    providerOtp?: boolean
    otpExpiresAt?: boolean
    otpVerifiedAt?: boolean
    quote?: boolean
    quoteMessage?: boolean
    quoteAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ServiceRequest$providerArgs<ExtArgs>
    review?: boolean | ServiceRequest$reviewArgs<ExtArgs>
    payments?: boolean | ServiceRequest$paymentsArgs<ExtArgs>
    _count?: boolean | ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>



  export type ServiceRequestSelectScalar = {
    id?: boolean
    customerId?: boolean
    providerId?: boolean
    category?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    scheduledDate?: boolean
    status?: boolean
    amount?: boolean
    cancelReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerOtp?: boolean
    providerOtp?: boolean
    otpExpiresAt?: boolean
    otpVerifiedAt?: boolean
    quote?: boolean
    quoteMessage?: boolean
    quoteAt?: boolean
  }

  export type ServiceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "providerId" | "category" | "description" | "address" | "latitude" | "longitude" | "scheduledDate" | "status" | "amount" | "cancelReason" | "createdAt" | "updatedAt" | "customerOtp" | "providerOtp" | "otpExpiresAt" | "otpVerifiedAt" | "quote" | "quoteMessage" | "quoteAt", ExtArgs["result"]["serviceRequest"]>
  export type ServiceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ServiceRequest$providerArgs<ExtArgs>
    review?: boolean | ServiceRequest$reviewArgs<ExtArgs>
    payments?: boolean | ServiceRequest$paymentsArgs<ExtArgs>
    _count?: boolean | ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServiceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequest"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$UserPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      providerId: number | null
      category: $Enums.TradeCategory
      description: string
      address: string
      latitude: number
      longitude: number
      scheduledDate: Date
      status: $Enums.JobStatus
      amount: number | null
      cancelReason: string | null
      createdAt: Date
      updatedAt: Date
      customerOtp: string | null
      providerOtp: string | null
      otpExpiresAt: Date | null
      otpVerifiedAt: Date | null
      quote: number | null
      quoteMessage: string | null
      quoteAt: Date | null
    }, ExtArgs["result"]["serviceRequest"]>
    composites: {}
  }

  type ServiceRequestGetPayload<S extends boolean | null | undefined | ServiceRequestDefaultArgs> = $Result.GetResult<Prisma.$ServiceRequestPayload, S>

  type ServiceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceRequestCountAggregateInputType | true
    }

  export interface ServiceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequest'], meta: { name: 'ServiceRequest' } }
    /**
     * Find zero or one ServiceRequest that matches the filter.
     * @param {ServiceRequestFindUniqueArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRequestFindUniqueArgs>(args: SelectSubset<T, ServiceRequestFindUniqueArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRequestFindFirstArgs>(args?: SelectSubset<T, ServiceRequestFindFirstArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany()
     * 
     * // Get first 10 ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRequestWithIdOnly = await prisma.serviceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceRequestFindManyArgs>(args?: SelectSubset<T, ServiceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceRequest.
     * @param {ServiceRequestCreateArgs} args - Arguments to create a ServiceRequest.
     * @example
     * // Create one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.create({
     *   data: {
     *     // ... data to create a ServiceRequest
     *   }
     * })
     * 
     */
    create<T extends ServiceRequestCreateArgs>(args: SelectSubset<T, ServiceRequestCreateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceRequests.
     * @param {ServiceRequestCreateManyArgs} args - Arguments to create many ServiceRequests.
     * @example
     * // Create many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceRequestCreateManyArgs>(args?: SelectSubset<T, ServiceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceRequest.
     * @param {ServiceRequestDeleteArgs} args - Arguments to delete one ServiceRequest.
     * @example
     * // Delete one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequest
     *   }
     * })
     * 
     */
    delete<T extends ServiceRequestDeleteArgs>(args: SelectSubset<T, ServiceRequestDeleteArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceRequest.
     * @param {ServiceRequestUpdateArgs} args - Arguments to update one ServiceRequest.
     * @example
     * // Update one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceRequestUpdateArgs>(args: SelectSubset<T, ServiceRequestUpdateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceRequests.
     * @param {ServiceRequestDeleteManyArgs} args - Arguments to filter ServiceRequests to delete.
     * @example
     * // Delete a few ServiceRequests
     * const { count } = await prisma.serviceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceRequestDeleteManyArgs>(args?: SelectSubset<T, ServiceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceRequestUpdateManyArgs>(args: SelectSubset<T, ServiceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceRequest.
     * @param {ServiceRequestUpsertArgs} args - Arguments to update or create a ServiceRequest.
     * @example
     * // Update or create a ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.upsert({
     *   create: {
     *     // ... data to create a ServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequest we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRequestUpsertArgs>(args: SelectSubset<T, ServiceRequestUpsertArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestCountArgs} args - Arguments to filter ServiceRequests to count.
     * @example
     * // Count the number of ServiceRequests
     * const count = await prisma.serviceRequest.count({
     *   where: {
     *     // ... the filter for the ServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequestCountArgs>(
      args?: Subset<T, ServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceRequestAggregateArgs>(args: Subset<T, ServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetServiceRequestAggregateType<T>>

    /**
     * Group by ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRequest model
   */
  readonly fields: ServiceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ServiceRequest$providerArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequest$providerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends ServiceRequest$reviewArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequest$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends ServiceRequest$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequest$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceRequest model
   */
  interface ServiceRequestFieldRefs {
    readonly id: FieldRef<"ServiceRequest", 'Int'>
    readonly customerId: FieldRef<"ServiceRequest", 'Int'>
    readonly providerId: FieldRef<"ServiceRequest", 'Int'>
    readonly category: FieldRef<"ServiceRequest", 'TradeCategory'>
    readonly description: FieldRef<"ServiceRequest", 'String'>
    readonly address: FieldRef<"ServiceRequest", 'String'>
    readonly latitude: FieldRef<"ServiceRequest", 'Float'>
    readonly longitude: FieldRef<"ServiceRequest", 'Float'>
    readonly scheduledDate: FieldRef<"ServiceRequest", 'DateTime'>
    readonly status: FieldRef<"ServiceRequest", 'JobStatus'>
    readonly amount: FieldRef<"ServiceRequest", 'Float'>
    readonly cancelReason: FieldRef<"ServiceRequest", 'String'>
    readonly createdAt: FieldRef<"ServiceRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceRequest", 'DateTime'>
    readonly customerOtp: FieldRef<"ServiceRequest", 'String'>
    readonly providerOtp: FieldRef<"ServiceRequest", 'String'>
    readonly otpExpiresAt: FieldRef<"ServiceRequest", 'DateTime'>
    readonly otpVerifiedAt: FieldRef<"ServiceRequest", 'DateTime'>
    readonly quote: FieldRef<"ServiceRequest", 'Float'>
    readonly quoteMessage: FieldRef<"ServiceRequest", 'String'>
    readonly quoteAt: FieldRef<"ServiceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceRequest findUnique
   */
  export type ServiceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findUniqueOrThrow
   */
  export type ServiceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findFirst
   */
  export type ServiceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findFirstOrThrow
   */
  export type ServiceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findMany
   */
  export type ServiceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequests to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest create
   */
  export type ServiceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRequest.
     */
    data: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
  }

  /**
   * ServiceRequest createMany
   */
  export type ServiceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRequests.
     */
    data: ServiceRequestCreateManyInput | ServiceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRequest update
   */
  export type ServiceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRequest.
     */
    data: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequest to update.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest updateMany
   */
  export type ServiceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRequests.
     */
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequests to update
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to update.
     */
    limit?: number
  }

  /**
   * ServiceRequest upsert
   */
  export type ServiceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRequest to update in case it exists.
     */
    where: ServiceRequestWhereUniqueInput
    /**
     * In case the ServiceRequest found by the `where` argument doesn't exist, create a new ServiceRequest with this data.
     */
    create: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
    /**
     * In case the ServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
  }

  /**
   * ServiceRequest delete
   */
  export type ServiceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter which ServiceRequest to delete.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest deleteMany
   */
  export type ServiceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequests to delete
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to delete.
     */
    limit?: number
  }

  /**
   * ServiceRequest.provider
   */
  export type ServiceRequest$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ServiceRequest.review
   */
  export type ServiceRequest$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * ServiceRequest.payments
   */
  export type ServiceRequest$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * ServiceRequest without action
   */
  export type ServiceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
    reviewerId: number | null
    providerId: number | null
    rating: number | null
    sentimentScore: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    jobId: number | null
    reviewerId: number | null
    providerId: number | null
    rating: number | null
    sentimentScore: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    reviewerId: number | null
    providerId: number | null
    rating: number | null
    comment: string | null
    sentimentScore: number | null
    isFlagged: boolean | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    reviewerId: number | null
    providerId: number | null
    rating: number | null
    comment: string | null
    sentimentScore: number | null
    isFlagged: boolean | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    jobId: number
    reviewerId: number
    providerId: number
    rating: number
    comment: number
    sentimentScore: number
    isFlagged: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    jobId?: true
    reviewerId?: true
    providerId?: true
    rating?: true
    sentimentScore?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    jobId?: true
    reviewerId?: true
    providerId?: true
    rating?: true
    sentimentScore?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    jobId?: true
    reviewerId?: true
    providerId?: true
    rating?: true
    comment?: true
    sentimentScore?: true
    isFlagged?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    jobId?: true
    reviewerId?: true
    providerId?: true
    rating?: true
    comment?: true
    sentimentScore?: true
    isFlagged?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    jobId?: true
    reviewerId?: true
    providerId?: true
    rating?: true
    comment?: true
    sentimentScore?: true
    isFlagged?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    jobId: number
    reviewerId: number
    providerId: number
    rating: number
    comment: string | null
    sentimentScore: number | null
    isFlagged: boolean
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    reviewerId?: boolean
    providerId?: boolean
    rating?: boolean
    comment?: boolean
    sentimentScore?: boolean
    isFlagged?: boolean
    createdAt?: boolean
    job?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    jobId?: boolean
    reviewerId?: boolean
    providerId?: boolean
    rating?: boolean
    comment?: boolean
    sentimentScore?: boolean
    isFlagged?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "reviewerId" | "providerId" | "rating" | "comment" | "sentimentScore" | "isFlagged" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      job: Prisma.$ServiceRequestPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      reviewerId: number
      providerId: number
      rating: number
      comment: string | null
      sentimentScore: number | null
      isFlagged: boolean
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends ServiceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequestDefaultArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly jobId: FieldRef<"Review", 'Int'>
    readonly reviewerId: FieldRef<"Review", 'Int'>
    readonly providerId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly sentimentScore: FieldRef<"Review", 'Float'>
    readonly isFlagged: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
    amount: number | null
    paidBy: number | null
    paidTo: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    jobId: number | null
    amount: number | null
    paidBy: number | null
    paidTo: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    amount: number | null
    reference: string | null
    status: $Enums.PaymentStatus | null
    paidBy: number | null
    paidTo: number | null
    releasedAt: Date | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    amount: number | null
    reference: string | null
    status: $Enums.PaymentStatus | null
    paidBy: number | null
    paidTo: number | null
    releasedAt: Date | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    jobId: number
    amount: number
    reference: number
    status: number
    paidBy: number
    paidTo: number
    releasedAt: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    jobId?: true
    amount?: true
    paidBy?: true
    paidTo?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    jobId?: true
    amount?: true
    paidBy?: true
    paidTo?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    jobId?: true
    amount?: true
    reference?: true
    status?: true
    paidBy?: true
    paidTo?: true
    releasedAt?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    jobId?: true
    amount?: true
    reference?: true
    status?: true
    paidBy?: true
    paidTo?: true
    releasedAt?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    jobId?: true
    amount?: true
    reference?: true
    status?: true
    paidBy?: true
    paidTo?: true
    releasedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    jobId: number
    amount: number
    reference: string
    status: $Enums.PaymentStatus
    paidBy: number
    paidTo: number | null
    releasedAt: Date | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    amount?: boolean
    reference?: boolean
    status?: boolean
    paidBy?: boolean
    paidTo?: boolean
    releasedAt?: boolean
    createdAt?: boolean
    job?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Payment$providerArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    jobId?: boolean
    amount?: boolean
    reference?: boolean
    status?: boolean
    paidBy?: boolean
    paidTo?: boolean
    releasedAt?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "amount" | "reference" | "status" | "paidBy" | "paidTo" | "releasedAt" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Payment$providerArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      job: Prisma.$ServiceRequestPayload<ExtArgs>
      customer: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      amount: number
      reference: string
      status: $Enums.PaymentStatus
      paidBy: number
      paidTo: number | null
      releasedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends ServiceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequestDefaultArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends Payment$providerArgs<ExtArgs> = {}>(args?: Subset<T, Payment$providerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly jobId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paidBy: FieldRef<"Payment", 'Int'>
    readonly paidTo: FieldRef<"Payment", 'Int'>
    readonly releasedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.provider
   */
  export type Payment$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Blacklist
   */

  export type AggregateBlacklist = {
    _count: BlacklistCountAggregateOutputType | null
    _avg: BlacklistAvgAggregateOutputType | null
    _sum: BlacklistSumAggregateOutputType | null
    _min: BlacklistMinAggregateOutputType | null
    _max: BlacklistMaxAggregateOutputType | null
  }

  export type BlacklistAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    blacklistedBy: number | null
  }

  export type BlacklistSumAggregateOutputType = {
    id: number | null
    userId: number | null
    blacklistedBy: number | null
  }

  export type BlacklistMinAggregateOutputType = {
    id: number | null
    userId: number | null
    reason: string | null
    blacklistedBy: number | null
    createdAt: Date | null
  }

  export type BlacklistMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    reason: string | null
    blacklistedBy: number | null
    createdAt: Date | null
  }

  export type BlacklistCountAggregateOutputType = {
    id: number
    userId: number
    reason: number
    blacklistedBy: number
    createdAt: number
    _all: number
  }


  export type BlacklistAvgAggregateInputType = {
    id?: true
    userId?: true
    blacklistedBy?: true
  }

  export type BlacklistSumAggregateInputType = {
    id?: true
    userId?: true
    blacklistedBy?: true
  }

  export type BlacklistMinAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    blacklistedBy?: true
    createdAt?: true
  }

  export type BlacklistMaxAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    blacklistedBy?: true
    createdAt?: true
  }

  export type BlacklistCountAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    blacklistedBy?: true
    createdAt?: true
    _all?: true
  }

  export type BlacklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blacklist to aggregate.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blacklists
    **/
    _count?: true | BlacklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlacklistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlacklistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlacklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlacklistMaxAggregateInputType
  }

  export type GetBlacklistAggregateType<T extends BlacklistAggregateArgs> = {
        [P in keyof T & keyof AggregateBlacklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlacklist[P]>
      : GetScalarType<T[P], AggregateBlacklist[P]>
  }




  export type BlacklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistWhereInput
    orderBy?: BlacklistOrderByWithAggregationInput | BlacklistOrderByWithAggregationInput[]
    by: BlacklistScalarFieldEnum[] | BlacklistScalarFieldEnum
    having?: BlacklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlacklistCountAggregateInputType | true
    _avg?: BlacklistAvgAggregateInputType
    _sum?: BlacklistSumAggregateInputType
    _min?: BlacklistMinAggregateInputType
    _max?: BlacklistMaxAggregateInputType
  }

  export type BlacklistGroupByOutputType = {
    id: number
    userId: number
    reason: string
    blacklistedBy: number
    createdAt: Date
    _count: BlacklistCountAggregateOutputType | null
    _avg: BlacklistAvgAggregateOutputType | null
    _sum: BlacklistSumAggregateOutputType | null
    _min: BlacklistMinAggregateOutputType | null
    _max: BlacklistMaxAggregateOutputType | null
  }

  type GetBlacklistGroupByPayload<T extends BlacklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlacklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlacklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlacklistGroupByOutputType[P]>
            : GetScalarType<T[P], BlacklistGroupByOutputType[P]>
        }
      >
    >


  export type BlacklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    blacklistedBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blacklistedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blacklist"]>



  export type BlacklistSelectScalar = {
    id?: boolean
    userId?: boolean
    reason?: boolean
    blacklistedBy?: boolean
    createdAt?: boolean
  }

  export type BlacklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reason" | "blacklistedBy" | "createdAt", ExtArgs["result"]["blacklist"]>
  export type BlacklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blacklistedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlacklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blacklist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blacklistedByUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      reason: string
      blacklistedBy: number
      createdAt: Date
    }, ExtArgs["result"]["blacklist"]>
    composites: {}
  }

  type BlacklistGetPayload<S extends boolean | null | undefined | BlacklistDefaultArgs> = $Result.GetResult<Prisma.$BlacklistPayload, S>

  type BlacklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlacklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlacklistCountAggregateInputType | true
    }

  export interface BlacklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blacklist'], meta: { name: 'Blacklist' } }
    /**
     * Find zero or one Blacklist that matches the filter.
     * @param {BlacklistFindUniqueArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlacklistFindUniqueArgs>(args: SelectSubset<T, BlacklistFindUniqueArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blacklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlacklistFindUniqueOrThrowArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlacklistFindUniqueOrThrowArgs>(args: SelectSubset<T, BlacklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blacklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindFirstArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlacklistFindFirstArgs>(args?: SelectSubset<T, BlacklistFindFirstArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blacklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindFirstOrThrowArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlacklistFindFirstOrThrowArgs>(args?: SelectSubset<T, BlacklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blacklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blacklists
     * const blacklists = await prisma.blacklist.findMany()
     * 
     * // Get first 10 Blacklists
     * const blacklists = await prisma.blacklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blacklistWithIdOnly = await prisma.blacklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlacklistFindManyArgs>(args?: SelectSubset<T, BlacklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blacklist.
     * @param {BlacklistCreateArgs} args - Arguments to create a Blacklist.
     * @example
     * // Create one Blacklist
     * const Blacklist = await prisma.blacklist.create({
     *   data: {
     *     // ... data to create a Blacklist
     *   }
     * })
     * 
     */
    create<T extends BlacklistCreateArgs>(args: SelectSubset<T, BlacklistCreateArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blacklists.
     * @param {BlacklistCreateManyArgs} args - Arguments to create many Blacklists.
     * @example
     * // Create many Blacklists
     * const blacklist = await prisma.blacklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlacklistCreateManyArgs>(args?: SelectSubset<T, BlacklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blacklist.
     * @param {BlacklistDeleteArgs} args - Arguments to delete one Blacklist.
     * @example
     * // Delete one Blacklist
     * const Blacklist = await prisma.blacklist.delete({
     *   where: {
     *     // ... filter to delete one Blacklist
     *   }
     * })
     * 
     */
    delete<T extends BlacklistDeleteArgs>(args: SelectSubset<T, BlacklistDeleteArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blacklist.
     * @param {BlacklistUpdateArgs} args - Arguments to update one Blacklist.
     * @example
     * // Update one Blacklist
     * const blacklist = await prisma.blacklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlacklistUpdateArgs>(args: SelectSubset<T, BlacklistUpdateArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blacklists.
     * @param {BlacklistDeleteManyArgs} args - Arguments to filter Blacklists to delete.
     * @example
     * // Delete a few Blacklists
     * const { count } = await prisma.blacklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlacklistDeleteManyArgs>(args?: SelectSubset<T, BlacklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blacklists
     * const blacklist = await prisma.blacklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlacklistUpdateManyArgs>(args: SelectSubset<T, BlacklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blacklist.
     * @param {BlacklistUpsertArgs} args - Arguments to update or create a Blacklist.
     * @example
     * // Update or create a Blacklist
     * const blacklist = await prisma.blacklist.upsert({
     *   create: {
     *     // ... data to create a Blacklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blacklist we want to update
     *   }
     * })
     */
    upsert<T extends BlacklistUpsertArgs>(args: SelectSubset<T, BlacklistUpsertArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistCountArgs} args - Arguments to filter Blacklists to count.
     * @example
     * // Count the number of Blacklists
     * const count = await prisma.blacklist.count({
     *   where: {
     *     // ... the filter for the Blacklists we want to count
     *   }
     * })
    **/
    count<T extends BlacklistCountArgs>(
      args?: Subset<T, BlacklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlacklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlacklistAggregateArgs>(args: Subset<T, BlacklistAggregateArgs>): Prisma.PrismaPromise<GetBlacklistAggregateType<T>>

    /**
     * Group by Blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlacklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlacklistGroupByArgs['orderBy'] }
        : { orderBy?: BlacklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlacklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlacklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blacklist model
   */
  readonly fields: BlacklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blacklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlacklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blacklistedByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blacklist model
   */
  interface BlacklistFieldRefs {
    readonly id: FieldRef<"Blacklist", 'Int'>
    readonly userId: FieldRef<"Blacklist", 'Int'>
    readonly reason: FieldRef<"Blacklist", 'String'>
    readonly blacklistedBy: FieldRef<"Blacklist", 'Int'>
    readonly createdAt: FieldRef<"Blacklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blacklist findUnique
   */
  export type BlacklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist findUniqueOrThrow
   */
  export type BlacklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist findFirst
   */
  export type BlacklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist findFirstOrThrow
   */
  export type BlacklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist findMany
   */
  export type BlacklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklists to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist create
   */
  export type BlacklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Blacklist.
     */
    data: XOR<BlacklistCreateInput, BlacklistUncheckedCreateInput>
  }

  /**
   * Blacklist createMany
   */
  export type BlacklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blacklists.
     */
    data: BlacklistCreateManyInput | BlacklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blacklist update
   */
  export type BlacklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Blacklist.
     */
    data: XOR<BlacklistUpdateInput, BlacklistUncheckedUpdateInput>
    /**
     * Choose, which Blacklist to update.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist updateMany
   */
  export type BlacklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blacklists.
     */
    data: XOR<BlacklistUpdateManyMutationInput, BlacklistUncheckedUpdateManyInput>
    /**
     * Filter which Blacklists to update
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to update.
     */
    limit?: number
  }

  /**
   * Blacklist upsert
   */
  export type BlacklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Blacklist to update in case it exists.
     */
    where: BlacklistWhereUniqueInput
    /**
     * In case the Blacklist found by the `where` argument doesn't exist, create a new Blacklist with this data.
     */
    create: XOR<BlacklistCreateInput, BlacklistUncheckedCreateInput>
    /**
     * In case the Blacklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlacklistUpdateInput, BlacklistUncheckedUpdateInput>
  }

  /**
   * Blacklist delete
   */
  export type BlacklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter which Blacklist to delete.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist deleteMany
   */
  export type BlacklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blacklists to delete
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to delete.
     */
    limit?: number
  }

  /**
   * Blacklist without action
   */
  export type BlacklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProviderProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    bio: 'bio',
    averageRating: 'averageRating',
    isAvailable: 'isAvailable',
    completedJobsCount: 'completedJobsCount',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type ProviderProfileScalarFieldEnum = (typeof ProviderProfileScalarFieldEnum)[keyof typeof ProviderProfileScalarFieldEnum]


  export const CustomerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type CustomerProfileScalarFieldEnum = (typeof CustomerProfileScalarFieldEnum)[keyof typeof CustomerProfileScalarFieldEnum]


  export const ServiceRequestScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    providerId: 'providerId',
    category: 'category',
    description: 'description',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    scheduledDate: 'scheduledDate',
    status: 'status',
    amount: 'amount',
    cancelReason: 'cancelReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customerOtp: 'customerOtp',
    providerOtp: 'providerOtp',
    otpExpiresAt: 'otpExpiresAt',
    otpVerifiedAt: 'otpVerifiedAt',
    quote: 'quote',
    quoteMessage: 'quoteMessage',
    quoteAt: 'quoteAt'
  };

  export type ServiceRequestScalarFieldEnum = (typeof ServiceRequestScalarFieldEnum)[keyof typeof ServiceRequestScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    reviewerId: 'reviewerId',
    providerId: 'providerId',
    rating: 'rating',
    comment: 'comment',
    sentimentScore: 'sentimentScore',
    isFlagged: 'isFlagged',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    amount: 'amount',
    reference: 'reference',
    status: 'status',
    paidBy: 'paidBy',
    paidTo: 'paidTo',
    releasedAt: 'releasedAt',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const BlacklistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reason: 'reason',
    blacklistedBy: 'blacklistedBy',
    createdAt: 'createdAt'
  };

  export type BlacklistScalarFieldEnum = (typeof BlacklistScalarFieldEnum)[keyof typeof BlacklistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProviderProfileOrderByRelevanceFieldEnum: {
    bio: 'bio'
  };

  export type ProviderProfileOrderByRelevanceFieldEnum = (typeof ProviderProfileOrderByRelevanceFieldEnum)[keyof typeof ProviderProfileOrderByRelevanceFieldEnum]


  export const CustomerProfileOrderByRelevanceFieldEnum: {
    address: 'address'
  };

  export type CustomerProfileOrderByRelevanceFieldEnum = (typeof CustomerProfileOrderByRelevanceFieldEnum)[keyof typeof CustomerProfileOrderByRelevanceFieldEnum]


  export const ServiceRequestOrderByRelevanceFieldEnum: {
    description: 'description',
    address: 'address',
    cancelReason: 'cancelReason',
    customerOtp: 'customerOtp',
    providerOtp: 'providerOtp',
    quoteMessage: 'quoteMessage'
  };

  export type ServiceRequestOrderByRelevanceFieldEnum = (typeof ServiceRequestOrderByRelevanceFieldEnum)[keyof typeof ServiceRequestOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    reference: 'reference'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const BlacklistOrderByRelevanceFieldEnum: {
    reason: 'reason'
  };

  export type BlacklistOrderByRelevanceFieldEnum = (typeof BlacklistOrderByRelevanceFieldEnum)[keyof typeof BlacklistOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'TradeCategory'
   */
  export type EnumTradeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeCategory'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    ProviderProfile?: XOR<ProviderProfileNullableScalarRelationFilter, ProviderProfileWhereInput> | null
    CustomerProfile?: XOR<CustomerProfileNullableScalarRelationFilter, CustomerProfileWhereInput> | null
    requestsAsCustomer?: ServiceRequestListRelationFilter
    requestsAsProvider?: ServiceRequestListRelationFilter
    ReviewsGiven?: ReviewListRelationFilter
    ReviewsReceived?: ReviewListRelationFilter
    paymentsMade?: PaymentListRelationFilter
    paymentsReceived?: PaymentListRelationFilter
    blacklistEntry?: XOR<BlacklistNullableScalarRelationFilter, BlacklistWhereInput> | null
    blacklistsCreated?: BlacklistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    ProviderProfile?: ProviderProfileOrderByWithRelationInput
    CustomerProfile?: CustomerProfileOrderByWithRelationInput
    requestsAsCustomer?: ServiceRequestOrderByRelationAggregateInput
    requestsAsProvider?: ServiceRequestOrderByRelationAggregateInput
    ReviewsGiven?: ReviewOrderByRelationAggregateInput
    ReviewsReceived?: ReviewOrderByRelationAggregateInput
    paymentsMade?: PaymentOrderByRelationAggregateInput
    paymentsReceived?: PaymentOrderByRelationAggregateInput
    blacklistEntry?: BlacklistOrderByWithRelationInput
    blacklistsCreated?: BlacklistOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    ProviderProfile?: XOR<ProviderProfileNullableScalarRelationFilter, ProviderProfileWhereInput> | null
    CustomerProfile?: XOR<CustomerProfileNullableScalarRelationFilter, CustomerProfileWhereInput> | null
    requestsAsCustomer?: ServiceRequestListRelationFilter
    requestsAsProvider?: ServiceRequestListRelationFilter
    ReviewsGiven?: ReviewListRelationFilter
    ReviewsReceived?: ReviewListRelationFilter
    paymentsMade?: PaymentListRelationFilter
    paymentsReceived?: PaymentListRelationFilter
    blacklistEntry?: XOR<BlacklistNullableScalarRelationFilter, BlacklistWhereInput> | null
    blacklistsCreated?: BlacklistListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
  }

  export type ProviderProfileWhereInput = {
    AND?: ProviderProfileWhereInput | ProviderProfileWhereInput[]
    OR?: ProviderProfileWhereInput[]
    NOT?: ProviderProfileWhereInput | ProviderProfileWhereInput[]
    id?: IntFilter<"ProviderProfile"> | number
    userId?: IntFilter<"ProviderProfile"> | number
    category?: EnumTradeCategoryNullableFilter<"ProviderProfile"> | $Enums.TradeCategory | null
    bio?: StringNullableFilter<"ProviderProfile"> | string | null
    averageRating?: FloatFilter<"ProviderProfile"> | number
    isAvailable?: BoolFilter<"ProviderProfile"> | boolean
    completedJobsCount?: IntFilter<"ProviderProfile"> | number
    latitude?: FloatNullableFilter<"ProviderProfile"> | number | null
    longitude?: FloatNullableFilter<"ProviderProfile"> | number | null
    createdAt?: DateTimeFilter<"ProviderProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProviderProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    averageRating?: SortOrder
    isAvailable?: SortOrder
    completedJobsCount?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ProviderProfileOrderByRelevanceInput
  }

  export type ProviderProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProviderProfileWhereInput | ProviderProfileWhereInput[]
    OR?: ProviderProfileWhereInput[]
    NOT?: ProviderProfileWhereInput | ProviderProfileWhereInput[]
    category?: EnumTradeCategoryNullableFilter<"ProviderProfile"> | $Enums.TradeCategory | null
    bio?: StringNullableFilter<"ProviderProfile"> | string | null
    averageRating?: FloatFilter<"ProviderProfile"> | number
    isAvailable?: BoolFilter<"ProviderProfile"> | boolean
    completedJobsCount?: IntFilter<"ProviderProfile"> | number
    latitude?: FloatNullableFilter<"ProviderProfile"> | number | null
    longitude?: FloatNullableFilter<"ProviderProfile"> | number | null
    createdAt?: DateTimeFilter<"ProviderProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProviderProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    averageRating?: SortOrder
    isAvailable?: SortOrder
    completedJobsCount?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProviderProfileCountOrderByAggregateInput
    _avg?: ProviderProfileAvgOrderByAggregateInput
    _max?: ProviderProfileMaxOrderByAggregateInput
    _min?: ProviderProfileMinOrderByAggregateInput
    _sum?: ProviderProfileSumOrderByAggregateInput
  }

  export type ProviderProfileScalarWhereWithAggregatesInput = {
    AND?: ProviderProfileScalarWhereWithAggregatesInput | ProviderProfileScalarWhereWithAggregatesInput[]
    OR?: ProviderProfileScalarWhereWithAggregatesInput[]
    NOT?: ProviderProfileScalarWhereWithAggregatesInput | ProviderProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProviderProfile"> | number
    userId?: IntWithAggregatesFilter<"ProviderProfile"> | number
    category?: EnumTradeCategoryNullableWithAggregatesFilter<"ProviderProfile"> | $Enums.TradeCategory | null
    bio?: StringNullableWithAggregatesFilter<"ProviderProfile"> | string | null
    averageRating?: FloatWithAggregatesFilter<"ProviderProfile"> | number
    isAvailable?: BoolWithAggregatesFilter<"ProviderProfile"> | boolean
    completedJobsCount?: IntWithAggregatesFilter<"ProviderProfile"> | number
    latitude?: FloatNullableWithAggregatesFilter<"ProviderProfile"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"ProviderProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ProviderProfile"> | Date | string
  }

  export type CustomerProfileWhereInput = {
    AND?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    OR?: CustomerProfileWhereInput[]
    NOT?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    id?: IntFilter<"CustomerProfile"> | number
    userId?: IntFilter<"CustomerProfile"> | number
    address?: StringNullableFilter<"CustomerProfile"> | string | null
    latitude?: FloatNullableFilter<"CustomerProfile"> | number | null
    longitude?: FloatNullableFilter<"CustomerProfile"> | number | null
    createdAt?: DateTimeFilter<"CustomerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CustomerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: CustomerProfileOrderByRelevanceInput
  }

  export type CustomerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    OR?: CustomerProfileWhereInput[]
    NOT?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    address?: StringNullableFilter<"CustomerProfile"> | string | null
    latitude?: FloatNullableFilter<"CustomerProfile"> | number | null
    longitude?: FloatNullableFilter<"CustomerProfile"> | number | null
    createdAt?: DateTimeFilter<"CustomerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CustomerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerProfileCountOrderByAggregateInput
    _avg?: CustomerProfileAvgOrderByAggregateInput
    _max?: CustomerProfileMaxOrderByAggregateInput
    _min?: CustomerProfileMinOrderByAggregateInput
    _sum?: CustomerProfileSumOrderByAggregateInput
  }

  export type CustomerProfileScalarWhereWithAggregatesInput = {
    AND?: CustomerProfileScalarWhereWithAggregatesInput | CustomerProfileScalarWhereWithAggregatesInput[]
    OR?: CustomerProfileScalarWhereWithAggregatesInput[]
    NOT?: CustomerProfileScalarWhereWithAggregatesInput | CustomerProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerProfile"> | number
    userId?: IntWithAggregatesFilter<"CustomerProfile"> | number
    address?: StringNullableWithAggregatesFilter<"CustomerProfile"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"CustomerProfile"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"CustomerProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerProfile"> | Date | string
  }

  export type ServiceRequestWhereInput = {
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    id?: IntFilter<"ServiceRequest"> | number
    customerId?: IntFilter<"ServiceRequest"> | number
    providerId?: IntNullableFilter<"ServiceRequest"> | number | null
    category?: EnumTradeCategoryFilter<"ServiceRequest"> | $Enums.TradeCategory
    description?: StringFilter<"ServiceRequest"> | string
    address?: StringFilter<"ServiceRequest"> | string
    latitude?: FloatFilter<"ServiceRequest"> | number
    longitude?: FloatFilter<"ServiceRequest"> | number
    scheduledDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    status?: EnumJobStatusFilter<"ServiceRequest"> | $Enums.JobStatus
    amount?: FloatNullableFilter<"ServiceRequest"> | number | null
    cancelReason?: StringNullableFilter<"ServiceRequest"> | string | null
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    customerOtp?: StringNullableFilter<"ServiceRequest"> | string | null
    providerOtp?: StringNullableFilter<"ServiceRequest"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    quote?: FloatNullableFilter<"ServiceRequest"> | number | null
    quoteMessage?: StringNullableFilter<"ServiceRequest"> | string | null
    quoteAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type ServiceRequestOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    amount?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerOtp?: SortOrderInput | SortOrder
    providerOtp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    otpVerifiedAt?: SortOrderInput | SortOrder
    quote?: SortOrderInput | SortOrder
    quoteMessage?: SortOrderInput | SortOrder
    quoteAt?: SortOrderInput | SortOrder
    customer?: UserOrderByWithRelationInput
    provider?: UserOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: ServiceRequestOrderByRelevanceInput
  }

  export type ServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    customerId?: IntFilter<"ServiceRequest"> | number
    providerId?: IntNullableFilter<"ServiceRequest"> | number | null
    category?: EnumTradeCategoryFilter<"ServiceRequest"> | $Enums.TradeCategory
    description?: StringFilter<"ServiceRequest"> | string
    address?: StringFilter<"ServiceRequest"> | string
    latitude?: FloatFilter<"ServiceRequest"> | number
    longitude?: FloatFilter<"ServiceRequest"> | number
    scheduledDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    status?: EnumJobStatusFilter<"ServiceRequest"> | $Enums.JobStatus
    amount?: FloatNullableFilter<"ServiceRequest"> | number | null
    cancelReason?: StringNullableFilter<"ServiceRequest"> | string | null
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    customerOtp?: StringNullableFilter<"ServiceRequest"> | string | null
    providerOtp?: StringNullableFilter<"ServiceRequest"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    quote?: FloatNullableFilter<"ServiceRequest"> | number | null
    quoteMessage?: StringNullableFilter<"ServiceRequest"> | string | null
    quoteAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type ServiceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    amount?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerOtp?: SortOrderInput | SortOrder
    providerOtp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    otpVerifiedAt?: SortOrderInput | SortOrder
    quote?: SortOrderInput | SortOrder
    quoteMessage?: SortOrderInput | SortOrder
    quoteAt?: SortOrderInput | SortOrder
    _count?: ServiceRequestCountOrderByAggregateInput
    _avg?: ServiceRequestAvgOrderByAggregateInput
    _max?: ServiceRequestMaxOrderByAggregateInput
    _min?: ServiceRequestMinOrderByAggregateInput
    _sum?: ServiceRequestSumOrderByAggregateInput
  }

  export type ServiceRequestScalarWhereWithAggregatesInput = {
    AND?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    OR?: ServiceRequestScalarWhereWithAggregatesInput[]
    NOT?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceRequest"> | number
    customerId?: IntWithAggregatesFilter<"ServiceRequest"> | number
    providerId?: IntNullableWithAggregatesFilter<"ServiceRequest"> | number | null
    category?: EnumTradeCategoryWithAggregatesFilter<"ServiceRequest"> | $Enums.TradeCategory
    description?: StringWithAggregatesFilter<"ServiceRequest"> | string
    address?: StringWithAggregatesFilter<"ServiceRequest"> | string
    latitude?: FloatWithAggregatesFilter<"ServiceRequest"> | number
    longitude?: FloatWithAggregatesFilter<"ServiceRequest"> | number
    scheduledDate?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
    status?: EnumJobStatusWithAggregatesFilter<"ServiceRequest"> | $Enums.JobStatus
    amount?: FloatNullableWithAggregatesFilter<"ServiceRequest"> | number | null
    cancelReason?: StringNullableWithAggregatesFilter<"ServiceRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
    customerOtp?: StringNullableWithAggregatesFilter<"ServiceRequest"> | string | null
    providerOtp?: StringNullableWithAggregatesFilter<"ServiceRequest"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"ServiceRequest"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableWithAggregatesFilter<"ServiceRequest"> | Date | string | null
    quote?: FloatNullableWithAggregatesFilter<"ServiceRequest"> | number | null
    quoteMessage?: StringNullableWithAggregatesFilter<"ServiceRequest"> | string | null
    quoteAt?: DateTimeNullableWithAggregatesFilter<"ServiceRequest"> | Date | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    jobId?: IntFilter<"Review"> | number
    reviewerId?: IntFilter<"Review"> | number
    providerId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    sentimentScore?: FloatNullableFilter<"Review"> | number | null
    isFlagged?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    job?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    reviewerId?: SortOrder
    providerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    isFlagged?: SortOrder
    createdAt?: SortOrder
    job?: ServiceRequestOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    provider?: UserOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jobId?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    reviewerId?: IntFilter<"Review"> | number
    providerId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    sentimentScore?: FloatNullableFilter<"Review"> | number | null
    isFlagged?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    job?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "jobId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    reviewerId?: SortOrder
    providerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    isFlagged?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    jobId?: IntWithAggregatesFilter<"Review"> | number
    reviewerId?: IntWithAggregatesFilter<"Review"> | number
    providerId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    sentimentScore?: FloatNullableWithAggregatesFilter<"Review"> | number | null
    isFlagged?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    jobId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    reference?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidBy?: IntFilter<"Payment"> | number
    paidTo?: IntNullableFilter<"Payment"> | number | null
    releasedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    job?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paidBy?: SortOrder
    paidTo?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    job?: ServiceRequestOrderByWithRelationInput
    customer?: UserOrderByWithRelationInput
    provider?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    jobId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidBy?: IntFilter<"Payment"> | number
    paidTo?: IntNullableFilter<"Payment"> | number | null
    releasedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    job?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "reference">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paidBy?: SortOrder
    paidTo?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    jobId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    reference?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paidBy?: IntWithAggregatesFilter<"Payment"> | number
    paidTo?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    releasedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type BlacklistWhereInput = {
    AND?: BlacklistWhereInput | BlacklistWhereInput[]
    OR?: BlacklistWhereInput[]
    NOT?: BlacklistWhereInput | BlacklistWhereInput[]
    id?: IntFilter<"Blacklist"> | number
    userId?: IntFilter<"Blacklist"> | number
    reason?: StringFilter<"Blacklist"> | string
    blacklistedBy?: IntFilter<"Blacklist"> | number
    createdAt?: DateTimeFilter<"Blacklist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blacklistedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlacklistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    blacklistedBy?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    blacklistedByUser?: UserOrderByWithRelationInput
    _relevance?: BlacklistOrderByRelevanceInput
  }

  export type BlacklistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BlacklistWhereInput | BlacklistWhereInput[]
    OR?: BlacklistWhereInput[]
    NOT?: BlacklistWhereInput | BlacklistWhereInput[]
    reason?: StringFilter<"Blacklist"> | string
    blacklistedBy?: IntFilter<"Blacklist"> | number
    createdAt?: DateTimeFilter<"Blacklist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blacklistedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BlacklistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    blacklistedBy?: SortOrder
    createdAt?: SortOrder
    _count?: BlacklistCountOrderByAggregateInput
    _avg?: BlacklistAvgOrderByAggregateInput
    _max?: BlacklistMaxOrderByAggregateInput
    _min?: BlacklistMinOrderByAggregateInput
    _sum?: BlacklistSumOrderByAggregateInput
  }

  export type BlacklistScalarWhereWithAggregatesInput = {
    AND?: BlacklistScalarWhereWithAggregatesInput | BlacklistScalarWhereWithAggregatesInput[]
    OR?: BlacklistScalarWhereWithAggregatesInput[]
    NOT?: BlacklistScalarWhereWithAggregatesInput | BlacklistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blacklist"> | number
    userId?: IntWithAggregatesFilter<"Blacklist"> | number
    reason?: StringWithAggregatesFilter<"Blacklist"> | string
    blacklistedBy?: IntWithAggregatesFilter<"Blacklist"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Blacklist"> | Date | string
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type ProviderProfileCreateInput = {
    category?: $Enums.TradeCategory | null
    bio?: string | null
    averageRating?: number
    isAvailable?: boolean
    completedJobsCount?: number
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProviderProfileInput
  }

  export type ProviderProfileUncheckedCreateInput = {
    id?: number
    userId: number
    category?: $Enums.TradeCategory | null
    bio?: string | null
    averageRating?: number
    isAvailable?: boolean
    completedJobsCount?: number
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type ProviderProfileUpdateInput = {
    category?: NullableEnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProviderProfileNestedInput
  }

  export type ProviderProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderProfileCreateManyInput = {
    id?: number
    userId: number
    category?: $Enums.TradeCategory | null
    bio?: string | null
    averageRating?: number
    isAvailable?: boolean
    completedJobsCount?: number
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type ProviderProfileUpdateManyMutationInput = {
    category?: NullableEnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileCreateInput = {
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerProfileInput
  }

  export type CustomerProfileUncheckedCreateInput = {
    id?: number
    userId: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type CustomerProfileUpdateInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerProfileNestedInput
  }

  export type CustomerProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileCreateManyInput = {
    id?: number
    userId: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type CustomerProfileUpdateManyMutationInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestCreateInput = {
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    customer: UserCreateNestedOneWithoutRequestsAsCustomerInput
    provider?: UserCreateNestedOneWithoutRequestsAsProviderInput
    review?: ReviewCreateNestedOneWithoutJobInput
    payments?: PaymentCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestUncheckedCreateInput = {
    id?: number
    customerId: number
    providerId?: number | null
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutJobInput
    payments?: PaymentUncheckedCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestUpdateInput = {
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutRequestsAsCustomerNestedInput
    provider?: UserUpdateOneWithoutRequestsAsProviderNestedInput
    review?: ReviewUpdateOneWithoutJobNestedInput
    payments?: PaymentUpdateManyWithoutJobNestedInput
  }

  export type ServiceRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutJobNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ServiceRequestCreateManyInput = {
    id?: number
    customerId: number
    providerId?: number | null
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
  }

  export type ServiceRequestUpdateManyMutationInput = {
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
    job: ServiceRequestCreateNestedOneWithoutReviewInput
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    provider: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    jobId: number
    reviewerId: number
    providerId: number
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ServiceRequestUpdateOneRequiredWithoutReviewNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    provider?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    jobId: number
    reviewerId: number
    providerId: number
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    releasedAt?: Date | string | null
    createdAt?: Date | string
    job: ServiceRequestCreateNestedOneWithoutPaymentsInput
    customer: UserCreateNestedOneWithoutPaymentsMadeInput
    provider?: UserCreateNestedOneWithoutPaymentsReceivedInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    jobId: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidBy: number
    paidTo?: number | null
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ServiceRequestUpdateOneRequiredWithoutPaymentsNestedInput
    customer?: UserUpdateOneRequiredWithoutPaymentsMadeNestedInput
    provider?: UserUpdateOneWithoutPaymentsReceivedNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidBy?: IntFieldUpdateOperationsInput | number
    paidTo?: NullableIntFieldUpdateOperationsInput | number | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    jobId: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidBy: number
    paidTo?: number | null
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidBy?: IntFieldUpdateOperationsInput | number
    paidTo?: NullableIntFieldUpdateOperationsInput | number | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistCreateInput = {
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBlacklistEntryInput
    blacklistedByUser: UserCreateNestedOneWithoutBlacklistsCreatedInput
  }

  export type BlacklistUncheckedCreateInput = {
    id?: number
    userId: number
    reason: string
    blacklistedBy: number
    createdAt?: Date | string
  }

  export type BlacklistUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlacklistEntryNestedInput
    blacklistedByUser?: UserUpdateOneRequiredWithoutBlacklistsCreatedNestedInput
  }

  export type BlacklistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    blacklistedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistCreateManyInput = {
    id?: number
    userId: number
    reason: string
    blacklistedBy: number
    createdAt?: Date | string
  }

  export type BlacklistUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    blacklistedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type ProviderProfileNullableScalarRelationFilter = {
    is?: ProviderProfileWhereInput | null
    isNot?: ProviderProfileWhereInput | null
  }

  export type CustomerProfileNullableScalarRelationFilter = {
    is?: CustomerProfileWhereInput | null
    isNot?: CustomerProfileWhereInput | null
  }

  export type ServiceRequestListRelationFilter = {
    every?: ServiceRequestWhereInput
    some?: ServiceRequestWhereInput
    none?: ServiceRequestWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type BlacklistNullableScalarRelationFilter = {
    is?: BlacklistWhereInput | null
    isNot?: BlacklistWhereInput | null
  }

  export type BlacklistListRelationFilter = {
    every?: BlacklistWhereInput
    some?: BlacklistWhereInput
    none?: BlacklistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlacklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumTradeCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.TradeCategory[] | null
    notIn?: $Enums.TradeCategory[] | null
    not?: NestedEnumTradeCategoryNullableFilter<$PrismaModel> | $Enums.TradeCategory | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProviderProfileOrderByRelevanceInput = {
    fields: ProviderProfileOrderByRelevanceFieldEnum | ProviderProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProviderProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    bio?: SortOrder
    averageRating?: SortOrder
    isAvailable?: SortOrder
    completedJobsCount?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    averageRating?: SortOrder
    completedJobsCount?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ProviderProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    bio?: SortOrder
    averageRating?: SortOrder
    isAvailable?: SortOrder
    completedJobsCount?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    bio?: SortOrder
    averageRating?: SortOrder
    isAvailable?: SortOrder
    completedJobsCount?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    averageRating?: SortOrder
    completedJobsCount?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumTradeCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.TradeCategory[] | null
    notIn?: $Enums.TradeCategory[] | null
    not?: NestedEnumTradeCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.TradeCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTradeCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumTradeCategoryNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CustomerProfileOrderByRelevanceInput = {
    fields: CustomerProfileOrderByRelevanceFieldEnum | CustomerProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CustomerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTradeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeCategory[]
    notIn?: $Enums.TradeCategory[]
    not?: NestedEnumTradeCategoryFilter<$PrismaModel> | $Enums.TradeCategory
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type ServiceRequestOrderByRelevanceInput = {
    fields: ServiceRequestOrderByRelevanceFieldEnum | ServiceRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerOtp?: SortOrder
    providerOtp?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrder
    quote?: SortOrder
    quoteMessage?: SortOrder
    quoteAt?: SortOrder
  }

  export type ServiceRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amount?: SortOrder
    quote?: SortOrder
  }

  export type ServiceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerOtp?: SortOrder
    providerOtp?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrder
    quote?: SortOrder
    quoteMessage?: SortOrder
    quoteAt?: SortOrder
  }

  export type ServiceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerOtp?: SortOrder
    providerOtp?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrder
    quote?: SortOrder
    quoteMessage?: SortOrder
    quoteAt?: SortOrder
  }

  export type ServiceRequestSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amount?: SortOrder
    quote?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTradeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeCategory[]
    notIn?: $Enums.TradeCategory[]
    not?: NestedEnumTradeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TradeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeCategoryFilter<$PrismaModel>
    _max?: NestedEnumTradeCategoryFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ServiceRequestScalarRelationFilter = {
    is?: ServiceRequestWhereInput
    isNot?: ServiceRequestWhereInput
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    reviewerId?: SortOrder
    providerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    sentimentScore?: SortOrder
    isFlagged?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    reviewerId?: SortOrder
    providerId?: SortOrder
    rating?: SortOrder
    sentimentScore?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    reviewerId?: SortOrder
    providerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    sentimentScore?: SortOrder
    isFlagged?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    reviewerId?: SortOrder
    providerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    sentimentScore?: SortOrder
    isFlagged?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    reviewerId?: SortOrder
    providerId?: SortOrder
    rating?: SortOrder
    sentimentScore?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paidBy?: SortOrder
    paidTo?: SortOrder
    releasedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
    paidBy?: SortOrder
    paidTo?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paidBy?: SortOrder
    paidTo?: SortOrder
    releasedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    paidBy?: SortOrder
    paidTo?: SortOrder
    releasedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
    paidBy?: SortOrder
    paidTo?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BlacklistOrderByRelevanceInput = {
    fields: BlacklistOrderByRelevanceFieldEnum | BlacklistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlacklistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    blacklistedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    blacklistedBy?: SortOrder
  }

  export type BlacklistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    blacklistedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    blacklistedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    blacklistedBy?: SortOrder
  }

  export type ProviderProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProviderProfileCreateWithoutUserInput, ProviderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput
    connect?: ProviderProfileWhereUniqueInput
  }

  export type CustomerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput
    connect?: CustomerProfileWhereUniqueInput
  }

  export type ServiceRequestCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceRequestCreateWithoutCustomerInput, ServiceRequestUncheckedCreateWithoutCustomerInput> | ServiceRequestCreateWithoutCustomerInput[] | ServiceRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCustomerInput | ServiceRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceRequestCreateManyCustomerInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ServiceRequestCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceRequestCreateWithoutProviderInput, ServiceRequestUncheckedCreateWithoutProviderInput> | ServiceRequestCreateWithoutProviderInput[] | ServiceRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutProviderInput | ServiceRequestCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceRequestCreateManyProviderInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutProviderInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutProviderInput = {
    create?: XOR<PaymentCreateWithoutProviderInput, PaymentUncheckedCreateWithoutProviderInput> | PaymentCreateWithoutProviderInput[] | PaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProviderInput | PaymentCreateOrConnectWithoutProviderInput[]
    createMany?: PaymentCreateManyProviderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BlacklistCreateNestedOneWithoutUserInput = {
    create?: XOR<BlacklistCreateWithoutUserInput, BlacklistUncheckedCreateWithoutUserInput>
    connectOrCreate?: BlacklistCreateOrConnectWithoutUserInput
    connect?: BlacklistWhereUniqueInput
  }

  export type BlacklistCreateNestedManyWithoutBlacklistedByUserInput = {
    create?: XOR<BlacklistCreateWithoutBlacklistedByUserInput, BlacklistUncheckedCreateWithoutBlacklistedByUserInput> | BlacklistCreateWithoutBlacklistedByUserInput[] | BlacklistUncheckedCreateWithoutBlacklistedByUserInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutBlacklistedByUserInput | BlacklistCreateOrConnectWithoutBlacklistedByUserInput[]
    createMany?: BlacklistCreateManyBlacklistedByUserInputEnvelope
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
  }

  export type ProviderProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProviderProfileCreateWithoutUserInput, ProviderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput
    connect?: ProviderProfileWhereUniqueInput
  }

  export type CustomerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput
    connect?: CustomerProfileWhereUniqueInput
  }

  export type ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceRequestCreateWithoutCustomerInput, ServiceRequestUncheckedCreateWithoutCustomerInput> | ServiceRequestCreateWithoutCustomerInput[] | ServiceRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCustomerInput | ServiceRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceRequestCreateManyCustomerInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ServiceRequestUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceRequestCreateWithoutProviderInput, ServiceRequestUncheckedCreateWithoutProviderInput> | ServiceRequestCreateWithoutProviderInput[] | ServiceRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutProviderInput | ServiceRequestCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceRequestCreateManyProviderInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<PaymentCreateWithoutProviderInput, PaymentUncheckedCreateWithoutProviderInput> | PaymentCreateWithoutProviderInput[] | PaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProviderInput | PaymentCreateOrConnectWithoutProviderInput[]
    createMany?: PaymentCreateManyProviderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BlacklistUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BlacklistCreateWithoutUserInput, BlacklistUncheckedCreateWithoutUserInput>
    connectOrCreate?: BlacklistCreateOrConnectWithoutUserInput
    connect?: BlacklistWhereUniqueInput
  }

  export type BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput = {
    create?: XOR<BlacklistCreateWithoutBlacklistedByUserInput, BlacklistUncheckedCreateWithoutBlacklistedByUserInput> | BlacklistCreateWithoutBlacklistedByUserInput[] | BlacklistUncheckedCreateWithoutBlacklistedByUserInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutBlacklistedByUserInput | BlacklistCreateOrConnectWithoutBlacklistedByUserInput[]
    createMany?: BlacklistCreateManyBlacklistedByUserInputEnvelope
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type ProviderProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProviderProfileCreateWithoutUserInput, ProviderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput
    upsert?: ProviderProfileUpsertWithoutUserInput
    disconnect?: ProviderProfileWhereInput | boolean
    delete?: ProviderProfileWhereInput | boolean
    connect?: ProviderProfileWhereUniqueInput
    update?: XOR<XOR<ProviderProfileUpdateToOneWithWhereWithoutUserInput, ProviderProfileUpdateWithoutUserInput>, ProviderProfileUncheckedUpdateWithoutUserInput>
  }

  export type CustomerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput
    upsert?: CustomerProfileUpsertWithoutUserInput
    disconnect?: CustomerProfileWhereInput | boolean
    delete?: CustomerProfileWhereInput | boolean
    connect?: CustomerProfileWhereUniqueInput
    update?: XOR<XOR<CustomerProfileUpdateToOneWithWhereWithoutUserInput, CustomerProfileUpdateWithoutUserInput>, CustomerProfileUncheckedUpdateWithoutUserInput>
  }

  export type ServiceRequestUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutCustomerInput, ServiceRequestUncheckedCreateWithoutCustomerInput> | ServiceRequestCreateWithoutCustomerInput[] | ServiceRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCustomerInput | ServiceRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput | ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceRequestCreateManyCustomerInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput | ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutCustomerInput | ServiceRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ServiceRequestUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutProviderInput, ServiceRequestUncheckedCreateWithoutProviderInput> | ServiceRequestCreateWithoutProviderInput[] | ServiceRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutProviderInput | ServiceRequestCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutProviderInput | ServiceRequestUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceRequestCreateManyProviderInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutProviderInput | ServiceRequestUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutProviderInput | ServiceRequestUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProviderInput | ReviewUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProviderInput | ReviewUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProviderInput | ReviewUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PaymentCreateWithoutProviderInput, PaymentUncheckedCreateWithoutProviderInput> | PaymentCreateWithoutProviderInput[] | PaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProviderInput | PaymentCreateOrConnectWithoutProviderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProviderInput | PaymentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PaymentCreateManyProviderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProviderInput | PaymentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProviderInput | PaymentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BlacklistUpdateOneWithoutUserNestedInput = {
    create?: XOR<BlacklistCreateWithoutUserInput, BlacklistUncheckedCreateWithoutUserInput>
    connectOrCreate?: BlacklistCreateOrConnectWithoutUserInput
    upsert?: BlacklistUpsertWithoutUserInput
    disconnect?: BlacklistWhereInput | boolean
    delete?: BlacklistWhereInput | boolean
    connect?: BlacklistWhereUniqueInput
    update?: XOR<XOR<BlacklistUpdateToOneWithWhereWithoutUserInput, BlacklistUpdateWithoutUserInput>, BlacklistUncheckedUpdateWithoutUserInput>
  }

  export type BlacklistUpdateManyWithoutBlacklistedByUserNestedInput = {
    create?: XOR<BlacklistCreateWithoutBlacklistedByUserInput, BlacklistUncheckedCreateWithoutBlacklistedByUserInput> | BlacklistCreateWithoutBlacklistedByUserInput[] | BlacklistUncheckedCreateWithoutBlacklistedByUserInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutBlacklistedByUserInput | BlacklistCreateOrConnectWithoutBlacklistedByUserInput[]
    upsert?: BlacklistUpsertWithWhereUniqueWithoutBlacklistedByUserInput | BlacklistUpsertWithWhereUniqueWithoutBlacklistedByUserInput[]
    createMany?: BlacklistCreateManyBlacklistedByUserInputEnvelope
    set?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    disconnect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    delete?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    update?: BlacklistUpdateWithWhereUniqueWithoutBlacklistedByUserInput | BlacklistUpdateWithWhereUniqueWithoutBlacklistedByUserInput[]
    updateMany?: BlacklistUpdateManyWithWhereWithoutBlacklistedByUserInput | BlacklistUpdateManyWithWhereWithoutBlacklistedByUserInput[]
    deleteMany?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProviderProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProviderProfileCreateWithoutUserInput, ProviderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderProfileCreateOrConnectWithoutUserInput
    upsert?: ProviderProfileUpsertWithoutUserInput
    disconnect?: ProviderProfileWhereInput | boolean
    delete?: ProviderProfileWhereInput | boolean
    connect?: ProviderProfileWhereUniqueInput
    update?: XOR<XOR<ProviderProfileUpdateToOneWithWhereWithoutUserInput, ProviderProfileUpdateWithoutUserInput>, ProviderProfileUncheckedUpdateWithoutUserInput>
  }

  export type CustomerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput
    upsert?: CustomerProfileUpsertWithoutUserInput
    disconnect?: CustomerProfileWhereInput | boolean
    delete?: CustomerProfileWhereInput | boolean
    connect?: CustomerProfileWhereUniqueInput
    update?: XOR<XOR<CustomerProfileUpdateToOneWithWhereWithoutUserInput, CustomerProfileUpdateWithoutUserInput>, CustomerProfileUncheckedUpdateWithoutUserInput>
  }

  export type ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutCustomerInput, ServiceRequestUncheckedCreateWithoutCustomerInput> | ServiceRequestCreateWithoutCustomerInput[] | ServiceRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCustomerInput | ServiceRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput | ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceRequestCreateManyCustomerInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput | ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutCustomerInput | ServiceRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutProviderInput, ServiceRequestUncheckedCreateWithoutProviderInput> | ServiceRequestCreateWithoutProviderInput[] | ServiceRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutProviderInput | ServiceRequestCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutProviderInput | ServiceRequestUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceRequestCreateManyProviderInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutProviderInput | ServiceRequestUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutProviderInput | ServiceRequestUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProviderInput | ReviewUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProviderInput | ReviewUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProviderInput | ReviewUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PaymentCreateWithoutProviderInput, PaymentUncheckedCreateWithoutProviderInput> | PaymentCreateWithoutProviderInput[] | PaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProviderInput | PaymentCreateOrConnectWithoutProviderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProviderInput | PaymentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PaymentCreateManyProviderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProviderInput | PaymentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProviderInput | PaymentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BlacklistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BlacklistCreateWithoutUserInput, BlacklistUncheckedCreateWithoutUserInput>
    connectOrCreate?: BlacklistCreateOrConnectWithoutUserInput
    upsert?: BlacklistUpsertWithoutUserInput
    disconnect?: BlacklistWhereInput | boolean
    delete?: BlacklistWhereInput | boolean
    connect?: BlacklistWhereUniqueInput
    update?: XOR<XOR<BlacklistUpdateToOneWithWhereWithoutUserInput, BlacklistUpdateWithoutUserInput>, BlacklistUncheckedUpdateWithoutUserInput>
  }

  export type BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput = {
    create?: XOR<BlacklistCreateWithoutBlacklistedByUserInput, BlacklistUncheckedCreateWithoutBlacklistedByUserInput> | BlacklistCreateWithoutBlacklistedByUserInput[] | BlacklistUncheckedCreateWithoutBlacklistedByUserInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutBlacklistedByUserInput | BlacklistCreateOrConnectWithoutBlacklistedByUserInput[]
    upsert?: BlacklistUpsertWithWhereUniqueWithoutBlacklistedByUserInput | BlacklistUpsertWithWhereUniqueWithoutBlacklistedByUserInput[]
    createMany?: BlacklistCreateManyBlacklistedByUserInputEnvelope
    set?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    disconnect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    delete?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    update?: BlacklistUpdateWithWhereUniqueWithoutBlacklistedByUserInput | BlacklistUpdateWithWhereUniqueWithoutBlacklistedByUserInput[]
    updateMany?: BlacklistUpdateManyWithWhereWithoutBlacklistedByUserInput | BlacklistUpdateManyWithWhereWithoutBlacklistedByUserInput[]
    deleteMany?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProviderProfileInput = {
    create?: XOR<UserCreateWithoutProviderProfileInput, UserUncheckedCreateWithoutProviderProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumTradeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TradeCategory | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProviderProfileNestedInput = {
    create?: XOR<UserCreateWithoutProviderProfileInput, UserUncheckedCreateWithoutProviderProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderProfileInput
    upsert?: UserUpsertWithoutProviderProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProviderProfileInput, UserUpdateWithoutProviderProfileInput>, UserUncheckedUpdateWithoutProviderProfileInput>
  }

  export type UserCreateNestedOneWithoutCustomerProfileInput = {
    create?: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCustomerProfileNestedInput = {
    create?: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerProfileInput
    upsert?: UserUpsertWithoutCustomerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerProfileInput, UserUpdateWithoutCustomerProfileInput>, UserUncheckedUpdateWithoutCustomerProfileInput>
  }

  export type UserCreateNestedOneWithoutRequestsAsCustomerInput = {
    create?: XOR<UserCreateWithoutRequestsAsCustomerInput, UserUncheckedCreateWithoutRequestsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsAsCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsAsProviderInput = {
    create?: XOR<UserCreateWithoutRequestsAsProviderInput, UserUncheckedCreateWithoutRequestsAsProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsAsProviderInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutJobInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput
    connect?: ReviewWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutJobInput = {
    create?: XOR<PaymentCreateWithoutJobInput, PaymentUncheckedCreateWithoutJobInput> | PaymentCreateWithoutJobInput[] | PaymentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutJobInput | PaymentCreateOrConnectWithoutJobInput[]
    createMany?: PaymentCreateManyJobInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput
    connect?: ReviewWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<PaymentCreateWithoutJobInput, PaymentUncheckedCreateWithoutJobInput> | PaymentCreateWithoutJobInput[] | PaymentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutJobInput | PaymentCreateOrConnectWithoutJobInput[]
    createMany?: PaymentCreateManyJobInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumTradeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TradeCategory
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRequestsAsCustomerNestedInput = {
    create?: XOR<UserCreateWithoutRequestsAsCustomerInput, UserUncheckedCreateWithoutRequestsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsAsCustomerInput
    upsert?: UserUpsertWithoutRequestsAsCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsAsCustomerInput, UserUpdateWithoutRequestsAsCustomerInput>, UserUncheckedUpdateWithoutRequestsAsCustomerInput>
  }

  export type UserUpdateOneWithoutRequestsAsProviderNestedInput = {
    create?: XOR<UserCreateWithoutRequestsAsProviderInput, UserUncheckedCreateWithoutRequestsAsProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsAsProviderInput
    upsert?: UserUpsertWithoutRequestsAsProviderInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsAsProviderInput, UserUpdateWithoutRequestsAsProviderInput>, UserUncheckedUpdateWithoutRequestsAsProviderInput>
  }

  export type ReviewUpdateOneWithoutJobNestedInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput
    upsert?: ReviewUpsertWithoutJobInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutJobInput, ReviewUpdateWithoutJobInput>, ReviewUncheckedUpdateWithoutJobInput>
  }

  export type PaymentUpdateManyWithoutJobNestedInput = {
    create?: XOR<PaymentCreateWithoutJobInput, PaymentUncheckedCreateWithoutJobInput> | PaymentCreateWithoutJobInput[] | PaymentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutJobInput | PaymentCreateOrConnectWithoutJobInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutJobInput | PaymentUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: PaymentCreateManyJobInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutJobInput | PaymentUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutJobInput | PaymentUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput
    upsert?: ReviewUpsertWithoutJobInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutJobInput, ReviewUpdateWithoutJobInput>, ReviewUncheckedUpdateWithoutJobInput>
  }

  export type PaymentUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<PaymentCreateWithoutJobInput, PaymentUncheckedCreateWithoutJobInput> | PaymentCreateWithoutJobInput[] | PaymentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutJobInput | PaymentCreateOrConnectWithoutJobInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutJobInput | PaymentUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: PaymentCreateManyJobInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutJobInput | PaymentUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutJobInput | PaymentUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ServiceRequestCreateNestedOneWithoutReviewInput = {
    create?: XOR<ServiceRequestCreateWithoutReviewInput, ServiceRequestUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutReviewInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutReviewInput, ServiceRequestUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutReviewInput
    upsert?: ServiceRequestUpsertWithoutReviewInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutReviewInput, ServiceRequestUpdateWithoutReviewInput>, ServiceRequestUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type ServiceRequestCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ServiceRequestCreateWithoutPaymentsInput, ServiceRequestUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutPaymentsInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsMadeInput = {
    create?: XOR<UserCreateWithoutPaymentsMadeInput, UserUncheckedCreateWithoutPaymentsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsMadeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsReceivedInput = {
    create?: XOR<UserCreateWithoutPaymentsReceivedInput, UserUncheckedCreateWithoutPaymentsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type ServiceRequestUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutPaymentsInput, ServiceRequestUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutPaymentsInput
    upsert?: ServiceRequestUpsertWithoutPaymentsInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutPaymentsInput, ServiceRequestUpdateWithoutPaymentsInput>, ServiceRequestUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsMadeNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsMadeInput, UserUncheckedCreateWithoutPaymentsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsMadeInput
    upsert?: UserUpsertWithoutPaymentsMadeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsMadeInput, UserUpdateWithoutPaymentsMadeInput>, UserUncheckedUpdateWithoutPaymentsMadeInput>
  }

  export type UserUpdateOneWithoutPaymentsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsReceivedInput, UserUncheckedCreateWithoutPaymentsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsReceivedInput
    upsert?: UserUpsertWithoutPaymentsReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsReceivedInput, UserUpdateWithoutPaymentsReceivedInput>, UserUncheckedUpdateWithoutPaymentsReceivedInput>
  }

  export type UserCreateNestedOneWithoutBlacklistEntryInput = {
    create?: XOR<UserCreateWithoutBlacklistEntryInput, UserUncheckedCreateWithoutBlacklistEntryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlacklistEntryInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlacklistsCreatedInput = {
    create?: XOR<UserCreateWithoutBlacklistsCreatedInput, UserUncheckedCreateWithoutBlacklistsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlacklistsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlacklistEntryNestedInput = {
    create?: XOR<UserCreateWithoutBlacklistEntryInput, UserUncheckedCreateWithoutBlacklistEntryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlacklistEntryInput
    upsert?: UserUpsertWithoutBlacklistEntryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlacklistEntryInput, UserUpdateWithoutBlacklistEntryInput>, UserUncheckedUpdateWithoutBlacklistEntryInput>
  }

  export type UserUpdateOneRequiredWithoutBlacklistsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutBlacklistsCreatedInput, UserUncheckedCreateWithoutBlacklistsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlacklistsCreatedInput
    upsert?: UserUpsertWithoutBlacklistsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlacklistsCreatedInput, UserUpdateWithoutBlacklistsCreatedInput>, UserUncheckedUpdateWithoutBlacklistsCreatedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumTradeCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.TradeCategory[] | null
    notIn?: $Enums.TradeCategory[] | null
    not?: NestedEnumTradeCategoryNullableFilter<$PrismaModel> | $Enums.TradeCategory | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTradeCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.TradeCategory[] | null
    notIn?: $Enums.TradeCategory[] | null
    not?: NestedEnumTradeCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.TradeCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTradeCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumTradeCategoryNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTradeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeCategory[]
    notIn?: $Enums.TradeCategory[]
    not?: NestedEnumTradeCategoryFilter<$PrismaModel> | $Enums.TradeCategory
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumTradeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeCategory | EnumTradeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeCategory[]
    notIn?: $Enums.TradeCategory[]
    not?: NestedEnumTradeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TradeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeCategoryFilter<$PrismaModel>
    _max?: NestedEnumTradeCategoryFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ProviderProfileCreateWithoutUserInput = {
    category?: $Enums.TradeCategory | null
    bio?: string | null
    averageRating?: number
    isAvailable?: boolean
    completedJobsCount?: number
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type ProviderProfileUncheckedCreateWithoutUserInput = {
    id?: number
    category?: $Enums.TradeCategory | null
    bio?: string | null
    averageRating?: number
    isAvailable?: boolean
    completedJobsCount?: number
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type ProviderProfileCreateOrConnectWithoutUserInput = {
    where: ProviderProfileWhereUniqueInput
    create: XOR<ProviderProfileCreateWithoutUserInput, ProviderProfileUncheckedCreateWithoutUserInput>
  }

  export type CustomerProfileCreateWithoutUserInput = {
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type CustomerProfileUncheckedCreateWithoutUserInput = {
    id?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type CustomerProfileCreateOrConnectWithoutUserInput = {
    where: CustomerProfileWhereUniqueInput
    create: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
  }

  export type ServiceRequestCreateWithoutCustomerInput = {
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    provider?: UserCreateNestedOneWithoutRequestsAsProviderInput
    review?: ReviewCreateNestedOneWithoutJobInput
    payments?: PaymentCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestUncheckedCreateWithoutCustomerInput = {
    id?: number
    providerId?: number | null
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutJobInput
    payments?: PaymentUncheckedCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestCreateOrConnectWithoutCustomerInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutCustomerInput, ServiceRequestUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceRequestCreateManyCustomerInputEnvelope = {
    data: ServiceRequestCreateManyCustomerInput | ServiceRequestCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ServiceRequestCreateWithoutProviderInput = {
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    customer: UserCreateNestedOneWithoutRequestsAsCustomerInput
    review?: ReviewCreateNestedOneWithoutJobInput
    payments?: PaymentCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestUncheckedCreateWithoutProviderInput = {
    id?: number
    customerId: number
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutJobInput
    payments?: PaymentUncheckedCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestCreateOrConnectWithoutProviderInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutProviderInput, ServiceRequestUncheckedCreateWithoutProviderInput>
  }

  export type ServiceRequestCreateManyProviderInputEnvelope = {
    data: ServiceRequestCreateManyProviderInput | ServiceRequestCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
    job: ServiceRequestCreateNestedOneWithoutReviewInput
    provider: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: number
    jobId: number
    providerId: number
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutProviderInput = {
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
    job: ServiceRequestCreateNestedOneWithoutReviewInput
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
  }

  export type ReviewUncheckedCreateWithoutProviderInput = {
    id?: number
    jobId: number
    reviewerId: number
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProviderInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput>
  }

  export type ReviewCreateManyProviderInputEnvelope = {
    data: ReviewCreateManyProviderInput | ReviewCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCustomerInput = {
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    releasedAt?: Date | string | null
    createdAt?: Date | string
    job: ServiceRequestCreateNestedOneWithoutPaymentsInput
    provider?: UserCreateNestedOneWithoutPaymentsReceivedInput
  }

  export type PaymentUncheckedCreateWithoutCustomerInput = {
    id?: number
    jobId: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidTo?: number | null
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentCreateManyCustomerInputEnvelope = {
    data: PaymentCreateManyCustomerInput | PaymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutProviderInput = {
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    releasedAt?: Date | string | null
    createdAt?: Date | string
    job: ServiceRequestCreateNestedOneWithoutPaymentsInput
    customer: UserCreateNestedOneWithoutPaymentsMadeInput
  }

  export type PaymentUncheckedCreateWithoutProviderInput = {
    id?: number
    jobId: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidBy: number
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutProviderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutProviderInput, PaymentUncheckedCreateWithoutProviderInput>
  }

  export type PaymentCreateManyProviderInputEnvelope = {
    data: PaymentCreateManyProviderInput | PaymentCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type BlacklistCreateWithoutUserInput = {
    reason: string
    createdAt?: Date | string
    blacklistedByUser: UserCreateNestedOneWithoutBlacklistsCreatedInput
  }

  export type BlacklistUncheckedCreateWithoutUserInput = {
    id?: number
    reason: string
    blacklistedBy: number
    createdAt?: Date | string
  }

  export type BlacklistCreateOrConnectWithoutUserInput = {
    where: BlacklistWhereUniqueInput
    create: XOR<BlacklistCreateWithoutUserInput, BlacklistUncheckedCreateWithoutUserInput>
  }

  export type BlacklistCreateWithoutBlacklistedByUserInput = {
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBlacklistEntryInput
  }

  export type BlacklistUncheckedCreateWithoutBlacklistedByUserInput = {
    id?: number
    userId: number
    reason: string
    createdAt?: Date | string
  }

  export type BlacklistCreateOrConnectWithoutBlacklistedByUserInput = {
    where: BlacklistWhereUniqueInput
    create: XOR<BlacklistCreateWithoutBlacklistedByUserInput, BlacklistUncheckedCreateWithoutBlacklistedByUserInput>
  }

  export type BlacklistCreateManyBlacklistedByUserInputEnvelope = {
    data: BlacklistCreateManyBlacklistedByUserInput | BlacklistCreateManyBlacklistedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ProviderProfileUpsertWithoutUserInput = {
    update: XOR<ProviderProfileUpdateWithoutUserInput, ProviderProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProviderProfileCreateWithoutUserInput, ProviderProfileUncheckedCreateWithoutUserInput>
    where?: ProviderProfileWhereInput
  }

  export type ProviderProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProviderProfileWhereInput
    data: XOR<ProviderProfileUpdateWithoutUserInput, ProviderProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProviderProfileUpdateWithoutUserInput = {
    category?: NullableEnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileUpsertWithoutUserInput = {
    update: XOR<CustomerProfileUpdateWithoutUserInput, CustomerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
    where?: CustomerProfileWhereInput
  }

  export type CustomerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CustomerProfileWhereInput
    data: XOR<CustomerProfileUpdateWithoutUserInput, CustomerProfileUncheckedUpdateWithoutUserInput>
  }

  export type CustomerProfileUpdateWithoutUserInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ServiceRequestWhereUniqueInput
    update: XOR<ServiceRequestUpdateWithoutCustomerInput, ServiceRequestUncheckedUpdateWithoutCustomerInput>
    create: XOR<ServiceRequestCreateWithoutCustomerInput, ServiceRequestUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ServiceRequestWhereUniqueInput
    data: XOR<ServiceRequestUpdateWithoutCustomerInput, ServiceRequestUncheckedUpdateWithoutCustomerInput>
  }

  export type ServiceRequestUpdateManyWithWhereWithoutCustomerInput = {
    where: ServiceRequestScalarWhereInput
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ServiceRequestScalarWhereInput = {
    AND?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    OR?: ServiceRequestScalarWhereInput[]
    NOT?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    id?: IntFilter<"ServiceRequest"> | number
    customerId?: IntFilter<"ServiceRequest"> | number
    providerId?: IntNullableFilter<"ServiceRequest"> | number | null
    category?: EnumTradeCategoryFilter<"ServiceRequest"> | $Enums.TradeCategory
    description?: StringFilter<"ServiceRequest"> | string
    address?: StringFilter<"ServiceRequest"> | string
    latitude?: FloatFilter<"ServiceRequest"> | number
    longitude?: FloatFilter<"ServiceRequest"> | number
    scheduledDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    status?: EnumJobStatusFilter<"ServiceRequest"> | $Enums.JobStatus
    amount?: FloatNullableFilter<"ServiceRequest"> | number | null
    cancelReason?: StringNullableFilter<"ServiceRequest"> | string | null
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    customerOtp?: StringNullableFilter<"ServiceRequest"> | string | null
    providerOtp?: StringNullableFilter<"ServiceRequest"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
    quote?: FloatNullableFilter<"ServiceRequest"> | number | null
    quoteMessage?: StringNullableFilter<"ServiceRequest"> | string | null
    quoteAt?: DateTimeNullableFilter<"ServiceRequest"> | Date | string | null
  }

  export type ServiceRequestUpsertWithWhereUniqueWithoutProviderInput = {
    where: ServiceRequestWhereUniqueInput
    update: XOR<ServiceRequestUpdateWithoutProviderInput, ServiceRequestUncheckedUpdateWithoutProviderInput>
    create: XOR<ServiceRequestCreateWithoutProviderInput, ServiceRequestUncheckedCreateWithoutProviderInput>
  }

  export type ServiceRequestUpdateWithWhereUniqueWithoutProviderInput = {
    where: ServiceRequestWhereUniqueInput
    data: XOR<ServiceRequestUpdateWithoutProviderInput, ServiceRequestUncheckedUpdateWithoutProviderInput>
  }

  export type ServiceRequestUpdateManyWithWhereWithoutProviderInput = {
    where: ServiceRequestScalarWhereInput
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyWithoutProviderInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    jobId?: IntFilter<"Review"> | number
    reviewerId?: IntFilter<"Review"> | number
    providerId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    sentimentScore?: FloatNullableFilter<"Review"> | number | null
    isFlagged?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutProviderInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProviderInput, ReviewUncheckedUpdateWithoutProviderInput>
    create: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProviderInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProviderInput, ReviewUncheckedUpdateWithoutProviderInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProviderInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProviderInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    jobId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    reference?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidBy?: IntFilter<"Payment"> | number
    paidTo?: IntNullableFilter<"Payment"> | number | null
    releasedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutProviderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutProviderInput, PaymentUncheckedUpdateWithoutProviderInput>
    create: XOR<PaymentCreateWithoutProviderInput, PaymentUncheckedCreateWithoutProviderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutProviderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutProviderInput, PaymentUncheckedUpdateWithoutProviderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutProviderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutProviderInput>
  }

  export type BlacklistUpsertWithoutUserInput = {
    update: XOR<BlacklistUpdateWithoutUserInput, BlacklistUncheckedUpdateWithoutUserInput>
    create: XOR<BlacklistCreateWithoutUserInput, BlacklistUncheckedCreateWithoutUserInput>
    where?: BlacklistWhereInput
  }

  export type BlacklistUpdateToOneWithWhereWithoutUserInput = {
    where?: BlacklistWhereInput
    data: XOR<BlacklistUpdateWithoutUserInput, BlacklistUncheckedUpdateWithoutUserInput>
  }

  export type BlacklistUpdateWithoutUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklistedByUser?: UserUpdateOneRequiredWithoutBlacklistsCreatedNestedInput
  }

  export type BlacklistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    blacklistedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUpsertWithWhereUniqueWithoutBlacklistedByUserInput = {
    where: BlacklistWhereUniqueInput
    update: XOR<BlacklistUpdateWithoutBlacklistedByUserInput, BlacklistUncheckedUpdateWithoutBlacklistedByUserInput>
    create: XOR<BlacklistCreateWithoutBlacklistedByUserInput, BlacklistUncheckedCreateWithoutBlacklistedByUserInput>
  }

  export type BlacklistUpdateWithWhereUniqueWithoutBlacklistedByUserInput = {
    where: BlacklistWhereUniqueInput
    data: XOR<BlacklistUpdateWithoutBlacklistedByUserInput, BlacklistUncheckedUpdateWithoutBlacklistedByUserInput>
  }

  export type BlacklistUpdateManyWithWhereWithoutBlacklistedByUserInput = {
    where: BlacklistScalarWhereInput
    data: XOR<BlacklistUpdateManyMutationInput, BlacklistUncheckedUpdateManyWithoutBlacklistedByUserInput>
  }

  export type BlacklistScalarWhereInput = {
    AND?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
    OR?: BlacklistScalarWhereInput[]
    NOT?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
    id?: IntFilter<"Blacklist"> | number
    userId?: IntFilter<"Blacklist"> | number
    reason?: StringFilter<"Blacklist"> | string
    blacklistedBy?: IntFilter<"Blacklist"> | number
    createdAt?: DateTimeFilter<"Blacklist"> | Date | string
  }

  export type UserCreateWithoutProviderProfileInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutProviderProfileInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutProviderProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProviderProfileInput, UserUncheckedCreateWithoutProviderProfileInput>
  }

  export type UserUpsertWithoutProviderProfileInput = {
    update: XOR<UserUpdateWithoutProviderProfileInput, UserUncheckedUpdateWithoutProviderProfileInput>
    create: XOR<UserCreateWithoutProviderProfileInput, UserUncheckedCreateWithoutProviderProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProviderProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProviderProfileInput, UserUncheckedUpdateWithoutProviderProfileInput>
  }

  export type UserUpdateWithoutProviderProfileInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProviderProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserCreateWithoutCustomerProfileInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutCustomerProfileInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutCustomerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
  }

  export type UserUpsertWithoutCustomerProfileInput = {
    update: XOR<UserUpdateWithoutCustomerProfileInput, UserUncheckedUpdateWithoutCustomerProfileInput>
    create: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerProfileInput, UserUncheckedUpdateWithoutCustomerProfileInput>
  }

  export type UserUpdateWithoutCustomerProfileInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserCreateWithoutRequestsAsCustomerInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutRequestsAsCustomerInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutRequestsAsCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsAsCustomerInput, UserUncheckedCreateWithoutRequestsAsCustomerInput>
  }

  export type UserCreateWithoutRequestsAsProviderInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutRequestsAsProviderInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutRequestsAsProviderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsAsProviderInput, UserUncheckedCreateWithoutRequestsAsProviderInput>
  }

  export type ReviewCreateWithoutJobInput = {
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    provider: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutJobInput = {
    id?: number
    reviewerId: number
    providerId: number
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutJobInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
  }

  export type PaymentCreateWithoutJobInput = {
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    releasedAt?: Date | string | null
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutPaymentsMadeInput
    provider?: UserCreateNestedOneWithoutPaymentsReceivedInput
  }

  export type PaymentUncheckedCreateWithoutJobInput = {
    id?: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidBy: number
    paidTo?: number | null
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutJobInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutJobInput, PaymentUncheckedCreateWithoutJobInput>
  }

  export type PaymentCreateManyJobInputEnvelope = {
    data: PaymentCreateManyJobInput | PaymentCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRequestsAsCustomerInput = {
    update: XOR<UserUpdateWithoutRequestsAsCustomerInput, UserUncheckedUpdateWithoutRequestsAsCustomerInput>
    create: XOR<UserCreateWithoutRequestsAsCustomerInput, UserUncheckedCreateWithoutRequestsAsCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsAsCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsAsCustomerInput, UserUncheckedUpdateWithoutRequestsAsCustomerInput>
  }

  export type UserUpdateWithoutRequestsAsCustomerInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsAsCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUpsertWithoutRequestsAsProviderInput = {
    update: XOR<UserUpdateWithoutRequestsAsProviderInput, UserUncheckedUpdateWithoutRequestsAsProviderInput>
    create: XOR<UserCreateWithoutRequestsAsProviderInput, UserUncheckedCreateWithoutRequestsAsProviderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsAsProviderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsAsProviderInput, UserUncheckedUpdateWithoutRequestsAsProviderInput>
  }

  export type UserUpdateWithoutRequestsAsProviderInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsAsProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type ReviewUpsertWithoutJobInput = {
    update: XOR<ReviewUpdateWithoutJobInput, ReviewUncheckedUpdateWithoutJobInput>
    create: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutJobInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutJobInput, ReviewUncheckedUpdateWithoutJobInput>
  }

  export type ReviewUpdateWithoutJobInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    provider?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutJobInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutJobInput, PaymentUncheckedUpdateWithoutJobInput>
    create: XOR<PaymentCreateWithoutJobInput, PaymentUncheckedCreateWithoutJobInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutJobInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutJobInput, PaymentUncheckedUpdateWithoutJobInput>
  }

  export type PaymentUpdateManyWithWhereWithoutJobInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutJobInput>
  }

  export type ServiceRequestCreateWithoutReviewInput = {
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    customer: UserCreateNestedOneWithoutRequestsAsCustomerInput
    provider?: UserCreateNestedOneWithoutRequestsAsProviderInput
    payments?: PaymentCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestUncheckedCreateWithoutReviewInput = {
    id?: number
    customerId: number
    providerId?: number | null
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutJobInput
  }

  export type ServiceRequestCreateOrConnectWithoutReviewInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutReviewInput, ServiceRequestUncheckedCreateWithoutReviewInput>
  }

  export type UserCreateWithoutReviewsGivenInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type ServiceRequestUpsertWithoutReviewInput = {
    update: XOR<ServiceRequestUpdateWithoutReviewInput, ServiceRequestUncheckedUpdateWithoutReviewInput>
    create: XOR<ServiceRequestCreateWithoutReviewInput, ServiceRequestUncheckedCreateWithoutReviewInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutReviewInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutReviewInput, ServiceRequestUncheckedUpdateWithoutReviewInput>
  }

  export type ServiceRequestUpdateWithoutReviewInput = {
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutRequestsAsCustomerNestedInput
    provider?: UserUpdateOneWithoutRequestsAsProviderNestedInput
    payments?: PaymentUpdateManyWithoutJobNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type ServiceRequestCreateWithoutPaymentsInput = {
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    customer: UserCreateNestedOneWithoutRequestsAsCustomerInput
    provider?: UserCreateNestedOneWithoutRequestsAsProviderInput
    review?: ReviewCreateNestedOneWithoutJobInput
  }

  export type ServiceRequestUncheckedCreateWithoutPaymentsInput = {
    id?: number
    customerId: number
    providerId?: number | null
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutJobInput
  }

  export type ServiceRequestCreateOrConnectWithoutPaymentsInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutPaymentsInput, ServiceRequestUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsMadeInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsMadeInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsMadeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsMadeInput, UserUncheckedCreateWithoutPaymentsMadeInput>
  }

  export type UserCreateWithoutPaymentsReceivedInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsReceivedInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsReceivedInput, UserUncheckedCreateWithoutPaymentsReceivedInput>
  }

  export type ServiceRequestUpsertWithoutPaymentsInput = {
    update: XOR<ServiceRequestUpdateWithoutPaymentsInput, ServiceRequestUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ServiceRequestCreateWithoutPaymentsInput, ServiceRequestUncheckedCreateWithoutPaymentsInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutPaymentsInput, ServiceRequestUncheckedUpdateWithoutPaymentsInput>
  }

  export type ServiceRequestUpdateWithoutPaymentsInput = {
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutRequestsAsCustomerNestedInput
    provider?: UserUpdateOneWithoutRequestsAsProviderNestedInput
    review?: ReviewUpdateOneWithoutJobNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutJobNestedInput
  }

  export type UserUpsertWithoutPaymentsMadeInput = {
    update: XOR<UserUpdateWithoutPaymentsMadeInput, UserUncheckedUpdateWithoutPaymentsMadeInput>
    create: XOR<UserCreateWithoutPaymentsMadeInput, UserUncheckedCreateWithoutPaymentsMadeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsMadeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsMadeInput, UserUncheckedUpdateWithoutPaymentsMadeInput>
  }

  export type UserUpdateWithoutPaymentsMadeInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsMadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUpsertWithoutPaymentsReceivedInput = {
    update: XOR<UserUpdateWithoutPaymentsReceivedInput, UserUncheckedUpdateWithoutPaymentsReceivedInput>
    create: XOR<UserCreateWithoutPaymentsReceivedInput, UserUncheckedCreateWithoutPaymentsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsReceivedInput, UserUncheckedUpdateWithoutPaymentsReceivedInput>
  }

  export type UserUpdateWithoutPaymentsReceivedInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserCreateWithoutBlacklistEntryInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistsCreated?: BlacklistCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserUncheckedCreateWithoutBlacklistEntryInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistsCreated?: BlacklistUncheckedCreateNestedManyWithoutBlacklistedByUserInput
  }

  export type UserCreateOrConnectWithoutBlacklistEntryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlacklistEntryInput, UserUncheckedCreateWithoutBlacklistEntryInput>
  }

  export type UserCreateWithoutBlacklistsCreatedInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlacklistsCreatedInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    status?: $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
    ReviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    ReviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    paymentsMade?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutProviderInput
    blacklistEntry?: BlacklistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlacklistsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlacklistsCreatedInput, UserUncheckedCreateWithoutBlacklistsCreatedInput>
  }

  export type UserUpsertWithoutBlacklistEntryInput = {
    update: XOR<UserUpdateWithoutBlacklistEntryInput, UserUncheckedUpdateWithoutBlacklistEntryInput>
    create: XOR<UserCreateWithoutBlacklistEntryInput, UserUncheckedCreateWithoutBlacklistEntryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlacklistEntryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlacklistEntryInput, UserUncheckedUpdateWithoutBlacklistEntryInput>
  }

  export type UserUpdateWithoutBlacklistEntryInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistsCreated?: BlacklistUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlacklistEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistsCreated?: BlacklistUncheckedUpdateManyWithoutBlacklistedByUserNestedInput
  }

  export type UserUpsertWithoutBlacklistsCreatedInput = {
    update: XOR<UserUpdateWithoutBlacklistsCreatedInput, UserUncheckedUpdateWithoutBlacklistsCreatedInput>
    create: XOR<UserCreateWithoutBlacklistsCreatedInput, UserUncheckedCreateWithoutBlacklistsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlacklistsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlacklistsCreatedInput, UserUncheckedUpdateWithoutBlacklistsCreatedInput>
  }

  export type UserUpdateWithoutBlacklistsCreatedInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlacklistsCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
    ReviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    ReviewsReceived?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    paymentsMade?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    paymentsReceived?: PaymentUncheckedUpdateManyWithoutProviderNestedInput
    blacklistEntry?: BlacklistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ServiceRequestCreateManyCustomerInput = {
    id?: number
    providerId?: number | null
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
  }

  export type ServiceRequestCreateManyProviderInput = {
    id?: number
    customerId: number
    category: $Enums.TradeCategory
    description: string
    address: string
    latitude: number
    longitude: number
    scheduledDate: Date | string
    status?: $Enums.JobStatus
    amount?: number | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerOtp?: string | null
    providerOtp?: string | null
    otpExpiresAt?: Date | string | null
    otpVerifiedAt?: Date | string | null
    quote?: number | null
    quoteMessage?: string | null
    quoteAt?: Date | string | null
  }

  export type ReviewCreateManyReviewerInput = {
    id?: number
    jobId: number
    providerId: number
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateManyProviderInput = {
    id?: number
    jobId: number
    reviewerId: number
    rating: number
    comment?: string | null
    sentimentScore?: number | null
    isFlagged?: boolean
    createdAt?: Date | string
  }

  export type PaymentCreateManyCustomerInput = {
    id?: number
    jobId: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidTo?: number | null
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyProviderInput = {
    id?: number
    jobId: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidBy: number
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BlacklistCreateManyBlacklistedByUserInput = {
    id?: number
    userId: number
    reason: string
    createdAt?: Date | string
  }

  export type ServiceRequestUpdateWithoutCustomerInput = {
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: UserUpdateOneWithoutRequestsAsProviderNestedInput
    review?: ReviewUpdateOneWithoutJobNestedInput
    payments?: PaymentUpdateManyWithoutJobNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutJobNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ServiceRequestUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceRequestUpdateWithoutProviderInput = {
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutRequestsAsCustomerNestedInput
    review?: ReviewUpdateOneWithoutJobNestedInput
    payments?: PaymentUpdateManyWithoutJobNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutJobNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ServiceRequestUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    category?: EnumTradeCategoryFieldUpdateOperationsInput | $Enums.TradeCategory
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    providerOtp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quote?: NullableFloatFieldUpdateOperationsInput | number | null
    quoteMessage?: NullableStringFieldUpdateOperationsInput | string | null
    quoteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutReviewerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ServiceRequestUpdateOneRequiredWithoutReviewNestedInput
    provider?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutProviderInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ServiceRequestUpdateOneRequiredWithoutReviewNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCustomerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ServiceRequestUpdateOneRequiredWithoutPaymentsNestedInput
    provider?: UserUpdateOneWithoutPaymentsReceivedNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidTo?: NullableIntFieldUpdateOperationsInput | number | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidTo?: NullableIntFieldUpdateOperationsInput | number | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutProviderInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ServiceRequestUpdateOneRequiredWithoutPaymentsNestedInput
    customer?: UserUpdateOneRequiredWithoutPaymentsMadeNestedInput
  }

  export type PaymentUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidBy?: IntFieldUpdateOperationsInput | number
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidBy?: IntFieldUpdateOperationsInput | number
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUpdateWithoutBlacklistedByUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlacklistEntryNestedInput
  }

  export type BlacklistUncheckedUpdateWithoutBlacklistedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUncheckedUpdateManyWithoutBlacklistedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyJobInput = {
    id?: number
    amount: number
    reference: string
    status?: $Enums.PaymentStatus
    paidBy: number
    paidTo?: number | null
    releasedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutJobInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutPaymentsMadeNestedInput
    provider?: UserUpdateOneWithoutPaymentsReceivedNestedInput
  }

  export type PaymentUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidBy?: IntFieldUpdateOperationsInput | number
    paidTo?: NullableIntFieldUpdateOperationsInput | number | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidBy?: IntFieldUpdateOperationsInput | number
    paidTo?: NullableIntFieldUpdateOperationsInput | number | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
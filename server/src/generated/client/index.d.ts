
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
  accepted: 'accepted',
  in_progress: 'in_progress',
  completed: 'completed',
  cancelled: 'cancelled',
  failed: 'failed'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TradeCategory = $Enums.TradeCategory

export const TradeCategory: typeof $Enums.TradeCategory

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    ServiceRequest: 'ServiceRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "providerProfile" | "customerProfile" | "serviceRequest"
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    providerProfile?: ProviderProfileOmit
    customerProfile?: CustomerProfileOmit
    serviceRequest?: ServiceRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestsAsCustomer?: boolean | UserCountOutputTypeCountRequestsAsCustomerArgs
    requestsAsProvider?: boolean | UserCountOutputTypeCountRequestsAsProviderArgs
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
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    password: number
    role: number
    createdAt: number
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
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
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
    ProviderProfile?: boolean | User$ProviderProfileArgs<ExtArgs>
    CustomerProfile?: boolean | User$CustomerProfileArgs<ExtArgs>
    requestsAsCustomer?: boolean | User$requestsAsCustomerArgs<ExtArgs>
    requestsAsProvider?: boolean | User$requestsAsProviderArgs<ExtArgs>
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
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProviderProfile?: boolean | User$ProviderProfileArgs<ExtArgs>
    CustomerProfile?: boolean | User$CustomerProfileArgs<ExtArgs>
    requestsAsCustomer?: boolean | User$requestsAsCustomerArgs<ExtArgs>
    requestsAsProvider?: boolean | User$requestsAsProviderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ProviderProfile: Prisma.$ProviderProfilePayload<ExtArgs> | null
      CustomerProfile: Prisma.$CustomerProfilePayload<ExtArgs> | null
      requestsAsCustomer: Prisma.$ServiceRequestPayload<ExtArgs>[]
      requestsAsProvider: Prisma.$ServiceRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      phone: string | null
      password: string
      role: $Enums.Role
      createdAt: Date
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderProfiles.
     */
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerProfiles.
     */
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
  }

  export type ServiceRequestSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    providerId: number | null
    latitude: number | null
    longitude: number | null
    amount: number | null
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
    _all: number
  }


  export type ServiceRequestAvgAggregateInputType = {
    id?: true
    customerId?: true
    providerId?: true
    latitude?: true
    longitude?: true
    amount?: true
  }

  export type ServiceRequestSumAggregateInputType = {
    id?: true
    customerId?: true
    providerId?: true
    latitude?: true
    longitude?: true
    amount?: true
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
    customer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ServiceRequest$providerArgs<ExtArgs>
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
  }

  export type ServiceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "providerId" | "category" | "description" | "address" | "latitude" | "longitude" | "scheduledDate" | "status" | "amount" | "cancelReason" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceRequest"]>
  export type ServiceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ServiceRequest$providerArgs<ExtArgs>
  }

  export type $ServiceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequest"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$UserPayload<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
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
    createdAt: 'createdAt'
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
    updatedAt: 'updatedAt'
  };

  export type ServiceRequestScalarFieldEnum = (typeof ServiceRequestScalarFieldEnum)[keyof typeof ServiceRequestScalarFieldEnum]


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
    cancelReason: 'cancelReason'
  };

  export type ServiceRequestOrderByRelevanceFieldEnum = (typeof ServiceRequestOrderByRelevanceFieldEnum)[keyof typeof ServiceRequestOrderByRelevanceFieldEnum]


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
    ProviderProfile?: XOR<ProviderProfileNullableScalarRelationFilter, ProviderProfileWhereInput> | null
    CustomerProfile?: XOR<CustomerProfileNullableScalarRelationFilter, CustomerProfileWhereInput> | null
    requestsAsCustomer?: ServiceRequestListRelationFilter
    requestsAsProvider?: ServiceRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    ProviderProfile?: ProviderProfileOrderByWithRelationInput
    CustomerProfile?: CustomerProfileOrderByWithRelationInput
    requestsAsCustomer?: ServiceRequestOrderByRelationAggregateInput
    requestsAsProvider?: ServiceRequestOrderByRelationAggregateInput
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
    ProviderProfile?: XOR<ProviderProfileNullableScalarRelationFilter, ProviderProfileWhereInput> | null
    CustomerProfile?: XOR<CustomerProfileNullableScalarRelationFilter, CustomerProfileWhereInput> | null
    requestsAsCustomer?: ServiceRequestListRelationFilter
    requestsAsProvider?: ServiceRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
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
    customer?: UserOrderByWithRelationInput
    provider?: UserOrderByWithRelationInput
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
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
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
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    customer: UserCreateNestedOneWithoutRequestsAsCustomerInput
    provider?: UserCreateNestedOneWithoutRequestsAsProviderInput
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
    customer?: UserUpdateOneRequiredWithoutRequestsAsCustomerNestedInput
    provider?: UserUpdateOneWithoutRequestsAsProviderNestedInput
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceRequestOrderByRelationAggregateInput = {
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
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
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
  }

  export type ServiceRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amount?: SortOrder
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
  }

  export type ServiceRequestSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    providerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amount?: SortOrder
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

  export type EnumTradeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TradeCategory
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
    provider?: UserCreateNestedOneWithoutRequestsAsProviderInput
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
    customer: UserCreateNestedOneWithoutRequestsAsCustomerInput
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
  }

  export type ServiceRequestCreateOrConnectWithoutProviderInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutProviderInput, ServiceRequestUncheckedCreateWithoutProviderInput>
  }

  export type ServiceRequestCreateManyProviderInputEnvelope = {
    data: ServiceRequestCreateManyProviderInput | ServiceRequestCreateManyProviderInput[]
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

  export type UserCreateWithoutProviderProfileInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateWithoutProviderProfileInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
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
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateWithoutProviderProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserCreateWithoutCustomerProfileInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateWithoutCustomerProfileInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
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
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserCreateWithoutRequestsAsCustomerInput = {
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsProvider?: ServiceRequestCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateWithoutRequestsAsCustomerInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsProvider?: ServiceRequestUncheckedCreateNestedManyWithoutProviderInput
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
    ProviderProfile?: ProviderProfileCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutRequestsAsProviderInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    ProviderProfile?: ProviderProfileUncheckedCreateNestedOneWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedOneWithoutUserInput
    requestsAsCustomer?: ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutRequestsAsProviderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsAsProviderInput, UserUncheckedCreateWithoutRequestsAsProviderInput>
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
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsProvider?: ServiceRequestUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsAsCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsProvider?: ServiceRequestUncheckedUpdateManyWithoutProviderNestedInput
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
    ProviderProfile?: ProviderProfileUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsAsProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProviderProfile?: ProviderProfileUncheckedUpdateOneWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsAsCustomer?: ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput
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
    provider?: UserUpdateOneWithoutRequestsAsProviderNestedInput
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
    customer?: UserUpdateOneRequiredWithoutRequestsAsCustomerNestedInput
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
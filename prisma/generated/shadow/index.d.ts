
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model Vouching
 * 
 */
export type Vouching = $Result.DefaultSelection<Prisma.$VouchingPayload>
/**
 * Model Api
 * 
 */
export type Api = $Result.DefaultSelection<Prisma.$ApiPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs>;

  /**
   * `prisma.vouching`: Exposes CRUD operations for the **Vouching** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchings
    * const vouchings = await prisma.vouching.findMany()
    * ```
    */
  get vouching(): Prisma.VouchingDelegate<ExtArgs>;

  /**
   * `prisma.api`: Exposes CRUD operations for the **Api** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apis
    * const apis = await prisma.api.findMany()
    * ```
    */
  get api(): Prisma.ApiDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Channel: 'Channel',
    Vouching: 'Vouching',
    Api: 'Api'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'channel' | 'vouching' | 'api'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      Vouching: {
        payload: Prisma.$VouchingPayload<ExtArgs>
        fields: Prisma.VouchingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VouchingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VouchingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload>
          }
          findFirst: {
            args: Prisma.VouchingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VouchingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload>
          }
          findMany: {
            args: Prisma.VouchingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload>[]
          }
          create: {
            args: Prisma.VouchingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload>
          }
          createMany: {
            args: Prisma.VouchingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VouchingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload>
          }
          update: {
            args: Prisma.VouchingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload>
          }
          deleteMany: {
            args: Prisma.VouchingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VouchingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VouchingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VouchingPayload>
          }
          aggregate: {
            args: Prisma.VouchingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVouching>
          }
          groupBy: {
            args: Prisma.VouchingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VouchingGroupByOutputType>[]
          }
          count: {
            args: Prisma.VouchingCountArgs<ExtArgs>,
            result: $Utils.Optional<VouchingCountAggregateOutputType> | number
          }
        }
      }
      Api: {
        payload: Prisma.$ApiPayload<ExtArgs>
        fields: Prisma.ApiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findFirst: {
            args: Prisma.ApiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findMany: {
            args: Prisma.ApiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          create: {
            args: Prisma.ApiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          createMany: {
            args: Prisma.ApiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          update: {
            args: Prisma.ApiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          deleteMany: {
            args: Prisma.ApiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          aggregate: {
            args: Prisma.ApiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApi>
          }
          groupBy: {
            args: Prisma.ApiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCountArgs<ExtArgs>,
            result: $Utils.Optional<ApiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
    channels: number
    vouchingAsVoucher: number
    vouchingAsVouched: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    channels?: boolean | UserCountOutputTypeCountChannelsArgs
    vouchingAsVoucher?: boolean | UserCountOutputTypeCountVouchingAsVoucherArgs
    vouchingAsVouched?: boolean | UserCountOutputTypeCountVouchingAsVouchedArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchingAsVoucherArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VouchingWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchingAsVouchedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VouchingWhereInput
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
    user_id: number | null
    score: number | null
    max_members: number | null
    oldest_message: number | null
    vouched_for: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
    score: number | null
    max_members: number | null
    oldest_message: number | null
    vouched_for: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    join_time: Date | null
    score: number | null
    max_members: number | null
    oldest_message: number | null
    phone_number: string | null
    vouched_for: number | null
    external_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    join_time: Date | null
    score: number | null
    max_members: number | null
    oldest_message: number | null
    phone_number: string | null
    vouched_for: number | null
    external_id: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    join_time: number
    score: number
    max_members: number
    oldest_message: number
    phone_number: number
    vouched_for: number
    external_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    score?: true
    max_members?: true
    oldest_message?: true
    vouched_for?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    score?: true
    max_members?: true
    oldest_message?: true
    vouched_for?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    join_time?: true
    score?: true
    max_members?: true
    oldest_message?: true
    phone_number?: true
    vouched_for?: true
    external_id?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    join_time?: true
    score?: true
    max_members?: true
    oldest_message?: true
    phone_number?: true
    vouched_for?: true
    external_id?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    join_time?: true
    score?: true
    max_members?: true
    oldest_message?: true
    phone_number?: true
    vouched_for?: true
    external_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    user_id: number
    join_time: Date
    score: number
    max_members: number
    oldest_message: number
    phone_number: string | null
    vouched_for: number
    external_id: string | null
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


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    join_time?: boolean
    score?: boolean
    max_members?: boolean
    oldest_message?: boolean
    phone_number?: boolean
    vouched_for?: boolean
    external_id?: boolean
    channels?: boolean | User$channelsArgs<ExtArgs>
    vouchingAsVoucher?: boolean | User$vouchingAsVoucherArgs<ExtArgs>
    vouchingAsVouched?: boolean | User$vouchingAsVouchedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    join_time?: boolean
    score?: boolean
    max_members?: boolean
    oldest_message?: boolean
    phone_number?: boolean
    vouched_for?: boolean
    external_id?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    channels?: boolean | User$channelsArgs<ExtArgs>
    vouchingAsVoucher?: boolean | User$vouchingAsVoucherArgs<ExtArgs>
    vouchingAsVouched?: boolean | User$vouchingAsVouchedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      channels: Prisma.$ChannelPayload<ExtArgs>[]
      vouchingAsVoucher: Prisma.$VouchingPayload<ExtArgs>[]
      vouchingAsVouched: Prisma.$VouchingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      user_id: number
      join_time: Date
      score: number
      max_members: number
      oldest_message: number
      phone_number: string | null
      vouched_for: number
      external_id: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    channels<T extends User$channelsArgs<ExtArgs> = {}>(args?: Subset<T, User$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findMany'> | Null>;

    vouchingAsVoucher<T extends User$vouchingAsVoucherArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchingAsVoucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'findMany'> | Null>;

    vouchingAsVouched<T extends User$vouchingAsVouchedArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchingAsVouchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly join_time: FieldRef<"User", 'DateTime'>
    readonly score: FieldRef<"User", 'Int'>
    readonly max_members: FieldRef<"User", 'Int'>
    readonly oldest_message: FieldRef<"User", 'Int'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly vouched_for: FieldRef<"User", 'Int'>
    readonly external_id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.channels
   */
  export type User$channelsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * User.vouchingAsVoucher
   */
  export type User$vouchingAsVoucherArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    where?: VouchingWhereInput
    orderBy?: VouchingOrderByWithRelationInput | VouchingOrderByWithRelationInput[]
    cursor?: VouchingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VouchingScalarFieldEnum | VouchingScalarFieldEnum[]
  }


  /**
   * User.vouchingAsVouched
   */
  export type User$vouchingAsVouchedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    where?: VouchingWhereInput
    orderBy?: VouchingOrderByWithRelationInput | VouchingOrderByWithRelationInput[]
    cursor?: VouchingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VouchingScalarFieldEnum | VouchingScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelAvgAggregateOutputType = {
    channel_id: number | null
    user_id: number | null
    members: number | null
  }

  export type ChannelSumAggregateOutputType = {
    channel_id: number | null
    user_id: number | null
    members: number | null
  }

  export type ChannelMinAggregateOutputType = {
    channel_id: number | null
    user_id: number | null
    members: number | null
    association_time: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    channel_id: number | null
    user_id: number | null
    members: number | null
    association_time: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    channel_id: number
    user_id: number
    members: number
    association_time: number
    _all: number
  }


  export type ChannelAvgAggregateInputType = {
    channel_id?: true
    user_id?: true
    members?: true
  }

  export type ChannelSumAggregateInputType = {
    channel_id?: true
    user_id?: true
    members?: true
  }

  export type ChannelMinAggregateInputType = {
    channel_id?: true
    user_id?: true
    members?: true
    association_time?: true
  }

  export type ChannelMaxAggregateInputType = {
    channel_id?: true
    user_id?: true
    members?: true
    association_time?: true
  }

  export type ChannelCountAggregateInputType = {
    channel_id?: true
    user_id?: true
    members?: true
    association_time?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _avg?: ChannelAvgAggregateInputType
    _sum?: ChannelSumAggregateInputType
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    channel_id: number
    user_id: number
    members: number
    association_time: Date
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    channel_id?: boolean
    user_id?: boolean
    members?: boolean
    association_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    channel_id?: boolean
    user_id?: boolean
    members?: boolean
    association_time?: boolean
  }

  export type ChannelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ChannelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      channel_id: number
      user_id: number
      members: number
      association_time: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }


  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ChannelFindManyArgs, 'select' | 'include'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChannelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Channel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChannelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `channel_id`
     * const channelWithChannel_idOnly = await prisma.channel.findMany({ select: { channel_id: true } })
     * 
    **/
    findMany<T extends ChannelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
    **/
    create<T extends ChannelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Channels.
     *     @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     *     @example
     *     // Create many Channels
     *     const channel = await prisma.channel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChannelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
    **/
    delete<T extends ChannelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChannelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChannelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChannelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
    **/
    upsert<T extends ChannelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
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
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Channel model
   */ 
  interface ChannelFieldRefs {
    readonly channel_id: FieldRef<"Channel", 'Int'>
    readonly user_id: FieldRef<"Channel", 'Int'>
    readonly members: FieldRef<"Channel", 'Int'>
    readonly association_time: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }


  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
  }


  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }


  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
  }


  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
  }



  /**
   * Model Vouching
   */

  export type AggregateVouching = {
    _count: VouchingCountAggregateOutputType | null
    _avg: VouchingAvgAggregateOutputType | null
    _sum: VouchingSumAggregateOutputType | null
    _min: VouchingMinAggregateOutputType | null
    _max: VouchingMaxAggregateOutputType | null
  }

  export type VouchingAvgAggregateOutputType = {
    voucher: number | null
    vouched_for: number | null
  }

  export type VouchingSumAggregateOutputType = {
    voucher: number | null
    vouched_for: number | null
  }

  export type VouchingMinAggregateOutputType = {
    voucher: number | null
    vouched_for: number | null
    status: string | null
    vouching_time: Date | null
  }

  export type VouchingMaxAggregateOutputType = {
    voucher: number | null
    vouched_for: number | null
    status: string | null
    vouching_time: Date | null
  }

  export type VouchingCountAggregateOutputType = {
    voucher: number
    vouched_for: number
    status: number
    vouching_time: number
    _all: number
  }


  export type VouchingAvgAggregateInputType = {
    voucher?: true
    vouched_for?: true
  }

  export type VouchingSumAggregateInputType = {
    voucher?: true
    vouched_for?: true
  }

  export type VouchingMinAggregateInputType = {
    voucher?: true
    vouched_for?: true
    status?: true
    vouching_time?: true
  }

  export type VouchingMaxAggregateInputType = {
    voucher?: true
    vouched_for?: true
    status?: true
    vouching_time?: true
  }

  export type VouchingCountAggregateInputType = {
    voucher?: true
    vouched_for?: true
    status?: true
    vouching_time?: true
    _all?: true
  }

  export type VouchingAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouching to aggregate.
     */
    where?: VouchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchings to fetch.
     */
    orderBy?: VouchingOrderByWithRelationInput | VouchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VouchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchings
    **/
    _count?: true | VouchingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VouchingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VouchingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VouchingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VouchingMaxAggregateInputType
  }

  export type GetVouchingAggregateType<T extends VouchingAggregateArgs> = {
        [P in keyof T & keyof AggregateVouching]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVouching[P]>
      : GetScalarType<T[P], AggregateVouching[P]>
  }




  export type VouchingGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VouchingWhereInput
    orderBy?: VouchingOrderByWithAggregationInput | VouchingOrderByWithAggregationInput[]
    by: VouchingScalarFieldEnum[] | VouchingScalarFieldEnum
    having?: VouchingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VouchingCountAggregateInputType | true
    _avg?: VouchingAvgAggregateInputType
    _sum?: VouchingSumAggregateInputType
    _min?: VouchingMinAggregateInputType
    _max?: VouchingMaxAggregateInputType
  }

  export type VouchingGroupByOutputType = {
    voucher: number
    vouched_for: number
    status: string
    vouching_time: Date
    _count: VouchingCountAggregateOutputType | null
    _avg: VouchingAvgAggregateOutputType | null
    _sum: VouchingSumAggregateOutputType | null
    _min: VouchingMinAggregateOutputType | null
    _max: VouchingMaxAggregateOutputType | null
  }

  type GetVouchingGroupByPayload<T extends VouchingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VouchingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VouchingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VouchingGroupByOutputType[P]>
            : GetScalarType<T[P], VouchingGroupByOutputType[P]>
        }
      >
    >


  export type VouchingSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voucher?: boolean
    vouched_for?: boolean
    status?: boolean
    vouching_time?: boolean
    vouchingAsVoucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchingAsVouchedFor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouching"]>

  export type VouchingSelectScalar = {
    voucher?: boolean
    vouched_for?: boolean
    status?: boolean
    vouching_time?: boolean
  }

  export type VouchingInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    vouchingAsVoucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchingAsVouchedFor?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $VouchingPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Vouching"
    objects: {
      vouchingAsVoucher: Prisma.$UserPayload<ExtArgs>
      vouchingAsVouchedFor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      voucher: number
      vouched_for: number
      status: string
      vouching_time: Date
    }, ExtArgs["result"]["vouching"]>
    composites: {}
  }


  type VouchingGetPayload<S extends boolean | null | undefined | VouchingDefaultArgs> = $Result.GetResult<Prisma.$VouchingPayload, S>

  type VouchingCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<VouchingFindManyArgs, 'select' | 'include'> & {
      select?: VouchingCountAggregateInputType | true
    }

  export interface VouchingDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vouching'], meta: { name: 'Vouching' } }
    /**
     * Find zero or one Vouching that matches the filter.
     * @param {VouchingFindUniqueArgs} args - Arguments to find a Vouching
     * @example
     * // Get one Vouching
     * const vouching = await prisma.vouching.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VouchingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VouchingFindUniqueArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vouching that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VouchingFindUniqueOrThrowArgs} args - Arguments to find a Vouching
     * @example
     * // Get one Vouching
     * const vouching = await prisma.vouching.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VouchingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VouchingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vouching that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchingFindFirstArgs} args - Arguments to find a Vouching
     * @example
     * // Get one Vouching
     * const vouching = await prisma.vouching.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VouchingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VouchingFindFirstArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vouching that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchingFindFirstOrThrowArgs} args - Arguments to find a Vouching
     * @example
     * // Get one Vouching
     * const vouching = await prisma.vouching.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VouchingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VouchingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vouchings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchings
     * const vouchings = await prisma.vouching.findMany()
     * 
     * // Get first 10 Vouchings
     * const vouchings = await prisma.vouching.findMany({ take: 10 })
     * 
     * // Only select the `voucher`
     * const vouchingWithVoucherOnly = await prisma.vouching.findMany({ select: { voucher: true } })
     * 
    **/
    findMany<T extends VouchingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VouchingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vouching.
     * @param {VouchingCreateArgs} args - Arguments to create a Vouching.
     * @example
     * // Create one Vouching
     * const Vouching = await prisma.vouching.create({
     *   data: {
     *     // ... data to create a Vouching
     *   }
     * })
     * 
    **/
    create<T extends VouchingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VouchingCreateArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vouchings.
     *     @param {VouchingCreateManyArgs} args - Arguments to create many Vouchings.
     *     @example
     *     // Create many Vouchings
     *     const vouching = await prisma.vouching.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VouchingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VouchingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vouching.
     * @param {VouchingDeleteArgs} args - Arguments to delete one Vouching.
     * @example
     * // Delete one Vouching
     * const Vouching = await prisma.vouching.delete({
     *   where: {
     *     // ... filter to delete one Vouching
     *   }
     * })
     * 
    **/
    delete<T extends VouchingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VouchingDeleteArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vouching.
     * @param {VouchingUpdateArgs} args - Arguments to update one Vouching.
     * @example
     * // Update one Vouching
     * const vouching = await prisma.vouching.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VouchingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VouchingUpdateArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vouchings.
     * @param {VouchingDeleteManyArgs} args - Arguments to filter Vouchings to delete.
     * @example
     * // Delete a few Vouchings
     * const { count } = await prisma.vouching.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VouchingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VouchingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchings
     * const vouching = await prisma.vouching.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VouchingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VouchingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vouching.
     * @param {VouchingUpsertArgs} args - Arguments to update or create a Vouching.
     * @example
     * // Update or create a Vouching
     * const vouching = await prisma.vouching.upsert({
     *   create: {
     *     // ... data to create a Vouching
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vouching we want to update
     *   }
     * })
    **/
    upsert<T extends VouchingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VouchingUpsertArgs<ExtArgs>>
    ): Prisma__VouchingClient<$Result.GetResult<Prisma.$VouchingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Vouchings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchingCountArgs} args - Arguments to filter Vouchings to count.
     * @example
     * // Count the number of Vouchings
     * const count = await prisma.vouching.count({
     *   where: {
     *     // ... the filter for the Vouchings we want to count
     *   }
     * })
    **/
    count<T extends VouchingCountArgs>(
      args?: Subset<T, VouchingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VouchingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vouching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VouchingAggregateArgs>(args: Subset<T, VouchingAggregateArgs>): Prisma.PrismaPromise<GetVouchingAggregateType<T>>

    /**
     * Group by Vouching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchingGroupByArgs} args - Group by arguments.
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
      T extends VouchingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VouchingGroupByArgs['orderBy'] }
        : { orderBy?: VouchingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VouchingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vouching model
   */
  readonly fields: VouchingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vouching.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VouchingClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    vouchingAsVoucher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    vouchingAsVouchedFor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vouching model
   */ 
  interface VouchingFieldRefs {
    readonly voucher: FieldRef<"Vouching", 'Int'>
    readonly vouched_for: FieldRef<"Vouching", 'Int'>
    readonly status: FieldRef<"Vouching", 'String'>
    readonly vouching_time: FieldRef<"Vouching", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Vouching findUnique
   */
  export type VouchingFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * Filter, which Vouching to fetch.
     */
    where: VouchingWhereUniqueInput
  }


  /**
   * Vouching findUniqueOrThrow
   */
  export type VouchingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * Filter, which Vouching to fetch.
     */
    where: VouchingWhereUniqueInput
  }


  /**
   * Vouching findFirst
   */
  export type VouchingFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * Filter, which Vouching to fetch.
     */
    where?: VouchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchings to fetch.
     */
    orderBy?: VouchingOrderByWithRelationInput | VouchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchings.
     */
    cursor?: VouchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchings.
     */
    distinct?: VouchingScalarFieldEnum | VouchingScalarFieldEnum[]
  }


  /**
   * Vouching findFirstOrThrow
   */
  export type VouchingFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * Filter, which Vouching to fetch.
     */
    where?: VouchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchings to fetch.
     */
    orderBy?: VouchingOrderByWithRelationInput | VouchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchings.
     */
    cursor?: VouchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchings.
     */
    distinct?: VouchingScalarFieldEnum | VouchingScalarFieldEnum[]
  }


  /**
   * Vouching findMany
   */
  export type VouchingFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * Filter, which Vouchings to fetch.
     */
    where?: VouchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchings to fetch.
     */
    orderBy?: VouchingOrderByWithRelationInput | VouchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchings.
     */
    cursor?: VouchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchings.
     */
    skip?: number
    distinct?: VouchingScalarFieldEnum | VouchingScalarFieldEnum[]
  }


  /**
   * Vouching create
   */
  export type VouchingCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * The data needed to create a Vouching.
     */
    data: XOR<VouchingCreateInput, VouchingUncheckedCreateInput>
  }


  /**
   * Vouching createMany
   */
  export type VouchingCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchings.
     */
    data: VouchingCreateManyInput | VouchingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Vouching update
   */
  export type VouchingUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * The data needed to update a Vouching.
     */
    data: XOR<VouchingUpdateInput, VouchingUncheckedUpdateInput>
    /**
     * Choose, which Vouching to update.
     */
    where: VouchingWhereUniqueInput
  }


  /**
   * Vouching updateMany
   */
  export type VouchingUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchings.
     */
    data: XOR<VouchingUpdateManyMutationInput, VouchingUncheckedUpdateManyInput>
    /**
     * Filter which Vouchings to update
     */
    where?: VouchingWhereInput
  }


  /**
   * Vouching upsert
   */
  export type VouchingUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * The filter to search for the Vouching to update in case it exists.
     */
    where: VouchingWhereUniqueInput
    /**
     * In case the Vouching found by the `where` argument doesn't exist, create a new Vouching with this data.
     */
    create: XOR<VouchingCreateInput, VouchingUncheckedCreateInput>
    /**
     * In case the Vouching was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VouchingUpdateInput, VouchingUncheckedUpdateInput>
  }


  /**
   * Vouching delete
   */
  export type VouchingDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
    /**
     * Filter which Vouching to delete.
     */
    where: VouchingWhereUniqueInput
  }


  /**
   * Vouching deleteMany
   */
  export type VouchingDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchings to delete
     */
    where?: VouchingWhereInput
  }


  /**
   * Vouching without action
   */
  export type VouchingDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouching
     */
    select?: VouchingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VouchingInclude<ExtArgs> | null
  }



  /**
   * Model Api
   */

  export type AggregateApi = {
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  export type ApiAvgAggregateOutputType = {
    quota: number | null
  }

  export type ApiSumAggregateOutputType = {
    quota: number | null
  }

  export type ApiMinAggregateOutputType = {
    token: string | null
    quota: number | null
  }

  export type ApiMaxAggregateOutputType = {
    token: string | null
    quota: number | null
  }

  export type ApiCountAggregateOutputType = {
    token: number
    quota: number
    _all: number
  }


  export type ApiAvgAggregateInputType = {
    quota?: true
  }

  export type ApiSumAggregateInputType = {
    quota?: true
  }

  export type ApiMinAggregateInputType = {
    token?: true
    quota?: true
  }

  export type ApiMaxAggregateInputType = {
    token?: true
    quota?: true
  }

  export type ApiCountAggregateInputType = {
    token?: true
    quota?: true
    _all?: true
  }

  export type ApiAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Api to aggregate.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apis
    **/
    _count?: true | ApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiMaxAggregateInputType
  }

  export type GetApiAggregateType<T extends ApiAggregateArgs> = {
        [P in keyof T & keyof AggregateApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi[P]>
      : GetScalarType<T[P], AggregateApi[P]>
  }




  export type ApiGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ApiWhereInput
    orderBy?: ApiOrderByWithAggregationInput | ApiOrderByWithAggregationInput[]
    by: ApiScalarFieldEnum[] | ApiScalarFieldEnum
    having?: ApiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCountAggregateInputType | true
    _avg?: ApiAvgAggregateInputType
    _sum?: ApiSumAggregateInputType
    _min?: ApiMinAggregateInputType
    _max?: ApiMaxAggregateInputType
  }

  export type ApiGroupByOutputType = {
    token: string
    quota: number
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  type GetApiGroupByPayload<T extends ApiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiGroupByOutputType[P]>
            : GetScalarType<T[P], ApiGroupByOutputType[P]>
        }
      >
    >


  export type ApiSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    quota?: boolean
  }, ExtArgs["result"]["api"]>

  export type ApiSelectScalar = {
    token?: boolean
    quota?: boolean
  }


  export type $ApiPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Api"
    objects: {}
    scalars: $Extensions.GetResult<{
      token: string
      quota: number
    }, ExtArgs["result"]["api"]>
    composites: {}
  }


  type ApiGetPayload<S extends boolean | null | undefined | ApiDefaultArgs> = $Result.GetResult<Prisma.$ApiPayload, S>

  type ApiCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ApiFindManyArgs, 'select' | 'include'> & {
      select?: ApiCountAggregateInputType | true
    }

  export interface ApiDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Api'], meta: { name: 'Api' } }
    /**
     * Find zero or one Api that matches the filter.
     * @param {ApiFindUniqueArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApiFindUniqueArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Api that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApiFindUniqueOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Api that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiFindFirstArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Api that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Apis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apis
     * const apis = await prisma.api.findMany()
     * 
     * // Get first 10 Apis
     * const apis = await prisma.api.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const apiWithTokenOnly = await prisma.api.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends ApiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Api.
     * @param {ApiCreateArgs} args - Arguments to create a Api.
     * @example
     * // Create one Api
     * const Api = await prisma.api.create({
     *   data: {
     *     // ... data to create a Api
     *   }
     * })
     * 
    **/
    create<T extends ApiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiCreateArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Apis.
     *     @param {ApiCreateManyArgs} args - Arguments to create many Apis.
     *     @example
     *     // Create many Apis
     *     const api = await prisma.api.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Api.
     * @param {ApiDeleteArgs} args - Arguments to delete one Api.
     * @example
     * // Delete one Api
     * const Api = await prisma.api.delete({
     *   where: {
     *     // ... filter to delete one Api
     *   }
     * })
     * 
    **/
    delete<T extends ApiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApiDeleteArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Api.
     * @param {ApiUpdateArgs} args - Arguments to update one Api.
     * @example
     * // Update one Api
     * const api = await prisma.api.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiUpdateArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Apis.
     * @param {ApiDeleteManyArgs} args - Arguments to filter Apis to delete.
     * @example
     * // Delete a few Apis
     * const { count } = await prisma.api.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Api.
     * @param {ApiUpsertArgs} args - Arguments to update or create a Api.
     * @example
     * // Update or create a Api
     * const api = await prisma.api.upsert({
     *   create: {
     *     // ... data to create a Api
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api we want to update
     *   }
     * })
    **/
    upsert<T extends ApiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApiUpsertArgs<ExtArgs>>
    ): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCountArgs} args - Arguments to filter Apis to count.
     * @example
     * // Count the number of Apis
     * const count = await prisma.api.count({
     *   where: {
     *     // ... the filter for the Apis we want to count
     *   }
     * })
    **/
    count<T extends ApiCountArgs>(
      args?: Subset<T, ApiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiAggregateArgs>(args: Subset<T, ApiAggregateArgs>): Prisma.PrismaPromise<GetApiAggregateType<T>>

    /**
     * Group by Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupByArgs} args - Group by arguments.
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
      T extends ApiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiGroupByArgs['orderBy'] }
        : { orderBy?: ApiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Api model
   */
  readonly fields: ApiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Api.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Api model
   */ 
  interface ApiFieldRefs {
    readonly token: FieldRef<"Api", 'String'>
    readonly quota: FieldRef<"Api", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Api findUnique
   */
  export type ApiFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }


  /**
   * Api findUniqueOrThrow
   */
  export type ApiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }


  /**
   * Api findFirst
   */
  export type ApiFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }


  /**
   * Api findFirstOrThrow
   */
  export type ApiFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }


  /**
   * Api findMany
   */
  export type ApiFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Filter, which Apis to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }


  /**
   * Api create
   */
  export type ApiCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * The data needed to create a Api.
     */
    data: XOR<ApiCreateInput, ApiUncheckedCreateInput>
  }


  /**
   * Api createMany
   */
  export type ApiCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apis.
     */
    data: ApiCreateManyInput | ApiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Api update
   */
  export type ApiUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * The data needed to update a Api.
     */
    data: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
    /**
     * Choose, which Api to update.
     */
    where: ApiWhereUniqueInput
  }


  /**
   * Api updateMany
   */
  export type ApiUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apis.
     */
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyInput>
    /**
     * Filter which Apis to update
     */
    where?: ApiWhereInput
  }


  /**
   * Api upsert
   */
  export type ApiUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * The filter to search for the Api to update in case it exists.
     */
    where: ApiWhereUniqueInput
    /**
     * In case the Api found by the `where` argument doesn't exist, create a new Api with this data.
     */
    create: XOR<ApiCreateInput, ApiUncheckedCreateInput>
    /**
     * In case the Api was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
  }


  /**
   * Api delete
   */
  export type ApiDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Filter which Api to delete.
     */
    where: ApiWhereUniqueInput
  }


  /**
   * Api deleteMany
   */
  export type ApiDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apis to delete
     */
    where?: ApiWhereInput
  }


  /**
   * Api without action
   */
  export type ApiDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
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
    user_id: 'user_id',
    join_time: 'join_time',
    score: 'score',
    max_members: 'max_members',
    oldest_message: 'oldest_message',
    phone_number: 'phone_number',
    vouched_for: 'vouched_for',
    external_id: 'external_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    channel_id: 'channel_id',
    user_id: 'user_id',
    members: 'members',
    association_time: 'association_time'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const VouchingScalarFieldEnum: {
    voucher: 'voucher',
    vouched_for: 'vouched_for',
    status: 'status',
    vouching_time: 'vouching_time'
  };

  export type VouchingScalarFieldEnum = (typeof VouchingScalarFieldEnum)[keyof typeof VouchingScalarFieldEnum]


  export const ApiScalarFieldEnum: {
    token: 'token',
    quota: 'quota'
  };

  export type ApiScalarFieldEnum = (typeof ApiScalarFieldEnum)[keyof typeof ApiScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    join_time?: DateTimeFilter<"User"> | Date | string
    score?: IntFilter<"User"> | number
    max_members?: IntFilter<"User"> | number
    oldest_message?: IntFilter<"User"> | number
    phone_number?: StringNullableFilter<"User"> | string | null
    vouched_for?: IntFilter<"User"> | number
    external_id?: StringNullableFilter<"User"> | string | null
    channels?: ChannelListRelationFilter
    vouchingAsVoucher?: VouchingListRelationFilter
    vouchingAsVouched?: VouchingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    join_time?: SortOrder
    score?: SortOrder
    max_members?: SortOrder
    oldest_message?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    vouched_for?: SortOrder
    external_id?: SortOrderInput | SortOrder
    channels?: ChannelOrderByRelationAggregateInput
    vouchingAsVoucher?: VouchingOrderByRelationAggregateInput
    vouchingAsVouched?: VouchingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    external_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    join_time?: DateTimeFilter<"User"> | Date | string
    score?: IntFilter<"User"> | number
    max_members?: IntFilter<"User"> | number
    oldest_message?: IntFilter<"User"> | number
    phone_number?: StringNullableFilter<"User"> | string | null
    vouched_for?: IntFilter<"User"> | number
    channels?: ChannelListRelationFilter
    vouchingAsVoucher?: VouchingListRelationFilter
    vouchingAsVouched?: VouchingListRelationFilter
  }, "user_id" | "external_id">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    join_time?: SortOrder
    score?: SortOrder
    max_members?: SortOrder
    oldest_message?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    vouched_for?: SortOrder
    external_id?: SortOrderInput | SortOrder
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
    user_id?: IntWithAggregatesFilter<"User"> | number
    join_time?: DateTimeWithAggregatesFilter<"User"> | Date | string
    score?: IntWithAggregatesFilter<"User"> | number
    max_members?: IntWithAggregatesFilter<"User"> | number
    oldest_message?: IntWithAggregatesFilter<"User"> | number
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    vouched_for?: IntWithAggregatesFilter<"User"> | number
    external_id?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    channel_id?: IntFilter<"Channel"> | number
    user_id?: IntFilter<"Channel"> | number
    members?: IntFilter<"Channel"> | number
    association_time?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChannelOrderByWithRelationInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    members?: SortOrder
    association_time?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    channel_id?: number
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    user_id?: IntFilter<"Channel"> | number
    members?: IntFilter<"Channel"> | number
    association_time?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "channel_id">

  export type ChannelOrderByWithAggregationInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    members?: SortOrder
    association_time?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _avg?: ChannelAvgOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
    _sum?: ChannelSumOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    channel_id?: IntWithAggregatesFilter<"Channel"> | number
    user_id?: IntWithAggregatesFilter<"Channel"> | number
    members?: IntWithAggregatesFilter<"Channel"> | number
    association_time?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type VouchingWhereInput = {
    AND?: VouchingWhereInput | VouchingWhereInput[]
    OR?: VouchingWhereInput[]
    NOT?: VouchingWhereInput | VouchingWhereInput[]
    voucher?: IntFilter<"Vouching"> | number
    vouched_for?: IntFilter<"Vouching"> | number
    status?: StringFilter<"Vouching"> | string
    vouching_time?: DateTimeFilter<"Vouching"> | Date | string
    vouchingAsVoucher?: XOR<UserRelationFilter, UserWhereInput>
    vouchingAsVouchedFor?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VouchingOrderByWithRelationInput = {
    voucher?: SortOrder
    vouched_for?: SortOrder
    status?: SortOrder
    vouching_time?: SortOrder
    vouchingAsVoucher?: UserOrderByWithRelationInput
    vouchingAsVouchedFor?: UserOrderByWithRelationInput
  }

  export type VouchingWhereUniqueInput = Prisma.AtLeast<{
    voucher_vouched_for?: VouchingVoucherVouched_forCompoundUniqueInput
    AND?: VouchingWhereInput | VouchingWhereInput[]
    OR?: VouchingWhereInput[]
    NOT?: VouchingWhereInput | VouchingWhereInput[]
    voucher?: IntFilter<"Vouching"> | number
    vouched_for?: IntFilter<"Vouching"> | number
    status?: StringFilter<"Vouching"> | string
    vouching_time?: DateTimeFilter<"Vouching"> | Date | string
    vouchingAsVoucher?: XOR<UserRelationFilter, UserWhereInput>
    vouchingAsVouchedFor?: XOR<UserRelationFilter, UserWhereInput>
  }, "voucher_vouched_for">

  export type VouchingOrderByWithAggregationInput = {
    voucher?: SortOrder
    vouched_for?: SortOrder
    status?: SortOrder
    vouching_time?: SortOrder
    _count?: VouchingCountOrderByAggregateInput
    _avg?: VouchingAvgOrderByAggregateInput
    _max?: VouchingMaxOrderByAggregateInput
    _min?: VouchingMinOrderByAggregateInput
    _sum?: VouchingSumOrderByAggregateInput
  }

  export type VouchingScalarWhereWithAggregatesInput = {
    AND?: VouchingScalarWhereWithAggregatesInput | VouchingScalarWhereWithAggregatesInput[]
    OR?: VouchingScalarWhereWithAggregatesInput[]
    NOT?: VouchingScalarWhereWithAggregatesInput | VouchingScalarWhereWithAggregatesInput[]
    voucher?: IntWithAggregatesFilter<"Vouching"> | number
    vouched_for?: IntWithAggregatesFilter<"Vouching"> | number
    status?: StringWithAggregatesFilter<"Vouching"> | string
    vouching_time?: DateTimeWithAggregatesFilter<"Vouching"> | Date | string
  }

  export type ApiWhereInput = {
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    token?: StringFilter<"Api"> | string
    quota?: IntFilter<"Api"> | number
  }

  export type ApiOrderByWithRelationInput = {
    token?: SortOrder
    quota?: SortOrder
  }

  export type ApiWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    quota?: IntFilter<"Api"> | number
  }, "token">

  export type ApiOrderByWithAggregationInput = {
    token?: SortOrder
    quota?: SortOrder
    _count?: ApiCountOrderByAggregateInput
    _avg?: ApiAvgOrderByAggregateInput
    _max?: ApiMaxOrderByAggregateInput
    _min?: ApiMinOrderByAggregateInput
    _sum?: ApiSumOrderByAggregateInput
  }

  export type ApiScalarWhereWithAggregatesInput = {
    AND?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    OR?: ApiScalarWhereWithAggregatesInput[]
    NOT?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"Api"> | string
    quota?: IntWithAggregatesFilter<"Api"> | number
  }

  export type UserCreateInput = {
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    channels?: ChannelCreateNestedManyWithoutUserInput
    vouchingAsVoucher?: VouchingCreateNestedManyWithoutVouchingAsVoucherInput
    vouchingAsVouched?: VouchingCreateNestedManyWithoutVouchingAsVouchedForInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    vouchingAsVoucher?: VouchingUncheckedCreateNestedManyWithoutVouchingAsVoucherInput
    vouchingAsVouched?: VouchingUncheckedCreateNestedManyWithoutVouchingAsVouchedForInput
  }

  export type UserUpdateInput = {
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: ChannelUpdateManyWithoutUserNestedInput
    vouchingAsVoucher?: VouchingUpdateManyWithoutVouchingAsVoucherNestedInput
    vouchingAsVouched?: VouchingUpdateManyWithoutVouchingAsVouchedForNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    vouchingAsVoucher?: VouchingUncheckedUpdateManyWithoutVouchingAsVoucherNestedInput
    vouchingAsVouched?: VouchingUncheckedUpdateManyWithoutVouchingAsVouchedForNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
  }

  export type UserUpdateManyMutationInput = {
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChannelCreateInput = {
    members: number
    association_time?: Date | string
    user: UserCreateNestedOneWithoutChannelsInput
  }

  export type ChannelUncheckedCreateInput = {
    channel_id?: number
    user_id: number
    members: number
    association_time?: Date | string
  }

  export type ChannelUpdateInput = {
    members?: IntFieldUpdateOperationsInput | number
    association_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    channel_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    members?: IntFieldUpdateOperationsInput | number
    association_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelCreateManyInput = {
    channel_id?: number
    user_id: number
    members: number
    association_time?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    members?: IntFieldUpdateOperationsInput | number
    association_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    channel_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    members?: IntFieldUpdateOperationsInput | number
    association_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchingCreateInput = {
    status?: string
    vouching_time?: Date | string
    vouchingAsVoucher: UserCreateNestedOneWithoutVouchingAsVoucherInput
    vouchingAsVouchedFor: UserCreateNestedOneWithoutVouchingAsVouchedInput
  }

  export type VouchingUncheckedCreateInput = {
    voucher: number
    vouched_for: number
    status?: string
    vouching_time?: Date | string
  }

  export type VouchingUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchingAsVoucher?: UserUpdateOneRequiredWithoutVouchingAsVoucherNestedInput
    vouchingAsVouchedFor?: UserUpdateOneRequiredWithoutVouchingAsVouchedNestedInput
  }

  export type VouchingUncheckedUpdateInput = {
    voucher?: IntFieldUpdateOperationsInput | number
    vouched_for?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchingCreateManyInput = {
    voucher: number
    vouched_for: number
    status?: string
    vouching_time?: Date | string
  }

  export type VouchingUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchingUncheckedUpdateManyInput = {
    voucher?: IntFieldUpdateOperationsInput | number
    vouched_for?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreateInput = {
    token: string
    quota?: number
  }

  export type ApiUncheckedCreateInput = {
    token: string
    quota?: number
  }

  export type ApiUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type ApiUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type ApiCreateManyInput = {
    token: string
    quota?: number
  }

  export type ApiUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type ApiUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type VouchingListRelationFilter = {
    every?: VouchingWhereInput
    some?: VouchingWhereInput
    none?: VouchingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VouchingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    join_time?: SortOrder
    score?: SortOrder
    max_members?: SortOrder
    oldest_message?: SortOrder
    phone_number?: SortOrder
    vouched_for?: SortOrder
    external_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    score?: SortOrder
    max_members?: SortOrder
    oldest_message?: SortOrder
    vouched_for?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    join_time?: SortOrder
    score?: SortOrder
    max_members?: SortOrder
    oldest_message?: SortOrder
    phone_number?: SortOrder
    vouched_for?: SortOrder
    external_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    join_time?: SortOrder
    score?: SortOrder
    max_members?: SortOrder
    oldest_message?: SortOrder
    phone_number?: SortOrder
    vouched_for?: SortOrder
    external_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    score?: SortOrder
    max_members?: SortOrder
    oldest_message?: SortOrder
    vouched_for?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChannelCountOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    members?: SortOrder
    association_time?: SortOrder
  }

  export type ChannelAvgOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    members?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    members?: SortOrder
    association_time?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    members?: SortOrder
    association_time?: SortOrder
  }

  export type ChannelSumOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    members?: SortOrder
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type VouchingVoucherVouched_forCompoundUniqueInput = {
    voucher: number
    vouched_for: number
  }

  export type VouchingCountOrderByAggregateInput = {
    voucher?: SortOrder
    vouched_for?: SortOrder
    status?: SortOrder
    vouching_time?: SortOrder
  }

  export type VouchingAvgOrderByAggregateInput = {
    voucher?: SortOrder
    vouched_for?: SortOrder
  }

  export type VouchingMaxOrderByAggregateInput = {
    voucher?: SortOrder
    vouched_for?: SortOrder
    status?: SortOrder
    vouching_time?: SortOrder
  }

  export type VouchingMinOrderByAggregateInput = {
    voucher?: SortOrder
    vouched_for?: SortOrder
    status?: SortOrder
    vouching_time?: SortOrder
  }

  export type VouchingSumOrderByAggregateInput = {
    voucher?: SortOrder
    vouched_for?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ApiCountOrderByAggregateInput = {
    token?: SortOrder
    quota?: SortOrder
  }

  export type ApiAvgOrderByAggregateInput = {
    quota?: SortOrder
  }

  export type ApiMaxOrderByAggregateInput = {
    token?: SortOrder
    quota?: SortOrder
  }

  export type ApiMinOrderByAggregateInput = {
    token?: SortOrder
    quota?: SortOrder
  }

  export type ApiSumOrderByAggregateInput = {
    quota?: SortOrder
  }

  export type ChannelCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type VouchingCreateNestedManyWithoutVouchingAsVoucherInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVoucherInput, VouchingUncheckedCreateWithoutVouchingAsVoucherInput> | VouchingCreateWithoutVouchingAsVoucherInput[] | VouchingUncheckedCreateWithoutVouchingAsVoucherInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVoucherInput | VouchingCreateOrConnectWithoutVouchingAsVoucherInput[]
    createMany?: VouchingCreateManyVouchingAsVoucherInputEnvelope
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
  }

  export type VouchingCreateNestedManyWithoutVouchingAsVouchedForInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVouchedForInput, VouchingUncheckedCreateWithoutVouchingAsVouchedForInput> | VouchingCreateWithoutVouchingAsVouchedForInput[] | VouchingUncheckedCreateWithoutVouchingAsVouchedForInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVouchedForInput | VouchingCreateOrConnectWithoutVouchingAsVouchedForInput[]
    createMany?: VouchingCreateManyVouchingAsVouchedForInputEnvelope
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type VouchingUncheckedCreateNestedManyWithoutVouchingAsVoucherInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVoucherInput, VouchingUncheckedCreateWithoutVouchingAsVoucherInput> | VouchingCreateWithoutVouchingAsVoucherInput[] | VouchingUncheckedCreateWithoutVouchingAsVoucherInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVoucherInput | VouchingCreateOrConnectWithoutVouchingAsVoucherInput[]
    createMany?: VouchingCreateManyVouchingAsVoucherInputEnvelope
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
  }

  export type VouchingUncheckedCreateNestedManyWithoutVouchingAsVouchedForInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVouchedForInput, VouchingUncheckedCreateWithoutVouchingAsVouchedForInput> | VouchingCreateWithoutVouchingAsVouchedForInput[] | VouchingUncheckedCreateWithoutVouchingAsVouchedForInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVouchedForInput | VouchingCreateOrConnectWithoutVouchingAsVouchedForInput[]
    createMany?: VouchingCreateManyVouchingAsVouchedForInputEnvelope
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChannelUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutUserInput | ChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutUserInput | ChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutUserInput | ChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type VouchingUpdateManyWithoutVouchingAsVoucherNestedInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVoucherInput, VouchingUncheckedCreateWithoutVouchingAsVoucherInput> | VouchingCreateWithoutVouchingAsVoucherInput[] | VouchingUncheckedCreateWithoutVouchingAsVoucherInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVoucherInput | VouchingCreateOrConnectWithoutVouchingAsVoucherInput[]
    upsert?: VouchingUpsertWithWhereUniqueWithoutVouchingAsVoucherInput | VouchingUpsertWithWhereUniqueWithoutVouchingAsVoucherInput[]
    createMany?: VouchingCreateManyVouchingAsVoucherInputEnvelope
    set?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    disconnect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    delete?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    update?: VouchingUpdateWithWhereUniqueWithoutVouchingAsVoucherInput | VouchingUpdateWithWhereUniqueWithoutVouchingAsVoucherInput[]
    updateMany?: VouchingUpdateManyWithWhereWithoutVouchingAsVoucherInput | VouchingUpdateManyWithWhereWithoutVouchingAsVoucherInput[]
    deleteMany?: VouchingScalarWhereInput | VouchingScalarWhereInput[]
  }

  export type VouchingUpdateManyWithoutVouchingAsVouchedForNestedInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVouchedForInput, VouchingUncheckedCreateWithoutVouchingAsVouchedForInput> | VouchingCreateWithoutVouchingAsVouchedForInput[] | VouchingUncheckedCreateWithoutVouchingAsVouchedForInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVouchedForInput | VouchingCreateOrConnectWithoutVouchingAsVouchedForInput[]
    upsert?: VouchingUpsertWithWhereUniqueWithoutVouchingAsVouchedForInput | VouchingUpsertWithWhereUniqueWithoutVouchingAsVouchedForInput[]
    createMany?: VouchingCreateManyVouchingAsVouchedForInputEnvelope
    set?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    disconnect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    delete?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    update?: VouchingUpdateWithWhereUniqueWithoutVouchingAsVouchedForInput | VouchingUpdateWithWhereUniqueWithoutVouchingAsVouchedForInput[]
    updateMany?: VouchingUpdateManyWithWhereWithoutVouchingAsVouchedForInput | VouchingUpdateManyWithWhereWithoutVouchingAsVouchedForInput[]
    deleteMany?: VouchingScalarWhereInput | VouchingScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutUserInput | ChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutUserInput | ChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutUserInput | ChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type VouchingUncheckedUpdateManyWithoutVouchingAsVoucherNestedInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVoucherInput, VouchingUncheckedCreateWithoutVouchingAsVoucherInput> | VouchingCreateWithoutVouchingAsVoucherInput[] | VouchingUncheckedCreateWithoutVouchingAsVoucherInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVoucherInput | VouchingCreateOrConnectWithoutVouchingAsVoucherInput[]
    upsert?: VouchingUpsertWithWhereUniqueWithoutVouchingAsVoucherInput | VouchingUpsertWithWhereUniqueWithoutVouchingAsVoucherInput[]
    createMany?: VouchingCreateManyVouchingAsVoucherInputEnvelope
    set?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    disconnect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    delete?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    update?: VouchingUpdateWithWhereUniqueWithoutVouchingAsVoucherInput | VouchingUpdateWithWhereUniqueWithoutVouchingAsVoucherInput[]
    updateMany?: VouchingUpdateManyWithWhereWithoutVouchingAsVoucherInput | VouchingUpdateManyWithWhereWithoutVouchingAsVoucherInput[]
    deleteMany?: VouchingScalarWhereInput | VouchingScalarWhereInput[]
  }

  export type VouchingUncheckedUpdateManyWithoutVouchingAsVouchedForNestedInput = {
    create?: XOR<VouchingCreateWithoutVouchingAsVouchedForInput, VouchingUncheckedCreateWithoutVouchingAsVouchedForInput> | VouchingCreateWithoutVouchingAsVouchedForInput[] | VouchingUncheckedCreateWithoutVouchingAsVouchedForInput[]
    connectOrCreate?: VouchingCreateOrConnectWithoutVouchingAsVouchedForInput | VouchingCreateOrConnectWithoutVouchingAsVouchedForInput[]
    upsert?: VouchingUpsertWithWhereUniqueWithoutVouchingAsVouchedForInput | VouchingUpsertWithWhereUniqueWithoutVouchingAsVouchedForInput[]
    createMany?: VouchingCreateManyVouchingAsVouchedForInputEnvelope
    set?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    disconnect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    delete?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    connect?: VouchingWhereUniqueInput | VouchingWhereUniqueInput[]
    update?: VouchingUpdateWithWhereUniqueWithoutVouchingAsVouchedForInput | VouchingUpdateWithWhereUniqueWithoutVouchingAsVouchedForInput[]
    updateMany?: VouchingUpdateManyWithWhereWithoutVouchingAsVouchedForInput | VouchingUpdateManyWithWhereWithoutVouchingAsVouchedForInput[]
    deleteMany?: VouchingScalarWhereInput | VouchingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChannelsInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    upsert?: UserUpsertWithoutChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelsInput, UserUpdateWithoutChannelsInput>, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type UserCreateNestedOneWithoutVouchingAsVoucherInput = {
    create?: XOR<UserCreateWithoutVouchingAsVoucherInput, UserUncheckedCreateWithoutVouchingAsVoucherInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchingAsVoucherInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVouchingAsVouchedInput = {
    create?: XOR<UserCreateWithoutVouchingAsVouchedInput, UserUncheckedCreateWithoutVouchingAsVouchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchingAsVouchedInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutVouchingAsVoucherNestedInput = {
    create?: XOR<UserCreateWithoutVouchingAsVoucherInput, UserUncheckedCreateWithoutVouchingAsVoucherInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchingAsVoucherInput
    upsert?: UserUpsertWithoutVouchingAsVoucherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchingAsVoucherInput, UserUpdateWithoutVouchingAsVoucherInput>, UserUncheckedUpdateWithoutVouchingAsVoucherInput>
  }

  export type UserUpdateOneRequiredWithoutVouchingAsVouchedNestedInput = {
    create?: XOR<UserCreateWithoutVouchingAsVouchedInput, UserUncheckedCreateWithoutVouchingAsVouchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchingAsVouchedInput
    upsert?: UserUpsertWithoutVouchingAsVouchedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchingAsVouchedInput, UserUpdateWithoutVouchingAsVouchedInput>, UserUncheckedUpdateWithoutVouchingAsVouchedInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ChannelCreateWithoutUserInput = {
    members: number
    association_time?: Date | string
  }

  export type ChannelUncheckedCreateWithoutUserInput = {
    channel_id?: number
    members: number
    association_time?: Date | string
  }

  export type ChannelCreateOrConnectWithoutUserInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
  }

  export type ChannelCreateManyUserInputEnvelope = {
    data: ChannelCreateManyUserInput | ChannelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VouchingCreateWithoutVouchingAsVoucherInput = {
    status?: string
    vouching_time?: Date | string
    vouchingAsVouchedFor: UserCreateNestedOneWithoutVouchingAsVouchedInput
  }

  export type VouchingUncheckedCreateWithoutVouchingAsVoucherInput = {
    vouched_for: number
    status?: string
    vouching_time?: Date | string
  }

  export type VouchingCreateOrConnectWithoutVouchingAsVoucherInput = {
    where: VouchingWhereUniqueInput
    create: XOR<VouchingCreateWithoutVouchingAsVoucherInput, VouchingUncheckedCreateWithoutVouchingAsVoucherInput>
  }

  export type VouchingCreateManyVouchingAsVoucherInputEnvelope = {
    data: VouchingCreateManyVouchingAsVoucherInput | VouchingCreateManyVouchingAsVoucherInput[]
    skipDuplicates?: boolean
  }

  export type VouchingCreateWithoutVouchingAsVouchedForInput = {
    status?: string
    vouching_time?: Date | string
    vouchingAsVoucher: UserCreateNestedOneWithoutVouchingAsVoucherInput
  }

  export type VouchingUncheckedCreateWithoutVouchingAsVouchedForInput = {
    voucher: number
    status?: string
    vouching_time?: Date | string
  }

  export type VouchingCreateOrConnectWithoutVouchingAsVouchedForInput = {
    where: VouchingWhereUniqueInput
    create: XOR<VouchingCreateWithoutVouchingAsVouchedForInput, VouchingUncheckedCreateWithoutVouchingAsVouchedForInput>
  }

  export type VouchingCreateManyVouchingAsVouchedForInputEnvelope = {
    data: VouchingCreateManyVouchingAsVouchedForInput | VouchingCreateManyVouchingAsVouchedForInput[]
    skipDuplicates?: boolean
  }

  export type ChannelUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
  }

  export type ChannelUpdateManyWithWhereWithoutUserInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutUserInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    OR?: ChannelScalarWhereInput[]
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    channel_id?: IntFilter<"Channel"> | number
    user_id?: IntFilter<"Channel"> | number
    members?: IntFilter<"Channel"> | number
    association_time?: DateTimeFilter<"Channel"> | Date | string
  }

  export type VouchingUpsertWithWhereUniqueWithoutVouchingAsVoucherInput = {
    where: VouchingWhereUniqueInput
    update: XOR<VouchingUpdateWithoutVouchingAsVoucherInput, VouchingUncheckedUpdateWithoutVouchingAsVoucherInput>
    create: XOR<VouchingCreateWithoutVouchingAsVoucherInput, VouchingUncheckedCreateWithoutVouchingAsVoucherInput>
  }

  export type VouchingUpdateWithWhereUniqueWithoutVouchingAsVoucherInput = {
    where: VouchingWhereUniqueInput
    data: XOR<VouchingUpdateWithoutVouchingAsVoucherInput, VouchingUncheckedUpdateWithoutVouchingAsVoucherInput>
  }

  export type VouchingUpdateManyWithWhereWithoutVouchingAsVoucherInput = {
    where: VouchingScalarWhereInput
    data: XOR<VouchingUpdateManyMutationInput, VouchingUncheckedUpdateManyWithoutVouchingAsVoucherInput>
  }

  export type VouchingScalarWhereInput = {
    AND?: VouchingScalarWhereInput | VouchingScalarWhereInput[]
    OR?: VouchingScalarWhereInput[]
    NOT?: VouchingScalarWhereInput | VouchingScalarWhereInput[]
    voucher?: IntFilter<"Vouching"> | number
    vouched_for?: IntFilter<"Vouching"> | number
    status?: StringFilter<"Vouching"> | string
    vouching_time?: DateTimeFilter<"Vouching"> | Date | string
  }

  export type VouchingUpsertWithWhereUniqueWithoutVouchingAsVouchedForInput = {
    where: VouchingWhereUniqueInput
    update: XOR<VouchingUpdateWithoutVouchingAsVouchedForInput, VouchingUncheckedUpdateWithoutVouchingAsVouchedForInput>
    create: XOR<VouchingCreateWithoutVouchingAsVouchedForInput, VouchingUncheckedCreateWithoutVouchingAsVouchedForInput>
  }

  export type VouchingUpdateWithWhereUniqueWithoutVouchingAsVouchedForInput = {
    where: VouchingWhereUniqueInput
    data: XOR<VouchingUpdateWithoutVouchingAsVouchedForInput, VouchingUncheckedUpdateWithoutVouchingAsVouchedForInput>
  }

  export type VouchingUpdateManyWithWhereWithoutVouchingAsVouchedForInput = {
    where: VouchingScalarWhereInput
    data: XOR<VouchingUpdateManyMutationInput, VouchingUncheckedUpdateManyWithoutVouchingAsVouchedForInput>
  }

  export type UserCreateWithoutChannelsInput = {
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    vouchingAsVoucher?: VouchingCreateNestedManyWithoutVouchingAsVoucherInput
    vouchingAsVouched?: VouchingCreateNestedManyWithoutVouchingAsVouchedForInput
  }

  export type UserUncheckedCreateWithoutChannelsInput = {
    user_id?: number
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    vouchingAsVoucher?: VouchingUncheckedCreateNestedManyWithoutVouchingAsVoucherInput
    vouchingAsVouched?: VouchingUncheckedCreateNestedManyWithoutVouchingAsVouchedForInput
  }

  export type UserCreateOrConnectWithoutChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
  }

  export type UserUpsertWithoutChannelsInput = {
    update: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type UserUpdateWithoutChannelsInput = {
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    vouchingAsVoucher?: VouchingUpdateManyWithoutVouchingAsVoucherNestedInput
    vouchingAsVouched?: VouchingUpdateManyWithoutVouchingAsVouchedForNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    vouchingAsVoucher?: VouchingUncheckedUpdateManyWithoutVouchingAsVoucherNestedInput
    vouchingAsVouched?: VouchingUncheckedUpdateManyWithoutVouchingAsVouchedForNestedInput
  }

  export type UserCreateWithoutVouchingAsVoucherInput = {
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    channels?: ChannelCreateNestedManyWithoutUserInput
    vouchingAsVouched?: VouchingCreateNestedManyWithoutVouchingAsVouchedForInput
  }

  export type UserUncheckedCreateWithoutVouchingAsVoucherInput = {
    user_id?: number
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    vouchingAsVouched?: VouchingUncheckedCreateNestedManyWithoutVouchingAsVouchedForInput
  }

  export type UserCreateOrConnectWithoutVouchingAsVoucherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchingAsVoucherInput, UserUncheckedCreateWithoutVouchingAsVoucherInput>
  }

  export type UserCreateWithoutVouchingAsVouchedInput = {
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    channels?: ChannelCreateNestedManyWithoutUserInput
    vouchingAsVoucher?: VouchingCreateNestedManyWithoutVouchingAsVoucherInput
  }

  export type UserUncheckedCreateWithoutVouchingAsVouchedInput = {
    user_id?: number
    join_time?: Date | string
    score?: number
    max_members?: number
    oldest_message?: number
    phone_number?: string | null
    vouched_for?: number
    external_id?: string | null
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    vouchingAsVoucher?: VouchingUncheckedCreateNestedManyWithoutVouchingAsVoucherInput
  }

  export type UserCreateOrConnectWithoutVouchingAsVouchedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchingAsVouchedInput, UserUncheckedCreateWithoutVouchingAsVouchedInput>
  }

  export type UserUpsertWithoutVouchingAsVoucherInput = {
    update: XOR<UserUpdateWithoutVouchingAsVoucherInput, UserUncheckedUpdateWithoutVouchingAsVoucherInput>
    create: XOR<UserCreateWithoutVouchingAsVoucherInput, UserUncheckedCreateWithoutVouchingAsVoucherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchingAsVoucherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchingAsVoucherInput, UserUncheckedUpdateWithoutVouchingAsVoucherInput>
  }

  export type UserUpdateWithoutVouchingAsVoucherInput = {
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: ChannelUpdateManyWithoutUserNestedInput
    vouchingAsVouched?: VouchingUpdateManyWithoutVouchingAsVouchedForNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchingAsVoucherInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    vouchingAsVouched?: VouchingUncheckedUpdateManyWithoutVouchingAsVouchedForNestedInput
  }

  export type UserUpsertWithoutVouchingAsVouchedInput = {
    update: XOR<UserUpdateWithoutVouchingAsVouchedInput, UserUncheckedUpdateWithoutVouchingAsVouchedInput>
    create: XOR<UserCreateWithoutVouchingAsVouchedInput, UserUncheckedCreateWithoutVouchingAsVouchedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchingAsVouchedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchingAsVouchedInput, UserUncheckedUpdateWithoutVouchingAsVouchedInput>
  }

  export type UserUpdateWithoutVouchingAsVouchedInput = {
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: ChannelUpdateManyWithoutUserNestedInput
    vouchingAsVoucher?: VouchingUpdateManyWithoutVouchingAsVoucherNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchingAsVouchedInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    join_time?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    max_members?: IntFieldUpdateOperationsInput | number
    oldest_message?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    vouched_for?: IntFieldUpdateOperationsInput | number
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    vouchingAsVoucher?: VouchingUncheckedUpdateManyWithoutVouchingAsVoucherNestedInput
  }

  export type ChannelCreateManyUserInput = {
    channel_id?: number
    members: number
    association_time?: Date | string
  }

  export type VouchingCreateManyVouchingAsVoucherInput = {
    vouched_for: number
    status?: string
    vouching_time?: Date | string
  }

  export type VouchingCreateManyVouchingAsVouchedForInput = {
    voucher: number
    status?: string
    vouching_time?: Date | string
  }

  export type ChannelUpdateWithoutUserInput = {
    members?: IntFieldUpdateOperationsInput | number
    association_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateWithoutUserInput = {
    channel_id?: IntFieldUpdateOperationsInput | number
    members?: IntFieldUpdateOperationsInput | number
    association_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyWithoutUserInput = {
    channel_id?: IntFieldUpdateOperationsInput | number
    members?: IntFieldUpdateOperationsInput | number
    association_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchingUpdateWithoutVouchingAsVoucherInput = {
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchingAsVouchedFor?: UserUpdateOneRequiredWithoutVouchingAsVouchedNestedInput
  }

  export type VouchingUncheckedUpdateWithoutVouchingAsVoucherInput = {
    vouched_for?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchingUncheckedUpdateManyWithoutVouchingAsVoucherInput = {
    vouched_for?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchingUpdateWithoutVouchingAsVouchedForInput = {
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchingAsVoucher?: UserUpdateOneRequiredWithoutVouchingAsVoucherNestedInput
  }

  export type VouchingUncheckedUpdateWithoutVouchingAsVouchedForInput = {
    voucher?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchingUncheckedUpdateManyWithoutVouchingAsVouchedForInput = {
    voucher?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vouching_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChannelDefaultArgs instead
     */
    export type ChannelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ChannelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VouchingDefaultArgs instead
     */
    export type VouchingArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = VouchingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiDefaultArgs instead
     */
    export type ApiArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ApiDefaultArgs<ExtArgs>

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
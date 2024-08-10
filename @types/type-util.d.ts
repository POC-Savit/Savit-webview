declare module 'type-util' {
  export type KeyOf<T> = keyof T
  export type ValueOf<T> = T[keyof T]
  export type ObjectType<T = any> = { [key: string]: T }
  export type Nullable<T> = T | null
}

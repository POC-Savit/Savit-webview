import { type ObjectMap } from '@react-three/fiber'
import { Mesh } from 'three'
import { type GLTF } from 'three-stdlib'

declare module 'type-util' {
  export type KeyOf<T> = keyof T
  export type ValueOf<T> = T[keyof T]
  export type ObjectType<T = any> = { [key: string]: T }
  export type Nullable<T> = T | null
  export type GLTFType = {
    nodes: {
      [key: string]: Mesh
    }
  } & GLTF &
    ObjectMap
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any
      axesHelper: any
      directionalLight: any
      group: any
      mesh: any
      orthographicCamera: any
    }
  }
}

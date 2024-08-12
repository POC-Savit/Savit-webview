import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Group } from 'three'

function Sunglasses(props: Group) {
  const { nodes } = useGLTF('/Sunglasses.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-225.028, 47.767, 111.783]}
          scale={[0.206, 0.202, 0.206]}
        >
          <mesh
            castShadow
            geometry={nodes.glasses.geometry}
            material={nodes.glasses.material}
            position={[-0.621, 46.116, 117.459]}
            receiveShadow
          />
          <mesh
            castShadow
            geometry={nodes.body.geometry}
            material={nodes.body.material}
            position={[0, 43.973, 111.162]}
            receiveShadow
            scale={0.656}
          />
        </group>
        <PerspectiveCamera
          far={100000}
          fov={45}
          makeDefault={false}
          near={70}
          position={[51.412, 170.245, 566.098]}
          rotation={[-0.122, 0.523, 0.061]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Sunglasses.glb')

export default Sunglasses

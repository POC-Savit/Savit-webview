import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Group } from 'three'

function Heart(props: Group) {
  const { nodes } = useGLTF('/Heart.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          geometry={nodes.Heart.geometry}
          material={nodes.Heart.material}
          position={[-230.688, 126.395, 92.155]}
          receiveShadow
          rotation={[-0.028, 0.182, 0.141]}
          scale={0.158}
        />
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

useGLTF.preload('/Heart.glb')

export default Heart

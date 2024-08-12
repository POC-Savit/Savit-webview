import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Group } from 'three'

function Band(props: Group) {
  const { nodes } = useGLTF('/Band.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-215.078, 50.566, 117.493]}
          rotation={[-0.229, 0.205, 0.077]}
          scale={0.296}
        >
          <mesh
            castShadow
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
            position={[5.559, 2.65, 44.525]}
            receiveShadow
            rotation={[0.046, 0.096, 0.586]}
          />
          <mesh
            castShadow
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[7.115, 3.81, 42.203]}
            receiveShadow
            rotation={[0.118, -0.014, 0.581]}
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

useGLTF.preload('/Band.glb')

export default Band

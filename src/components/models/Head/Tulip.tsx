import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Group } from 'three'

function Tulip(props: Group) {
  const { nodes } = useGLTF('/Tulip.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-224.328, 114.236, 86.723]} scale={0.279}>
          <mesh
            castShadow
            geometry={nodes.Cube_5.geometry}
            material={nodes.Cube_5.material}
            position={[-11.804, -29.556, 4.971]}
            receiveShadow
            rotation={[-Math.PI, 0, 2.705]}
            scale={1.521}
          />
          <mesh
            castShadow
            geometry={nodes.Cube_4.geometry}
            material={nodes.Cube_4.material}
            position={[10.3, 22.668, 1.82]}
            receiveShadow
            rotation={[-0.052, 0.007, -0.125]}
            scale={1.521}
          />
          <mesh
            castShadow
            geometry={nodes.Cube_3.geometry}
            material={nodes.Cube_3.material}
            position={[14.728, 51.58, 0]}
            receiveShadow
            rotation={[0, 0, 0.047]}
            scale={1.521}
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

useGLTF.preload('/Tulip.glb')

export default Tulip

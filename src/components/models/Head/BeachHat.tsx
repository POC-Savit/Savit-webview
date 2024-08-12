import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Group } from 'three'

function BeachHat(props: Group) {
  const { nodes } = useGLTF('/BeachHat.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-207.79, 100.063, 101.417]}
          rotation={[-0.15, 0.044, -0.282]}
          scale={0.29}
        >
          <mesh
            castShadow
            geometry={nodes.bow_tie.geometry}
            material={nodes.bow_tie.material}
            position={[-1.759, -13.407, -3.245]}
            receiveShadow
            scale={0.63}
          />
          <mesh
            castShadow
            geometry={nodes.hat.geometry}
            material={nodes.hat.material}
            position={[-2.13, 9.595, 2.962]}
            receiveShadow
            rotation={[0.278, 0.306, 0]}
            scale={0.63}
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

useGLTF.preload('/BeachHat.glb')

export default BeachHat

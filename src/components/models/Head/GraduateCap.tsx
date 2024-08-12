import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { ReactElement } from 'react'
import { Group } from 'three'

function GraduateCap(props: Group): ReactElement {
  const { nodes } = useGLTF('/GarduationCap.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          geometry={nodes.Rectangle.geometry}
          material={nodes.Rectangle.material}
          position={[-203.659, 106.588, 94.419]}
          receiveShadow
          rotation={[-1.496, 0.312, 2.684]}
          scale={[0.116, 0.114, 0.219]}
        />
        <mesh
          castShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-184.91, 79.597, 103.533]}
          receiveShadow
          rotation={[-2.95, -0.077, 3.075]}
          scale={[0.105, 0.103, 0.105]}
        />
        <mesh
          castShadow
          geometry={nodes.metal.geometry}
          material={nodes.metal.material}
          position={[-185.065, 85.769, 104.715]}
          receiveShadow
          rotation={[3.079, 0.445, -2.778]}
          scale={[0.031, 0.031, 0.03]}
        />
        <mesh
          castShadow
          geometry={nodes.cord.geometry}
          material={nodes.cord.material}
          position={[-214.376, 121.541, 87.955]}
          receiveShadow
          rotation={[3.079, 0.445, -2.778]}
          scale={[0.164, 0.164, 0.159]}
        />
        <mesh
          castShadow
          geometry={nodes.ballcord.geometry}
          material={nodes.ballcord.material}
          position={[-184.681, 87.318, 105.178]}
          receiveShadow
          rotation={[-1.478, 0.317, 2.674]}
          scale={0.041}
        />
        <mesh
          castShadow
          geometry={nodes.balltop.geometry}
          material={nodes.balltop.material}
          position={[-202.149, 107.575, 94.731]}
          receiveShadow
          rotation={[-1.478, 0.317, 2.674]}
          scale={[0.059, 0.06, 0.06]}
        />
        <mesh
          castShadow
          geometry={nodes.cap.geometry}
          material={nodes.cap.material}
          position={[-205.32, 99.188, 94.051]}
          receiveShadow
          rotation={[3.079, 0.445, -2.778]}
          scale={[0.164, 0.164, 0.159]}
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

useGLTF.preload('/GarduationCap.glb')

export default GraduateCap

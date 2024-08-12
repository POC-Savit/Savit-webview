import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Group } from 'three'

function Flower(props: Group) {
  const { nodes } = useGLTF('/Flower.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-243.145, 54.172, 104.823]}
          rotation={[0.001, 0.401, -0.002]}
          scale={0.475}
        >
          <group
            position={[75.355, 119.831, 38.316]}
            rotation={[0, 0.156, -0.242]}
            scale={0.865}
          >
            <mesh
              castShadow
              geometry={nodes.Cube_39.geometry}
              material={nodes.Cube_39.material}
              position={[-4.898, -26.394, -39.702]}
              receiveShadow
              rotation={[-2.484, 0.946, -2.998]}
              scale={0.542}
            />
            <group
              position={[-0.018, 11.542, 3.236]}
              rotation={[0.307, 0.377, -0.21]}
              scale={0.542}
            >
              <mesh
                castShadow
                geometry={nodes.Ellipse_2.geometry}
                material={nodes.Ellipse_2.material}
                position={[-4.194, 9.624, 5.045]}
                receiveShadow
                rotation={[-0.975, -0.226, -1.704]}
              />
              <mesh
                castShadow
                geometry={nodes.Cylinder_2.geometry}
                material={nodes.Cylinder_2.material}
                receiveShadow
                rotation={[2.705, -1.309, 2.094]}
              />
            </group>
          </group>
          <group
            position={[9.663, 107.938, 29.353]}
            rotation={[0.058, 0, 0]}
            scale={0.938}
          >
            <mesh
              castShadow
              geometry={nodes.Cube_39_1.geometry}
              material={nodes.Cube_39_1.material}
              position={[25.884, -16.679, -25.582]}
              receiveShadow
              rotation={[0, 0.644, 0.871]}
              scale={0.542}
            />
            <group position={[4.751, 2.159, 5.967]} scale={0.485}>
              <mesh
                castShadow
                geometry={nodes.Ellipse_2_1.geometry}
                material={nodes.Ellipse_2_1.material}
                position={[-4.194, 9.624, 5.045]}
                receiveShadow
                rotation={[-0.975, -0.226, -1.704]}
              />
              <mesh
                castShadow
                geometry={nodes.Cylinder_2_1.geometry}
                material={nodes.Cylinder_2_1.material}
                receiveShadow
                rotation={[2.705, -1.309, 2.094]}
              />
            </group>
          </group>
          <group position={[19.232, 162.292, -11.717]} scale={0.931}>
            <mesh
              castShadow
              geometry={nodes.Cube_38.geometry}
              material={nodes.Cube_38.material}
              position={[20.95, -49.64, 7.723]}
              receiveShadow
              scale={0.542}
            />
            <group
              position={[-0.03, 19.549, 0]}
              rotation={[-0.373, 0.312, 1.025]}
              scale={0.542}
            >
              <mesh
                castShadow
                geometry={nodes.Ellipse_2_2.geometry}
                material={nodes.Ellipse_2_2.material}
                position={[-4.194, 9.624, 5.045]}
                receiveShadow
                rotation={[-0.975, -0.226, -1.704]}
              />
              <mesh
                castShadow
                geometry={nodes.Cylinder_2_2.geometry}
                material={nodes.Cylinder_2_2.material}
                receiveShadow
                rotation={[2.705, -1.309, 2.094]}
              />
            </group>
          </group>
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

useGLTF.preload('/Flower.glb')

export default Flower

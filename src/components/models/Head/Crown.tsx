import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import react from 'react'
import { Group } from 'three'

function Crown(props: Group) {
  const { nodes } = useGLTF('/Crown.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-221.535, 95.168, 92.653]} scale={0.163}>
          <group position={[0, 46.986, 0]} scale={0.631}>
            <mesh
              castShadow
              geometry={nodes.Torus_2.geometry}
              material={nodes.Torus_2.material}
              position={[0, -68.08, 0]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, -0.401]}
            />
            <mesh
              castShadow
              geometry={nodes.Torus.geometry}
              material={nodes.Torus.material}
              position={[0, -30.36, 0]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, -0.401]}
            />
            <mesh
              castShadow
              geometry={nodes.Cylinder_2.geometry}
              material={nodes.Cylinder_2.material}
              position={[0, -49.1, 0]}
              receiveShadow
            />
            <mesh
              castShadow
              geometry={nodes.Cylinder.geometry}
              material={nodes.Cylinder.material}
              position={[0, -18.37, -1]}
              receiveShadow
            />
          </group>
          <group position={[0.086, 98.138, 0.28]} scale={0.631}>
            <group rotation={[0, -Math.PI / 4, 0]}>
              <mesh
                castShadow
                geometry={nodes.mesh_4_instance_1.geometry}
                material={nodes.mesh_4_instance_1.material}
                position={[0, 0, 200.032]}
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[0, -Math.PI / 2, 0]}>
              <mesh
                castShadow
                geometry={nodes.mesh_4_instance_2.geometry}
                material={nodes.mesh_4_instance_2.material}
                position={[0, 0, 200.032]}
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}>
              <mesh
                castShadow
                geometry={nodes.mesh_4_instance_3.geometry}
                material={nodes.mesh_4_instance_3.material}
                position={[0, 0, 200.032]}
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                castShadow
                geometry={nodes.mesh_4_instance_4.geometry}
                material={nodes.mesh_4_instance_4.material}
                position={[0, 0, 200.032]}
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI, Math.PI / 4, -Math.PI]}>
              <mesh
                castShadow
                geometry={nodes.mesh_4_instance_5.geometry}
                material={nodes.mesh_4_instance_5.material}
                position={[0, 0, 200.032]}
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[0, Math.PI / 2, 0]}>
              <mesh
                castShadow
                geometry={nodes.mesh_4_instance_6.geometry}
                material={nodes.mesh_4_instance_6.material}
                position={[0, 0, 200.032]}
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[0, Math.PI / 4, 0]}>
              <mesh
                castShadow
                geometry={nodes.mesh_4_instance_7.geometry}
                material={nodes.mesh_4_instance_7.material}
                position={[0, 0, 200.032]}
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <mesh
              castShadow
              geometry={nodes.mesh_4_instance_0.geometry}
              material={nodes.mesh_4_instance_0.material}
              position={[0, 0, 200.032]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
            />
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

useGLTF.preload('/Crown.glb')

export default Crown

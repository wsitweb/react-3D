import React, {useRef} from 'react'
import { MeshDistortMaterial, PerspectiveCamera, RenderTexture, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
  return (
    <mesh>
        <Sphere args={[1,100,200]} scale={2.2}>
          <MeshDistortMaterial color='#3d1c56' attach='material' distort={0.5} speed={2}/>
        </Sphere>
    </mesh>
  )
}

export default Cube
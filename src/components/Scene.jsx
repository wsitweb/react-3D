import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Scene = (props) => {
  return (
        <Canvas camera={props.camera}>
            <OrbitControls enableZoom={false} autoRotate={props.autoRotate||false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            {props.children}
        </Canvas>
  )
}

export default Scene
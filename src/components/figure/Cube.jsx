import React, {useRef} from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const textRef = useRef()
    useFrame(state=>{
        textRef.current.position.x = Math.tan(state.clock.elapsedTime*1)
    })
  return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach='map'>
                <PerspectiveCamera 
                    makeDefault
                    position={[0,0,5]}
                    />
                <color attach='background' args={['#dc9dcd']}/>
                <Text ref={textRef} fontSize='1.5' color='#555'>
                    hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube
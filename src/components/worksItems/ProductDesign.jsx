import React from 'react'
import Shoe from '../jsxModel/Shoe'
import { Stage } from '@react-three/drei'
import Scene from '../Scene'
import { styled } from 'styled-components'

const Desc = styled.div`
  width: 200px;
  height: fit-content;
  font-size: 14px;
  padding: 20px;
  background: white;
  color: black;
  border-radius: 10px;
  position: absolute;
  top: 20vh;
  right: 2vw;
  @media(max-width: 768px){
    font-size: 12px;
    width: 200px;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const ProductDesign = () => {
  return (
      <>
        <Scene autoRotate={window.innerWidth < 768} >
          <Stage environment='city' intensity={0.6}>
            <Shoe />
          </Stage>
        </Scene>
        <Desc>
          We design products with a strong focus on both world class design and
          ensuring your product is a market success.
        </Desc>
      </>
  )
}

export default ProductDesign
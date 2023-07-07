import React from 'react'
import { styled } from 'styled-components'
import Scene from './Scene'
import Cube from './figure/Cube'

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  @media(max-width: 768px){
    height: 100vh;
    scroll-snap-align: none;
  }
`
const Container = styled.div`
  height: 100vh;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px){
    height: 100%;
    align-items: center;
    flex-direction: column-reverse;
  }
`
const Left = styled.div`
  flex: 1;
  position: relative;
  @media(max-width: 768px){
    scroll-snap-align: center;
    width: 100%;
    height: 100%;
    display: none;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  z-index: 10;
  min-width: 300px;
  @media(max-width: 768px){
    flex: 1;
    scroll-snap-align: center;
    align-items: center;
    padding: 0px 20px 0 20px;
    max-width: 500px;
    scroll-snap-align: center;
    height: 100%;
    padding: 0px 20px 0 20px;
    }
`
const Title = styled.h1`
  font-size: 70px;
  @media(max-width: 768px){
    text-align: center;
    font-size: 44px;
  }
  @media(max-width: 1024px){
    font-size: 50px;
  }
`
const WhatWedo = styled.div`
  display: flex; 
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
  color: #da4ea2;
`
const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`
const Button = styled.button`
  border: none;
  color: white;
  background-color: #da4ea2;
  font-weight: 500;
  width: max-content;
  padding: 10px 14px;
  border-radius: 5px;
  cursor: pointer;
`

const Who = () =>{
    return (
            <Section>
                <Container>
                  <Left>
                    <Scene autoRotate = {true} camera = {{fov: 25, position: [5,5,5] }}>
                      <Cube/>
                    </Scene>
                  </Left>
                  <Right>
                    <Title>Think outside the square space</Title>
                    <WhatWedo>
                      <Line src="./img/line.png"/>
                      <Subtitle>What we Are</Subtitle>
                    </WhatWedo>
                    <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
                    <Button>See our works</Button>
                  </Right>
                </Container>
            </Section>
        )
}

export default Who
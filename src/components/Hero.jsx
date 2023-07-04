import React from 'react'
import { styled } from 'styled-components'
import { Navbar } from './Navbar'
import Scene from './Scene'
import Sphere from './figure/Sphere'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;

`
const Container = styled.div`
  height: 100vh;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 74px;
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


const Right = styled.div`
  flex: 3;
  position: relative;
`
const Img = styled.img`
  max-width: 800px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  object-fit: contain;
  position: absolute;
  margin: auto;
  inset: 0;
  animation: animate 2s infinite ease alternate;
  pointer-events: none;
  
  @keyframes animate {
    from{
      transform: translateY(-10px);
    }
    to{
      transform: translateY(10px);
    }
  }
`

const Hero = () =>{
    return (
            <Section>
                <Navbar/>
                <Container>
                  <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWedo>
                      <Line src="./img/line.png"/>
                      <Subtitle>What we Do</Subtitle>
                    </WhatWedo>
                    <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
                    <Button>Learn more</Button>
                  </Left>
                  <Right>
                    <Scene>
                      <Sphere/>
                    </Scene>
                    <Img src="./img/moon.png"/>
                  </Right>
                </Container>
            </Section>
        )
}

export default Hero
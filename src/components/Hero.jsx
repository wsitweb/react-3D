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
  @media(max-width: 768px){
        height: 200vh;
        scroll-snap-align: none;
    }
`
const Container = styled.div`
  height: 100%;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px){
        height: calc(100% - 70px);
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
  }
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 100%;
  z-index: 10;
  min-width: 300px;
  @media(max-width: 768px){
    flex: 1;
    scroll-snap-align: center;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    max-width: 500px;
    max-height: 100vh;
    height: 100vh;
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
const Right = styled.div`
  flex: 3;
  position: relative;
  overflow: visible;
  margin: -100px;
  @media(max-width: 768px){
    flex: 1;
    scroll-snap-align: center;
    width: 100%;
    max-height: 100vh;
    height: 100%;
  }
`
const Img = styled.img`
  max-width: 800px;
  width: 100%;
  max-height: 600px;
  height: 60%;
  object-fit: contain;
  position: absolute;
  margin: auto;
  inset: 0;
  animation: animate 2s infinite ease alternate;
  @media(min-width: 769px){
    pointer-events: none;
  }
  
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
                    <Scene camera = {{fov: 45, position: [5,5,5] }} adaptiveRotate={true}>
                      <Sphere/>
                    </Scene >
                    <Img src="./img/moon.png"/>
                  </Right>
                </Container>
            </Section>
        )
}

export default Hero
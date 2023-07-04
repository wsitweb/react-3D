import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  position: relative;
`
const Right = styled.div`
  flex: 1;
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

const Who = () =>{
    return (
            <Section>
                <Container>
                  <Left>
                    {/* 3d model*/}
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
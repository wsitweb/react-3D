import React, { useState } from 'react'
import { styled } from "styled-components"
import WebDesign from './worksItems/WebDesign';
import Development from './worksItems/Development';
import Illustration from './worksItems/Illustration';
import ProductDesign from './worksItems/ProductDesign';
import SocialMedia from './worksItems/SocialMedia';

const genSize = (window.innerHeight + window.innerWidth) / 100;

document.body.style.cssText = `--genSize: ${genSize}px;`

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media(max-width: 768px){

  }
`
const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px){
    height: 100%;
    flex-direction: column;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 768px){
    flex: 0;
    padding: 20px;
  }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media(max-width: 768px){
    gap: 10px;
  }
` 
const ListItem = styled.li`
  font-size: ${genSize*2.5}px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff73;
  position: relative;
  white-space: nowrap;
  &::after{
    content: '${(props)=>props['data-text']}';
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    -webkit-text-stroke: 1px pink;
    display: block;
    animation: inimation .5s ease-in-out ;
    white-space: nowrap;
    overflow: hidden;
    width: 0%;
    transition: width 0.5s ease;
  }
  &:hover{
    &::after{
      width: 100%;
    }
  }
  &.active{
    &::after{
      width: 100%;
    }
  }
  @media(max-width: 768px){
    font-size: calc(var(--genSize) *2);
  }
`
const Right = styled.div`
  flex: 1;
  position: relative;
  @media(max-width: 768px){
    height: 100%;
  }
`

function Works() {
  const [work, setWork] = useState('Web Design')
  const [active, setActive] = useState('Web Design')
    return (
      <Section>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                  <ListItem key={item} data-text={item} onClick={(event)=>{
                    setWork(item);
                    setActive(item);
                  }}
                  className={active==item?'active':''}>{item}</ListItem>
                ))}
            </List>
          </Left>
          <Right>
            {work === 'Web Design' ? (<WebDesign/>
              ):work === 'Development' ? (<Development/>
              ):work === 'Illustration'? (<Illustration/>
              ):work === 'Product Design'? (<ProductDesign/>
              ):(<SocialMedia/>)}
          </Right>
        </Container>
      </Section>
    )
  }
  
  export default Works
  
import React, { useState } from 'react'
import { styled } from "styled-components"
import WebDesign from './worksItems/WebDesign';
import Development from './worksItems/Development';
import Illustration from './worksItems/Illustration';
import ProductDesign from './worksItems/ProductDesign';
import SocialMedia from './worksItems/SocialMedia';
const genSize = (window.innerHeight + window.innerWidth) / 100;

// window.addEventListener('mousemove',(event)=>{
//   document.body.style.cssText = `--x: ${event.clientX}px; --y: ${event.clientY}px; overflow: hidden;`
// })

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
`
const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
` 
const ListItem = styled.li`
  font-size: ${genSize*2.5}px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff73;
  position: relative;
  &::after{
    /* content: attr(data-text); */
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
`
const Right = styled.div`
  flex: 1;
`

function Works() {
  const [work, setWork] = useState('Web Design')
    return (
      <Section>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                  <ListItem key={item} data-text={item} onClick={()=>setWork(item)}>{item}</ListItem>
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
  
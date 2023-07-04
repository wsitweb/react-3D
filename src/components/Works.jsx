import React from 'react'
import { styled } from "styled-components"
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
  &:hover{

  }
` 
const ListItem = styled.li`
  font-size: ${genSize*3.3}px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  /* &::after{
    content: attr();

  } */
`
const Right = styled.div`
  flex: 1;
`

function Works() {

    return (
      <Section>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                  <ListItem key={item} data-text={item}>{item}</ListItem>
                ))}
            </List>
          </Left>
          <Right></Right>
        </Container>
      </Section>
    )
  }
  
  export default Works
  
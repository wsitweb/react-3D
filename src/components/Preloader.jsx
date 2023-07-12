import React, { useEffect, useState } from 'react'
import { Rings, Puff } from 'react-loader-spinner'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    inset: 0;
    background: #080114;
    transition: transform 1s;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    &.done{
      transform: translateY(-100%);
      user-select: none;
      pointer-events: none;
    }
`
function Preloader(props) {
  
  return (
    <>
        <Container className={props.isLoading} >
          <Rings width={100} height={100} radius='20' color='#5405B9' wrapperStyle={{scale: '2.5'}}/>
        </Container>
    </>
  )
}

export default Preloader
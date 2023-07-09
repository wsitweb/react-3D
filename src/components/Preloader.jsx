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
`

function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const handleLoad = () => {
          setIsLoading(false);
        };
        window.addEventListener('load', handleLoad);
    
        return () => {
          window.removeEventListener('load', handleLoad);
        };
      }, []);

  return (
    <>
        {isLoading ? (
            <Container>
            <Rings width={100} height={100} radius='20' color='#5405B9' wrapperStyle={{scale: '2.5'}}/>
            </Container>
        ) : (
            <Container style={{transform: 'translateX(-100%)'}}>
                <Rings width={100} height={100} radius='20' color='#5405B9' wrapperStyle={{scale: '2.5'}}/>
            </Container>
        )}
    </>
  )
}

export default Preloader
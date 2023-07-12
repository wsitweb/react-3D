import { styled } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Preloader from "./components/Preloader"
import { useEffect, useState } from "react"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(true);
    };
    setTimeout(handleLoad, 3000)
  }, []);
  return (
    <>
    <Preloader isLoading = {isLoading?'done': false}/>
      <Container>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
      </Container>
    </>
  )
}

export default App


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from "styled-components"
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media(max-width: 768px){
    flex-direction: column;
    display: block;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media(max-width: 768px){
    justify-content: center;
    height: 100vh;
    z-index: 10;
  }
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  justify-content: center;
  z-index: 1;
  @media(max-width: 768px){
    width: 260px;
  }
`
const Input = styled.input`
  padding: 20px;
  background-color: #dfdfdf;
  border: 2px solid white;
  border: 2px solid var(--placeholder-color);
  border-radius: 5px;
  &::placeholder{
    color: var(--placeholder-color);
  }
`
const TextArea = styled.textarea`
  max-width: 100%;
  padding: 20px;
  background-color: #dfdfdf;
  border: none;
  border-radius: 5px;
  max-height: 160px;
  min-height: 16px;
  height: 100%;
  &::placeholder{
    color: var(--placeholder-color);
  }
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white !important;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
  @media(max-width: 768px){
    flex: 1;
    pointer-events: none;
    opacity: 0.2;
    transform: translateY(-100%);
    height: 100%;
    width: 100%;
  }
`

const Contact = () =>{
  const ref= useRef();
  const [success, setSuccess] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    const name = e.target[0]
    const email = e.target[1]
    const itemsForm = [...e.target.elements]
    const form = e.target
    const allItemFotm = [...e.target]
    if(Boolean(localStorage.getItem('submitted the form')) == true){
      itemsForm.forEach(item=> item.style.cssText = '')
      setSuccess(<div style={{color: 'green', fontWeight: 'bold'}}>You have already submitted the form!</div>)
      allItemFotm.forEach(item=> item.style.color = 'green')
    }else{ 
      if(name.value.length >= 10 || name.value.length < 2){
        itemsForm.forEach(item=> item.style.cssText = '')
        setSuccess(<div style={{color: 'red', fontWeight: 'bold'}}>Name length cannot be more than 10 or less than 2 letter.</div>)
        name.style.cssText = '--placeholder-color: red;'
      }else{
        if(email.value.length < 1){
          itemsForm.forEach(item=> item.style.cssText = '')
          setSuccess(<div style={{color: 'red', fontWeight: 'bold'}}>Email length cannot be less than 1 letter.</div>)
          email.style.cssText = '--placeholder-color: red;'
        }else{
          itemsForm.forEach(item=> item.style.cssText = '')
          sendMail()
        }
      }
    }
    function sendMail(){
      emailjs.sendForm(
        'service_0vvav9g',
        'template_39v2hnk',
        ref.current,
        'c0iV2sTPYjk-XZ-Pg')
          .then(
            (result) => {
              console.log(result.text);
              setSuccess(<div style={{color: 'blue', fontWeight: 'bold'}}>Your message has been sent. We'll get back to you soon :)</div>)
              localStorage.setItem('submitted the form', true)
            },
            (error) => {
              console.log(error.text);
              setSuccess(<div style={{color: 'blue', fontWeight: 'bold'}}>Your message was not sent. Please try again :(</div>)
            });
      }
  }
    return (
            <Section>
                <Container>
                  <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                      <Title>Contact Us</Title>
                      <Input placeholder='Name*' type='text' name='name'/>
                      <Input placeholder='Email*' type='email' name='email'/>
                      <TextArea placeholder='Write your message' name='message'/>
                      <Button type='submit'>Send</Button>
                      {success}
                    </Form>
                  </Left>
                  <Right>
                    <Map/>
                  </Right>
                </Container>
            </Section>
        )
}

export default Contact
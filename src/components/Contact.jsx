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
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
`
const Input = styled.input`
  padding: 20px;
  background-color: #dfdfdf;
  border: none;
  border-radius: 5px;
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
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
`

const Contact = () =>{
  const ref= useRef();
  const [success, setSuccess] = useState(null)
  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm(
      'service_0vvav9g',
      'template_39v2hnk',
      ref.current,
      'c0iV2sTPYjk-XZ-Pg')
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true)
          },
          (error) => {
            console.log(error.text);
            setSuccess(false)
          });
  }
    return (
            <Section>
                <Container>
                  <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                      <Title>Contact Us</Title>
                      <Input placeholder='Name' type='text' name='name'/>
                      <Input placeholder='Email' type='email' name='email'/>
                      <TextArea placeholder='Write your message' name='message'/>
                      <Button type='submit'>Send</Button>
                      {success && "Your message has been sent. We'll get back to you soon:)"}
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
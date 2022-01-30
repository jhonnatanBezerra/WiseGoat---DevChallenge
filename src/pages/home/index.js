import axios from 'axios';
import React, { useEffect, useState } from 'react';
import bode from '../../img/bodezinho.png'
import {Container,Content, Section,Subtitle, Title, Buttom,
  BallomWrapper,BallomText, TextButtom, Floating } from './styles'


 export const Home = () => {

  const [frase, setFrase] = useState('');

  const getMessage = async () =>{
    try {
      const {data} = await axios.get('https://api.adviceslip.com/advice');
      setFrase(data.slip.advice);
    } catch (error) {
      
    }
  }

  return (
    <Container>
     <Content>

     {frase && 
      <BallomWrapper>
        <BallomText>
          {frase}         
        </BallomText>
      </BallomWrapper>
      }
      
        <Section>
          <Subtitle>Wise</Subtitle>
          <Title >Goat</Title>

          <Buttom onClick={getMessage}>
            <TextButtom>{frase ? 'Ask new advice' : 'Ask advice'}</TextButtom>
          </Buttom>
        </Section>

        <Floating>
        <img src={bode} alt="Bode" style={{ height: '70vh'}} />
        </Floating>
         
      </Content>
    </Container>
  )
}

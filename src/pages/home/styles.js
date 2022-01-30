import styled, {keyframes} from "styled-components";

const float = keyframes`

0%,100%{
		
		transform:translatey(0)
	}
	50%{
		transform:translatey(-20px)
	}
`;

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  height:100vh;
`

export const Content = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  position: relative;
`

export const Section = styled.section`
  padding: 0 10rem
`

export const Subtitle = styled.h2`
  color: #BAA193;
  font-size:5rem;
  margin-bottom:-2rem;
`
export const Title = styled.h1`
  color:#72005F;
  font-size:10rem;
  font-weight: bold;
`

export const Buttom = styled.button`
  background:#72005F;
  padding: 1rem 5rem;
  border-radius: 1rem;
  margin-top: 1rem;
  transition: filter 0.55s;

  &:hover{
     cursor: pointer;
     filter: brightness(85%);
  }

`

export const TextButtom = styled.span`
  color:#FFF;
  font-weight:bold;
  font-size: 1.5rem
`

export const Floating = styled.div`
  display: inline-block;
  animation: ${float} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const BallomWrapper = styled.div`
animation: ${float} 2s linear infinite;
  width: 281px;
  /* height: 53px; */
  background: #f1f1f1;
  border-radius: 26.5px;
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80px;
  right: 320px;

  &:after {
  content: "";
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background: #f1f1f1;
  position: absolute;
  bottom: -7px;
  right: 30px;
  }

  &:before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #f1f1f1;
  position: absolute;
  right: 15px;
  bottom: -21px;
}
`

export const BallomText = styled.p`
  font-weight: bold;
  font-size: 15px;
`
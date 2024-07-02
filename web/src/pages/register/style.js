import styled from "styled-components"
import BackgroundImg from '../../assets/death.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 130px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.COLORS.light_blue};
    margin-bottom: -7px;
    margin-top: 10px;
  }

  > h2 {
    margin-bottom: 20px;
  }

  > p {
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.white};
    opacity: .3;
    margin-bottom: 70px;
  }

  > h3 {
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 7px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.white};
    text-decoration: none;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
  }

  > Button {
    margin-top: 2px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`
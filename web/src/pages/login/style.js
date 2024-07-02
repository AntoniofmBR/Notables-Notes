import styled from "styled-components"
import BackgroundImg from '../../assets/penguin.png'

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
    margin-top: 84px;
    margin-bottom: 10px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.white};
    text-decoration: none;
    font-size: 15px;
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
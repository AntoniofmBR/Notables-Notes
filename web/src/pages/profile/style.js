import styled from "styled-components"

export const Container = styled.div`
  padding: 20px 30px;
`


export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.white};
  }

  > h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.COLORS.light_blue};
    margin-bottom: -7px;
    margin-right: 20px;
  }
`

export const ProfileItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > Button {
    width: 400px;
  }
`

export const ProfileAvatar = styled.div`
  position: relative;
  margin: auto 32px;

  width: 186px;
  height: 186px;
  
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.light_blue};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 23px;
      height: 23px;
      color: ${({ theme }) => theme.COLORS.white};
    }
  }
`

export const ProfileInputs = styled.div`
  margin-top: 20px;
  width: 400px;
`
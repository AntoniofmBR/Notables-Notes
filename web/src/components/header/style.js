import styled from 'styled-components'

export const Container = styled.header`
  display: block;
  flex-direction: column;
  justify-content: center;

  height: 105px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: -20px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.background_dark_blue};

  padding: 0 80px;
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    font-size: 40px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.light_blue};
  }
`

export const Profile = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;


  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: start;

    width: 100px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.white};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.white};
    }
  }
`

export const Menu = styled.div`
  background-color: ${({ theme }) => theme.COLORS.black};

  padding: 10px 15px 0px 15px;
  width: 300px;
  margin-top: 10px;
  position: absolute;

  > li {
    color: ${({ theme }) => theme.COLORS.white};
    width: 100%;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    margin-bottom: 10px;
  }

  > li:hover, a:hover {
    color: ${({ theme }) => theme.COLORS.gray};
    cursor: pointer;
  }

  > li a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.white};
  }
`
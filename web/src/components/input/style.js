import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.white};
  color: ${({ theme }) => theme.COLORS.black};
  
  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    height: 50px;
    width: 100%;
    cursor: default;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.black};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.black} 
    }
  }

  > svg {
    margin-left: 16px;
  }
`
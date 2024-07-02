import styled from "styled-components"

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.light_blue};
  color: ${({ theme }) => theme.COLORS.white};
  width: 100%;

  height: 50px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
import styled from "styled-components"

export const Container = styled.div`
  > div {
    padding: 0 80px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 22px;
    border: 0;

    height: 30px;
    width: 120px;
    margin-left: 80px;
    margin-top: 15px;
    gap: 2px;

    font-weight: 700;
    
    background-color: ${({ theme }) => theme.COLORS.black_green};
    color: ${({ theme }) => theme.COLORS.white};
  }
`

export const NotesSpace = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: auto;

  height: 100%;
  width: 100%;
`

export const ModalCreateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.black};

  margin-bottom: 20px;

  > input {
    border: none;
    background: none;
  }

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.gray}
  }
`

export const ModalCreateContent = styled.div`
  color: ${({ theme }) => theme.COLORS.black};
  height: 90%;
  
  > textarea {
    color: ${({ theme }) => theme.COLORS.black};
    background: none;
    resize: none;
    cursor: default;
    border: none;
    height: 100%;
    width: 100%;
    font-family: 'Inter', Arial, sans-serif;
  }
`
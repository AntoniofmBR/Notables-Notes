import styled from "styled-components"

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: ${({ theme }) => theme.COLORS.light_gray};
  color: ${({ theme }) => theme.COLORS.black};
  
  width: 425px;
  height: 220px;
  padding: 10px 15px;
  margin-top: 20px;
  
  border-radius: 10px;
  gap: 5px;
`

export const NoteTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  width: 100%;

    > h2 {
      color: ${({ theme }) => theme.COLORS.black};
      font-size: 18px;
      white-space: nowrap;
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    > div button {
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.gray}
    }

    > div button:hover {
      color: ${({ theme }) => theme.COLORS.black}
    }
`

export const NoteContent = styled.div`
  height: 200px;

  > p {
    width: 100%;
    height: 100%;
    border: none;
    color: ${({ theme }) => theme.COLORS.black};
    word-wrap: break-word;
    background-color: ${({ theme }) => theme.COLORS.light_gray};
  }
`

export const ModalDeleteHeader = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.black};
`

export const ModalDeleteContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 80px;

  > #button-no {
    background-color: #141414;
    color: ${({ theme }) => theme.COLORS.white};
    border: none;

    height: 50px;
    padding: 0px 30px;

    border-radius: 12px;
  }

  > #button-delete {
    border: none;
    height: 50px;
    padding: 0px 30px;
    border-radius: 12px;
    background-color: #D90429;
    color: ${({ theme }) => theme.COLORS.white};

  }
`

export const ModalEditHeader = styled.div`
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

export const ModalEditContent = styled.div`
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
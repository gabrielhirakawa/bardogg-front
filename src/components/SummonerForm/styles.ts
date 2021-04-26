import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.purple};
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  padding: 40px 20px;
  border-radius: 20px;
  width: 800px;

  @media (max-width: 1080px) {
    flex-direction: column;
    width: 80%;
  }

  img {
    height: 300px;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;

  h1 {
    text-align: center;
  }

  @media (max-width: 1080px) {
    width: 80%;
  }
`

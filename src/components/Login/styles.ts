// import styled from 'styled-components'
import styled from '@emotion/styled'

type ThemeProps = {
  theme: {
    black: string
    purple: string
    white: string
    blue: string
    green: string
    red: string
    yellow: string
    h1: string
  }
}

export const Wrapper = styled('main')`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }
`
export const FormContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1080px) {
    width: 100%;
  }
`

export const RightContainer = styled.div`
  width: 35%;
  height: 100%;
  background-color: ${(props) => props.theme.purple};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    width: 100%;
    display: none;
  }
`

export const Logo = styled.img`
  height: 400px;
  /* width: 25rem;
  height:
  margin-bottom: 2rem; */
`

export const Description = styled.h1`
  font-size: ${(props) => props.theme.h1};
  font-weight: 400;
  max-width: 400px;

  @media (max-width: 1080px) {
    color: ${(props) => props.theme.white};
  }
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

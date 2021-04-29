import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.blue};
    margin-bottom: 10px;
  }
  h2 {
    font-size: 40px;
    color: ${(props) => props.theme.blue};
    font-family: 'Bebas Neue', cursive;
  }
`

export const LolInfo = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
  }
`

export const WinsSpan = styled.strong`
  color: ${(props) => props.theme.green};
`

export const LossesSpan = styled.strong`
  color: ${(props) => props.theme.red};
`

export const Separator = styled.span`
  height: 5px;
  width: 100%;
  margin: 10px;
  background-color: ${(props) => props.theme.blue};
`
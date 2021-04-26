// import styled from 'styled-components'
import styled from '@emotion/styled'
import { Props } from './index'

export const Wrapper = styled.button<Props>`
  border-radius: 10px;
  height: 40px;
  color: ${(props) => (props.color ? props.color : '#fff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#ccc')};
  border: none;
  cursor: pointer;
  margin: 10px;
  width: ${(props) => (props.width ? props.width : '100%')};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
`

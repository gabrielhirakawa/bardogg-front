import styled from 'styled-components'

export const Wrapper = styled('button')<{ bgColor: string }>`
  border-radius: 10px;
  height: 40px;
  color: ${(props) => (props.color ? props.color : '#fff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#ccc')};
  border: none;
  cursor: pointer;
  margin: 10px 0;
  width: ${(props) => (props.width ? props.width : '100%')};
  font-weight: 600;
`

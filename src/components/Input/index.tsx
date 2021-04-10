import { InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string
  width?: string
  labelError?: string
  model?: 'primary' | 'secondary'
}

const InputStyled = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 4px;
  height: 40px;
  text-align: center;
  background-color: ${(props) => props.theme.gray};
  color: rgba(69, 66, 65, 0.5);
  font-weight: bold;
  outline: none;
  border: none;
  margin: 10px;
`

export default function Input({ text, ...rest }: InputProps) {
  return <InputStyled {...rest} placeholder={text} />
}

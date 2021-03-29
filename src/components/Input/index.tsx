import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string
  width?: string
  labelError?: string
  model?: 'primary' | 'secondary'
}

const InputStyled = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 10px;
  height: 40px;
  text-align: center;
  border: ${(props) => `1px solid ${props.theme.blue}`};
  margin: 10px 0;
`

export default function Input({ text, ...rest }: InputProps) {
  return <InputStyled {...rest} placeholder={text} />
}

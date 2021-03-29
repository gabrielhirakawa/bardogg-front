import { ReactNode, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  bgColor?: string
  width?: string
}

export default function Button({
  children,
  bgColor = '#c1c1c1',
  width = '100%',
  ...rest
}: Props) {
  return (
    <S.Wrapper bgColor={bgColor} width={width} {...rest}>
      <>{children}</>
    </S.Wrapper>
  )
}

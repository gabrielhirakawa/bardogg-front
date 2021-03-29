import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
  bgColor?: string
  width?: string
}

export default function Button({
  children,
  bgColor = '#c1c1c1',
  width = '100%'
}: Props) {
  return (
    <S.Wrapper bgColor={bgColor} width={width}>
      <>{children}</>
    </S.Wrapper>
  )
}

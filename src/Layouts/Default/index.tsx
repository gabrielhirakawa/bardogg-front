import Menu, { MenuProps } from 'components/Menu'
import SignedLayout from 'Layouts/Signed'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface LayoutProps extends MenuProps {
  children: ReactNode
  title?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.purple};
  height: 100%;
`

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.white};
  padding: 20px;
  border-radius: 20px;
  width: 1000px;

  @media (max-width: 1250px) {
    width: 800;
  }

  @media (max-width: 1080px) {
    width: 80%;
  }
`

export const Content = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export default function DefaultLayout({
  children,
  title,
  tabActive = 'home'
}: LayoutProps) {
  return (
    <SignedLayout>
      <Wrapper>
        <Container>
          <Menu tabActive={tabActive} />
          <Content>
            {title ? <h2>{title}</h2> : <></>}
            {children}
          </Content>
        </Container>
      </Wrapper>
    </SignedLayout>
  )
}

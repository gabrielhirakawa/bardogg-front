import Menu, { MenuProps } from 'components/Menu'
import SignedLayout from 'Layouts/Signed'
import { ReactNode } from 'react'
import styled from '@emotion/styled'
import Header from 'components/Header'

interface LayoutProps extends MenuProps {
  children: ReactNode
  title?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.gray};
  min-height: 100%;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  padding: 20px;
  width: 1200px;
  padding-bottom: 100px;

  @media (max-width: 1250px) {
    width: 90%;
  }

  @media (max-width: 1080px) {
    width: 90%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  h2 {
    font-size: 36px;
    text-transform: uppercase;
    color: ${(props) => props.theme.black};
  }
`

export default function DefaultLayout({
  children,
  title,
  tabActive = 'home'
}: LayoutProps) {
  return (
    <SignedLayout >
      <Wrapper>
        <Header active={tabActive} />
        <Container>
          <Content>
            {title ? <h2>{title}</h2> : <></>}
            {children}
          </Content>
        </Container>
      </Wrapper>
    </SignedLayout>
  )
}

import Link from 'next/link'
import { useState } from 'react';
import Button from 'components/Button';
import { messages, languagesProps } from '../locale/languages'
import { 
  Container, 
  Content,
  Header,
  LoginAccess,
  TopContainer,
  Separator,
  Features,
  FeatureItem,
  HowToStart,
  GitSection,
  SelectDiv,
  Footer
  } from '../pages-styles/landing';

export default function Home() {
  const [language, setLanguage] = useState('pt')
  return (
  <Container>
  
    <Content>
      <Header>
        <img
          src="/img/logo-menor.png"
          alt="logo"
        />
        <div>
          <LoginAccess>
            <Link href="/auth">
              ENTRAR
            </Link>
            <Link href="/auth">
              <Button bgColor="#793F86">Criar conta</Button>
            </Link>
          </LoginAccess>
          {/* <SelectDiv>
            <Form.Control 
              onChange={(e) => setLanguage(e.target.value)}  
              as="select"
              value={language}
              >
              <option value="pt">pt-br</option>
              <option value="en">en-us</option>
            </Form.Control>
          </SelectDiv> */}
        </div>
      </Header>
      <TopContainer>
        <div>
          <h1>Personalizar suas ligas nunca foi tão <span>fácil</span>!</h1>
          <Link href="/auth">
            <Button width="220px" bgColor="#11698E">Começar agora</Button>
          </Link>
          
        </div>
        <img src="/img/bard-landing.png" alt="bardo" />
      </TopContainer>
      <Separator />
      <Features>
        <FeatureItem>
          <img src="/img/leagues-landing.png" />
          <div>
            <span>Crie ligas com seus amigos</span>
            <p>Crie inúmeras ligas ranqueando seus amigos por elo.</p>
          </div>
          
        </FeatureItem>
        <FeatureItem>
          <img src="/img/masteries-landing.png" />
          <div>
            <span>Compare suas maestrias</span>
            <p>Veja seus campões com maior pontuação de maestria e dos seus amigos.</p>
          </div>
        </FeatureItem>
      </Features>
      
      <Separator />
      <HowToStart>
          <img src="/img/bard-icon.png" />
          <div>
            <h2>COMO COMEÇAR?</h2>
            <p>Basta cadastrar agora utilizando sua conta do <span>FACEBOOK</span> ou <span>GOOGLE.</span></p>
          </div>
        </HowToStart>
        <Separator />
        <GitSection>
          <h2>CONTRIBUA COM O PROJETO</h2>
          <div>
            <p>Você pode contribuir conosco trazendo 
              novas features e melhorias, basta fazer um 
              pull request pelo github 
              <Link href="https://github.com/gabrielhirakawa/bardogg-front">
                <a target="_blank" rel="noreferrer">
                  <strong> acessando aqui.</strong>
                </a>
              </Link>
            </p>
              <img src="/img/octocat.png" alt="logo github" />
          </div>
        </GitSection>
        <Footer>
          <span>Desenvolvido com</span>
          <img src="/img/heart.png" />
          <span>por 
            <Link passHref  href="https://gabrielhirakawa.netlify.app/">
            <a target="_blank" rel="noreferrer">
              <strong> Gabriel Hirakawa</strong>
            </a>
            </Link>
          </span>
        </Footer>
    </Content>
  </Container>)
}

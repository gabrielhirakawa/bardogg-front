import FacebookLogin from 'react-facebook-login'
import { useRouter } from 'next/router'

import * as S from './styles'
import Button from '../Button'
import api from '../../services/api'

function Login() {
  const router = useRouter()

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('bardo_token')
    if (token) {
      router.push('/dashboard')
    } else {
      localStorage.clear()
    }
  }

  function responseFacebook(response) {
    const { name, email, accessToken, userID, picture } = response

    const img = picture.data ? picture.data.url : ''

    localStorage.setItem('bardo_token', accessToken)
    localStorage.setItem('bardo_id', userID)
    localStorage.setItem('bardo_img', img)
    localStorage.setItem('bardo_username', name)
    loadLogin(userID, email, name, img)
  }

  async function loadLogin(id, email, name, img) {
    const res = await api
      .post('/user', {
        id,
        email,
        name,
        imageUrl: img,
        typeAuth: 'facebook'
      })
      .catch((e) => alert('ops, erro'))

    if (res && res.data) {
      if (res.data.statusCode === '100') {
        router.push('/dashboard')
      } else if (res.data.statusCode === '101') {
        router.push(`/summoner/${id}`)
      }
    }
  }

  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.Description>
          Realize <strong>login</strong> através dos serviços
        </S.Description>
        <FacebookLogin
          appId="310657367063133"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          textButton="Login com o facebook"
          cssClass="facebook-button"
          callback={responseFacebook}
        />
        <Button width="250px" bgColor="#EA6E50">
          Login com o Google
        </Button>
      </S.FormContainer>

      <S.RightContainer>
        <S.Logo
          src="/img/bard.svg"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
      </S.RightContainer>
    </S.Wrapper>
  )
}

export default Login

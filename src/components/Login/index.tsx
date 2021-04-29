import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'


import * as S from './styles'
import Button from '../Button'
import api from '../../services/api'
import { useState } from 'react'

function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('bardo_token')
    if (token) {
      router.push('/dashboard')
    } else {
      localStorage.clear()
    }
  }

  function responseFacebook(response: ReactFacebookLoginInfo) {
    setLoading(true)

    if(response.email){
      loadLogin(response)
    }

    setLoading(false)
  }

  async function loadLogin({
    id,
    email,
    name,
    picture,
    accessToken,
    userID
  }: ReactFacebookLoginInfo) {

    const n = name as string
    const img = picture?.data.url as string
    
    await api
      .post('/user', {
        id,
        email,
        name,
        imageUrl: picture?.data.url,
        typeAuth: 'facebook'
      }).then(res => {

        localStorage.setItem('bardo_token', accessToken)
        localStorage.setItem('bardo_id', userID)
        localStorage.setItem('bardo_img', img)
        localStorage.setItem('bardo_username', n)

        if (res.data.statusCode === '100') {
          router.push('/dashboard')
        } else if (res.data.statusCode === '101') {
          router.push(`/summoner/${id}`)
        }

      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Houve um erro inesperado!',
        })
      })

  }

  return (
    <S.Wrapper>
      <S.FormContainer>
        <img src="/img/logo-menor.png" style={{ height: '100px' }} />
        <S.Description>
          Realize <strong>login</strong> através dos serviços
        </S.Description>
        <FacebookLogin
          isDisabled={loading ? true : false}
          appId="310657367063133"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          textButton="Login com o facebook"
          cssClass="facebook-button"
          callback={responseFacebook}
        />
        {/* <Button width="250px" bgColor="#EA6E50">
          Login com o Google
        </Button> */}
      </S.FormContainer>

      <S.RightContainer>
        <S.Logo src="/img/bard.svg" alt="Imagem bardo." />
      </S.RightContainer>
    </S.Wrapper>
  )
}

export default Login

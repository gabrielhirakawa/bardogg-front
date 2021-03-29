import Button from 'components/Button'
import Input from 'components/Input'
import { EventHandler, useState } from 'react'
import { useRouter } from 'next/router'
import api from 'services/api'
import { Spinner } from 'react-bootstrap'

import * as S from './styles'
import { theme } from '../../styles/theme'

export default function SummonerForm() {
  const [summoner, setSummoner] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const id = router.query.id

    const res = await api
      .post('/summoner', {
        id,
        summonerName: summoner
      })
      .catch((e) => alert('error'))

    if (res) {
      localStorage.setItem('summoner', summoner)
      router.push('/dashboard')
    }

    setLoading(false)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <h1>
            Estamos quase lá! Nos informe seu <strong>nome de invocador</strong>
          </h1>

          <Input
            text="Nome de invocador"
            value={summoner}
            required
            onChange={(e) => setSummoner(e.target.value)}
          />
          <Button bgColor={theme.blue}>
            {loading ? (
              <Spinner animation="border" variant="light" />
            ) : (
              'Confirmar'
            )}
          </Button>
        </S.Form>
        <img src="/img/user.svg" alt="pessoa utilizando computador" />
      </S.Container>
    </S.Wrapper>
  )
}

import DefaultLayout from 'Layouts/Default'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import api from 'services/api'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    height: 80px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.blue};
    margin-bottom: 10px;
  }
  h2 {
    font-size: 40px;
    color: ${(props) => props.theme.blue};
    font-family: 'Bebas Neue', cursive;
  }
`

const LolInfo = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
  }
`

const WinsSpan = styled.strong`
  color: ${(props) => props.theme.green};
`

const LossesSpan = styled.strong`
  color: ${(props) => props.theme.red};
`

const Separator = styled.span`
  height: 5px;
  width: 100%;
  margin: 10px;
  background-color: ${(props) => props.theme.blue};
`

export default function Dashboard() {
  const [lolData, setLolData] = useState(Object)
  const [summoner, setSummoner] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    loadData()
    async function loadData() {
      setLoading(true)
      const id = localStorage.getItem('bardo_id')
      const res = await api.get(`/user/${id}`).catch((e) => alert('error'))

      if (res && res.data) {
        const { lol } = res.data
        const summonerRes = await api
          .get(`/summoner/${lol.name}`)
          .catch((e) => alert('error'))

        if (summonerRes && summonerRes.data) {
          setSummoner(lol.name)
          setLolData(summonerRes.data ? summonerRes.data : {})
        }
      }
      setLoading(false)
    }
  }, [])

  return (
    <DefaultLayout tabActive="home">
      <Container>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <>
            <HeaderInfo>
              <img src={lolData.iconUrl} alt="lol avatar" />
              <h2>{summoner}</h2>
            </HeaderInfo>
            <Separator />
            <LolInfo>
              <label>
                <strong>NÍVEL:</strong> {lolData.summonerLevel} {' - '}
                <strong>ELO:</strong> {lolData.tier} {lolData.rank}
              </label>

              <label>
                <WinsSpan>VITÓRIAS:</WinsSpan> {lolData.wins} {' - '}
                <LossesSpan>DERROTAS:</LossesSpan> {lolData.losses}
              </label>
              <label>
                <strong>WIN RATE:</strong> {lolData.winRate}%
              </label>
            </LolInfo>
            <Separator />
          </>
        )}
      </Container>
    </DefaultLayout>
  )
}

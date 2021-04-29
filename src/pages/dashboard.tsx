import DefaultLayout from 'Layouts/Default'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Spinner } from 'react-bootstrap'

import * as S from 'pages-styles/dashboard'
import api from 'services/api'
import { useRouter } from 'next/router'



export default function Dashboard() {
  const [lolData, setLolData] = useState(Object)
  const [summoner, setSummoner] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
    loadData()
    async function loadData() {
      setLoading(true)
      const id = localStorage.getItem('bardo_id')
      
      await api.get(`/user/${id}`).then(async(res) => {
        const { lol } = res.data
        if(!lol){
          router.push(`/summoner/${id}`);
          return;
        }

        await api
          .get(`/summoner/${lol.name}`)
          .then(summonerRes => {
            setSummoner(lol.name)
            setLolData(summonerRes.data ? summonerRes.data : {})
          })
          .catch((e) => 
            Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Houve um erro inesperado!',
        }))
      })
      .catch((e) => 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Houve um erro inesperado!',
        }))

      console.log()

      
      setLoading(false)
    }
  }, [])

  return (
    <DefaultLayout tabActive="home">
        <Head>
      <title>Home | Bardo.gg</title>
    </Head>
      <S.Container>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <>
            <S.HeaderInfo>
              <img src={lolData.iconUrl} alt="lol avatar" />
              <h2>{summoner}</h2>
            </S.HeaderInfo>
            <S.Separator />
            <S.LolInfo>
              <label>
                <strong>NÍVEL:</strong> {lolData.summonerLevel} {' - '}
                <strong>ELO:</strong> {lolData.tier} {lolData.rank}
              </label>

              <label>
                <S.WinsSpan>VITÓRIAS:</S.WinsSpan> {lolData.wins} {' - '}
                <S.LossesSpan>DERROTAS:</S.LossesSpan> {lolData.losses}
              </label>
              <label>
                <strong>WIN RATE:</strong> {lolData.winRate}%
              </label>
            </S.LolInfo>
            <S.Separator />
          </>
        )}
      </S.Container>
    </DefaultLayout>
  )
}

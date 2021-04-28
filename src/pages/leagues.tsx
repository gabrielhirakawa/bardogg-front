import Head from 'next/head'

import DefaultLayout from 'Layouts/Default'
import CardLeague from 'components/LeagueCard'

import * as S from 'pages-styles/leagues.styles'

export default function League() {
  return (
    <DefaultLayout tabActive="league">
      <Head>
        <title>Ligas | Bardo.gg</title>
      </Head>
      <span>Suas ligas</span>
      <CardLeague />
      <S.newLeagueButton>
        + Criar nova liga
      </S.newLeagueButton>
      
    </DefaultLayout>
  )
}

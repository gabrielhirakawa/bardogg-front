import * as S from './styles'

export default function CardLeague(){
    return <S.Container>
        <S.LeagueInfo>
            <img src="/img/lolicon.png" alt="logo do lol" />
            <div>
                <span>Torneio Jiraya</span>
                <span>12 participantes</span>
            </div>
        </S.LeagueInfo>
        <S.Enter>
            Entrar
        </S.Enter>
    </S.Container>
}
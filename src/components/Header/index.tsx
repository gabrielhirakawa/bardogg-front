import * as S from './styles'
import {
  FaUserCog,
  FaUserAstronaut,
  FaTrophy,
  FaHome,
  FaBell
} from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function Header({ active = 'home' }) {
  const router = useRouter()
  return (
    <S.Container>
      <img
        onClick={() => router.push('/dashboard')}
        src="/img/logo-menor.png"
        alt="logo"
      />
      <S.Nav>
        <S.MenuList>
          <S.MenuItem
            onClick={() => router.push('/dashboard')}
            active={active === 'home' ? true : false}
          >
            <FaHome size={20} />
            home
          </S.MenuItem>
          <S.MenuItem
            onClick={() => router.push('/leagues')}
            active={active === 'league' ? true : false}
          >
            <FaTrophy size={20} />
            Ligas
          </S.MenuItem>
          <S.MenuItem
            onClick={() => router.push('/masteries')}
            active={active === 'mastery' ? true : false}
          >
            <FaUserAstronaut size={20} />
            Maestrias
          </S.MenuItem>
          <S.MenuItem
            onClick={() => router.push('/account')}
            active={active === 'account' ? true : false}
          >
            <FaUserCog size={20} />
            Conta
          </S.MenuItem>

          <S.MenuItem>
            <FaBell color="#fff" size={20} />
          </S.MenuItem>
        </S.MenuList>
      </S.Nav>
    </S.Container>
  )
}

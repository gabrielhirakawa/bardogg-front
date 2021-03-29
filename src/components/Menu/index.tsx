import styled from 'styled-components'
import {
  FaTrophy,
  FaUserAstronaut,
  FaUserCog,
  FaSignInAlt,
  FaHome,
  FaBars
} from 'react-icons/fa'

export interface MenuProps {
  tabActive: 'home' | 'league' | 'mastery' | 'account'
}

const Nav = styled.div`
  ul li {
    list-style: none;
  }
  ul {
    width: 150px;
  }
`

const MenuToggle = styled.div`
  display: none;
  svg {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuDesktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const ItemMenu = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.active ? props.theme.blue : 'transparent'};
  color: ${(props) => (props.active ? props.theme.white : props.theme.black)};
  padding: 10px;
  font-weight: 600;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  svg {
    margin-right: 10px;
    ${(props) => (props.active ? props.theme.white : props.theme.black)};
  }

  &:hover {
    color: ${(props) =>
      props.active ? props.theme.white : props.theme.purple};
  }
`

const AvatarArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  img {
    margin-bottom: 10px;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.blue};
    border-radius: 50% !important;
  }
  span {
    align-self: center;
    font-size: 14px;
  }
`

export default function Menu({ tabActive }: MenuProps) {
  let src = null
  let name = null
  if (typeof window !== 'undefined') {
    src = localStorage.getItem('bardo_img')
    name = localStorage.getItem('bardo_username')
  }

  return (
    <Nav>
      <MenuToggle>
        <FaBars size={20} />
      </MenuToggle>
      <MenuDesktop>
        <AvatarArea>
          {src ? (
            <img src={src} alt="avatar perfil" />
          ) : (
            <img src="/img/avatar.png" alt="avatar perfil" />
          )}
          <span>{name}</span>
        </AvatarArea>
        <ul>
          <li>
            <ItemMenu active={tabActive === 'home' ? true : false}>
              <FaHome size={26} />
              Home
            </ItemMenu>
          </li>
          <li>
            <ItemMenu active={tabActive === 'league' ? true : false}>
              <FaTrophy size={26} />
              Liga
            </ItemMenu>
          </li>
          <li>
            <ItemMenu active={tabActive === 'mastery' ? true : false}>
              <FaUserAstronaut size={26} />
              Maestria
            </ItemMenu>
          </li>
          <li>
            <ItemMenu active={tabActive === 'account' ? true : false}>
              <FaUserCog size={26} />
              Conta
            </ItemMenu>
          </li>
          <li>
            <ItemMenu>
              <FaSignInAlt size={26} />
              Sair
            </ItemMenu>
          </li>
        </ul>
      </MenuDesktop>
    </Nav>
  )
}

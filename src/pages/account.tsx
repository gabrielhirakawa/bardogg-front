import DefaultLayout from 'Layouts/Default'
import styled from '@emotion/styled'
import Input from 'components/Input'
import Button from 'components/Button'
import { theme } from 'styles/theme'

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  /* width: 80%; */
`
const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    input,
    button {
      width: 80%;
    }

    label {
      word-break: keep-all;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 24px;
    }
  }
`

const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.purple};
  }
  label {
    font-size: 18px;
    font-weight: bold;
  }
  button {
    border: none;
    padding: 5px 20px;
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    background-color: ${(props) => props.theme.red};
    font-size: 14px;
  }
`

const DeactivateAccount = styled.div`
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${(props) => props.theme.purple};
  }
`

export default function Account() {
  let img = null
  let name = null
  if (typeof localStorage !== 'undefined') {
    img = localStorage.getItem('bardo_img')
    name = localStorage.getItem('bardo_username')
  }
  return (
    <DefaultLayout tabActive="account" title="Perfil">
      <Content>
        <AccountInfo>
          <form>
            <label>Alterar Summoner</label>
            <Input />
            <Button bgColor={theme.purple}>Alterar</Button>
          </form>
          <AvatarInfo>
            <img src={img} />
            <label>{name}</label>
            <button>Sair</button>
          </AvatarInfo>
        </AccountInfo>
        <DeactivateAccount>Desativar conta</DeactivateAccount>
      </Content>
    </DefaultLayout>
  )
}

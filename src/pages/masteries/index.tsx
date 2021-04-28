import Head from 'next/head'

import DefaultLayout from 'Layouts/Default'
import styled from '@emotion/styled'
import Input from 'components/Input'
import Button from 'components/Button'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Swal from 'sweetalert2'
import api from 'services/api'

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  width: 100%;

  h3 {
    font-size: 16px;
  }
`
const Top = styled.div`
  display: flex;
`

const ImgChampion = styled.img`
  height: 40px;

  @media (max-width: 414px) {
    height: 28px;
  }
`

const TableDiv = styled.div`
  width: 100%;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.purple};

  @media (max-width: 1080px) {
    overflow-x: scroll;
  }
  table {
    width: 100%;
    th {
      border-bottom: 1px solid #fff;
    }
    td,
    th {
      text-align: center;
      font-size: 18px;
      padding: 10px;
      color: ${(props) => props.theme.white};

      @media (max-width: 414px) {
        font-size: 12px;
        padding: 5px;
      }
    }
    tr:nth-child(even) {
      /* background-color: #; */
    }
  }
`

export default function Masteries() {
  const [currentSummoner, setCurrentSummoner] = useState('hirazin')
  const [loadingButton, setLoadingButton] = useState(false)
  const [data, setData] = useState([
    {
      name: '-',
      img: '',
      championLevel: '-',
      championPoints: '-',
      chestGranted: null
    }
  ])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoadingButton(true)
    await api
      .get(`/summoner/${currentSummoner}/masteries`)
      .then((res) => {
        setData(res.data)
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Um erro inesperado aconteceu!'
        })
      })

    setLoadingButton(false)
  }

  return (
    <DefaultLayout tabActive="mastery" title="Maestrias">
       <Head>
        <title>Maestrias | Bardo.gg</title>
      </Head>
      <Content>
        <h3>Busque por summoner name</h3>
        <Top>
          <Input
            value={currentSummoner}
            onChange={(e) => setCurrentSummoner(e.target.value)}
          />
          <Button 
            width="250px"
            disabled={loadingButton? true: false} 
            type="button" 
            bgColor="#11698E" 
            onClick={() => 
            loadData()
            }>
            {loadingButton ? (
              <Spinner size="sm" animation="border" />
            ) : (
              <>Buscar</>
            )}
          </Button>
        </Top>
        <TableDiv>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ícone</th>
                <th>Champion</th>
                <th>Nivel</th>
                <th>Pontos</th>
                <th>Baú</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.img ? <ImgChampion src={item.img} /> : '-'}</td>
                  <td>{item.name}</td>
                  <td>{item.championLevel}</td>
                  <td>{item.championPoints}</td>
                  <td>{item.chestGranted ? 'Habilitado' : 'Não'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableDiv>
      </Content>
    </DefaultLayout>
  )
}

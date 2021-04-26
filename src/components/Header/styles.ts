import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background-color: ${(props) => props.theme.purple};
  height: 80px;
  width: 100%;

  img {
    height: 50px;
    cursor: pointer;
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuList = styled.div`
  display: flex;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 10px;
  flex-direction: column;
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => (props.active ? props.theme.yellow : props.theme.white)};
  font-weight: ${(props) => (props.active ? 600 : 500)};

  svg {
    color: ${(props) =>
      props.active ? props.theme.yellow : props.theme.white};
  }

  &:hover {
    color: ${(props) => props.theme.yellow};

    svg {
      color: ${(props) => props.theme.yellow};
    }
  }
`

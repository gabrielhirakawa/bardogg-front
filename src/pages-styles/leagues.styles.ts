import styled from '@emotion/styled'

export const newLeagueButton = styled.button`
    margin-top: 30px;
    color: ${props => props.theme.purple};
    font-size: 30px;
    font-weight: bold;
    border: none;

    &:hover{
        color: ${props => props.theme.blue}; 
    }
`; 
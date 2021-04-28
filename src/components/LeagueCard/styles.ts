import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    margin: 10px;
    width: 700px;

    @media(max-width: 1080px){
        width: 90%; 
    }
`; 

export const LeagueInfo = styled.div`
    display: flex;
    div{
        margin-left: 20px;
        /* margin-right: 50px; */
        display: flex;
        flex-direction: column;
        span{
            &:first-child{
                font-size: 24px;
                font-weight: bold;
                text-transform: uppercase;
              
            }
            &:last-child{
                font-size: 14px;
                font-weight: bold;
                color: ${props => props.theme.purple};
               
            }
        }
    }

    @media(max-width: 1080px){
        img{
            height: 60px;
        }

        div{
            span{
                &:first-child{
                    font-size: 16px; 
                }
                &:last-child{
                    font-size: 12px; 
                }
            }
        }
}
   
`;


export const Enter = styled.span`
    color: ${props => props.theme.purple};
    text-transform: uppercase;
    font-weight: bold;

    @media(max-width: 1080px){
        font-size: 16px;
        display: none; 
    }
`;
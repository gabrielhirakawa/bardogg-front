import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, #732784 0%, #151515 100%);
  min-height: 100%;
  color: ${props => props.theme.white};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1300px;

  @media(max-width: 1350px){
    width: 1000px;
  }

  @media(max-width: 1080px){
    width: 80%;
  }

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px;
  font-size: 20px;
  img{
    height: 80px;
    margin-right: 20px;
  }

  div{
   display: flex;
   align-items: center;

   li{
     cursor: pointer;
     list-style: none;
     margin: 10px;
     font-weight: 700;

     &:hover{
       color: ${props => props.theme.yellow};
     }
   }
   
  }

  @media(max-width: 1080px){
    flex-direction: column;
  }


`;

export const LoginAccess = styled.div`
  background: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 700;

  a{
    text-decoration: none;
    color: #fff;
  }

  @media(max-width: 650px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
  h1{
    color: ${props => props.theme.white};
    font-weight: 700;
    max-width: 600px;
    text-align: left;
    margin-left: 10px;
    font-size: 40px;
  }
  span{
    color: ${props => props.theme.yellow};
  }
  img{
    height: 200px;
    align-self: flex-end;
    margin-top: 50px;
    margin-left: -200px;
  }

  @media(max-width: 1080px){
      flex-direction: column;
      margin-top: 40px;
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
        text-align: center;
      }
      }
     
      img{
        align-self: center;
        margin: 10px 0;
        height: 120px;
      }
    }

 
`;

export const Separator = styled.div`
  width: 80%;
  background-color: ${props => props.theme.gray};
  height: 2px;
`;

export const Features = styled.section`
  display: flex;
  padding: 80px 0;
  width: 75%;

  @media(max-width: 1080px){
    flex-direction: column;
    gap: 30px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  margin: 0 20px;
  img{
    height: 140px;
  }
  div{
    display: flex;
    flex-direction: column;
    max-width: 350px;
    span{
      text-transform: uppercase;
      font-weight: 700;
      font-size: 26px;
      color: ${props => props.theme.yellow};
    }
    p{
      font-weight: 500;
      font-size: 18px;
    }
  }

  @media(max-width: 650px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HowToStart = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  width: 70%;

  img{
    height: 160px;
    margin-right: 20px;
  }
  h2{
    font-weight: 700;
    font-size: 32px;
    color: ${props => props.theme.white};
  }
  span{
    color: #3A559F;
    font-weight: 700;
    &+span{
        color: #EA6E50; 
    }
  }

  @media(max-width: 650px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

export const GitSection = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  padding: 80px 0;
  width: 70%;

  div{
    display: flex;
  }

  img{
    height: 160px;
    margin-left: 20px;
  }
  h2{
    font-weight: 700;
    font-size: 32px;
    color: ${props => props.theme.white};
  }
  p{
    /* text-align: center; */
    a{
      color: #fff;
    }
  }

  @media(max-width: 650px){
    text-align: center;
    div{
      flex-direction: column;
      align-items: center;

    }
  }
  
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  img{
    height: 20px;
    margin: 0 5px;
  }
  font-size: 20px;
  a{
      color: #fff;
  }

  @media(max-width: 650px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const SelectDiv = styled.div`
    width: 120px;
    margin-left: 20px;
    select{
        font-size: 16px;
    }
`;

import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  background: ${(props) => props.theme.colors.gray};
  
  p,
  strong,
  span {
    color: #c8c8c8;
  }
  
  @media(max-width: 720px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  @media(max-width: 720px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  padding-right: 4rem;
  h1 {
    font-size: 1.64rem;
    color: ${(props) => props.theme.colors.primary2};
    margin-left: 1rem;

    @media (max-width: 720px) {
      font-size: 1rem;
      margin-left: 1rem auto;
    }
  }
`;
export const Descriptionontainer = styled.div`
  display: flex;
  width: 720px;
  align-items: center;
  justify-content: center;

  span {
    font-size: 0.8rem;
    word-break: break-word;
    text-align: justify;
  }

  a{
    color: ${props => props.theme.colors.primary2}
  }

  @media(max-width: 720px){
    display: flex;
    margin-top: 2rem;
    margin-right: 4rem;
    width: 80%;

    span {
    font-size: 0.72rem;
    word-break: break-word;
    text-align: justify;
  }

  }

`;

export const Divider = styled.div`
  width: 96%;
  height: 1px;
  background: ${(props) => props.theme.colors.gray3};
  margin: 1rem auto;
`;

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  p {
    font-size: .92rem;
    margin-bottom: 1rem;
  }
  @media(max-width: 720px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto 0;
    width: 80%;
    p {
    font-size: .56rem;
    width: 80%;
    text-align: center;
  }
  }
`;

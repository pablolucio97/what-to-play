import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 368px;
  height: 260px;
  border-radius: 4px;
  margin: -.4rem 1rem 8rem;

  @media(max-width: 1240px){
    width: 640px;
    height: 240px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
  }

  @media(max-width: 720px){
    width: 27px;
    height: 240px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }


`;

export const Img = styled.img`
  width: 365px;
  height: 206px; 
  opacity: .8;
  -webkit-box-reflect: below 0 linear-gradient(to bottom, rgba(0,0,0,0), rgba(0, 0, 0, 0.3));
  
  @media(max-width: 720px){
    width: 264px;
    height: 154px; 
    margin: 1rem;
  }
`;


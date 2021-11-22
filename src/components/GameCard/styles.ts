import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 368px;
  height: 260px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  margin: 1rem;
  transition: all 0.2s ease-in-out;

   &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

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
    width: 278px;
    height: 240px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }


`;

export const Img = styled.img`
  width: 365px;
  height: 206px; 


  
  @media(max-width: 720px){
    width: 274px;
    height: 154px; 
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: 368px;
  height: 120px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray2};


  @media(max-width: 1240px){
    width: 478px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
  }

  @media(max-width: 720px){
    width: 278px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
  }
`;

export const GameTitle = styled.h3`
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 24px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.gray};
  border: 1px  solid ${(props) => props.theme.colors.primary1};
  transform: all 0.2s ease;
  outline: none;

  &:hover {
    background: ${(props) => props.theme.colors.primary1};
    cursor: pointer;
  }


  &:active {
    transform: scale(0.98);
  }
`;

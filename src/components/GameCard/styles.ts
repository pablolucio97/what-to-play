import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.gray};
  margin: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  @media (max-width: 720px) {
    width: 240px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  
`;

export const Img = styled.img`
  width: 365px;
  height: 206px;

  @media (max-width: 720px) {
    width: 100%;
    height: 154px;
  }
`;


export const ButtonsContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`

export const GameTitle = styled.h3`
  font-size: 1rem;
  margin-top: 1rem;
  `;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
  height: 32px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.primary2};
  border: 1px solid ${(props) => props.theme.colors.primary1};
  transition: all .3s ease-in-out;
  outline: none;
  
  &:hover {
    background: ${(props) => props.theme.colors.primary1};
    cursor: pointer;
  }
  
  &:active {
    transform: scale(0.98);
  }
   @media (max-width: 720px) {
    width: 120px;
    height: 32px;
    margin: .24rem auto;
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto 1rem;
  height: 32px;
  color: #fff;
  background: ${(props) => props.theme.colors.secondary2};
  border: 1px solid ${(props) => props.theme.colors.secondary1};
  outline: none;
  transition: all .3s ease-in-out;
  
  &:hover {
    background: ${(props) => props.theme.colors.secondary1};
    cursor: pointer;
  }
  
  &:active {
    transform: scale(0.98);
  }
   @media (max-width: 720px) {
    width: 120px;
    height: 32px;
    margin: .24rem auto;
  }
`;

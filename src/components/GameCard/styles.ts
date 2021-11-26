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


  @media (max-width: 720px) {
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

  @media (max-width: 720px) {
    width: 274px;
    height: 154px;
  }
`;


export const ButtonsContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  padding-top: 1rem;
`

export const GameTitle = styled.h3`
  font-size: 1rem;
  margin-top: 1rem;
  `;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 0 .24rem;
  height: 24px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.gray};
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
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 0 .24rem;
  height: 24px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.gray};
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
`;

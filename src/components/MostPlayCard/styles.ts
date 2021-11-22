import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 368px;
  height: 244.5px;
  border-radius: 4px;
  margin:  .4rem;
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  
  @media (max-width: 1240px) {
    width: 640px;
    display: flex;
    justify-content: center;
    margin: 0 auto 1rem;
    &:after{
      content:'';
      width: 620px;
      height: 100%;
      background: ${props => props.theme.colors.gray};
      margin-top: 1rem;
      border-radius: 0 4px 4px 0;
    }
  }
  
  @media (max-width: 720px) {
    width: 240px;
    display: flex;
    justify-content: center;
    margin-top: -2rem;
    margin: 0 auto -3rem;
  }
  
  `;

export const Img = styled.img`
  width: 365px;
  height: 206px;
  z-index: -1;
  filter: opacity(0.75);
  border-radius: 4px;
  
  @media (max-width: 1240px) {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    border-radius: 4px 0 0  4px;
  }

  @media (max-width: 720px) {
    width: 286px;
    height: 160px;
    margin-top: 0;
    border-radius: 4px;
  }
`;

export const ButtonAddFav = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3rem;
  right: 0.1rem;
  width: 80px;
  height: 24px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.secondary1};
  transform: all 0.2s ease-out;
  border: none;
  outline: none;
  margin: 1rem;
  z-index: 999;

  &:hover {
    background: ${(props) => props.theme.colors.secondary2};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
  &:disabled{
    background: #111;
    cursor: not-allowed;
  }

  @media (max-width: 1240px) {
    bottom: 3rem;
    right: 2.4rem;
  }

  @media (max-width: 720px) {
    bottom: 5rem;
    right: -1rem;
  }
`;

export const ButtonPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5rem;
  right: 0.1rem;
  width: 80px;
  height: 24px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.primary1};
  transform: all 0.2s ease-out;
  border: none;
  outline: none;
  margin: 1rem;
  z-index: 999;

  &:hover {
    background: ${(props) => props.theme.colors.primary2};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 1240px) {
    bottom: 6.4rem;
    right: 2.4rem;
  }
  
    @media (max-width: 720px) {
      bottom: 7rem;
      right: -1rem;
    }

`;



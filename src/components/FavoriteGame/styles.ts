import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  height: 100px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.text};
  margin: 1rem auto;
  padding: 0.4rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    
  }

  @media (max-width: 1240px) {
    width: 600px;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 220px;
    padding: 2rem;
  }
`;

export const Img = styled.img`
  width: 136px;
  height: 77px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 420px;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
    height: 120px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
    height: 120px;
  }
`;

export const GameTitle = styled.h3`
  font-size: 1.2rem;
  margin: 2rem 1rem -1rem;
  @media (max-width: 1240px) {
    font-size: 1rem;
  }
`;
export const ButtonPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 24px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border: 1px  solid ${(props) => props.theme.colors.primary1};
  transform: all 0.2s ease;
  outline: none;
  margin: .2rem 1rem .2rem 1rem;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.07);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonDislike = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 24px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.secondary1};
  background: ${(props) => props.theme.colors.background};
  border: 1px  solid ${(props) => props.theme.colors.secondary2};
  transform: all 0.2s ease;
  outline: none;
  margin: 1rem;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.07);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
  
`;


import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88.4%;
  background: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.text};
  margin: 1rem auto;
  padding: 1rem 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
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
  width: 400px;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
  }
`;

export const GameTitle = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray2};
  margin: 2rem;

`;
export const ButtonPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  margin-bottom: 1rem;
  height: 32px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.primary2};
  border: 1px solid ${(props) => props.theme.colors.primary1};
  transition: all 0.3s ease-in-out;
  outline: none;
  
  &:hover {
    background: ${(props) => props.theme.colors.primary1};
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
  width: 120px;
  margin: 1rem auto;
  height: 32px;
  color: ${(props) => props.theme.colors.gray2};
  background: ${(props) => props.theme.colors.secondary1};
  transition: all 0.3s ease-in-out;
  outline: none;
  
  &:hover {
    background: ${(props) => props.theme.colors.secondary2};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;

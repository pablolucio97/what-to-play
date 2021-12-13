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

  @media (max-width: 180px) {
    width: 640px;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76%;
    padding: 2rem;
    margin: 1rem auto;
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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    display: flex;
    align-items: center;
  }
`;

export const DescriptioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-wrap: break-word;
  width: 640px;

  h4 {
    margin-bottom: 0;
  }

  @media (max-width: 1240px) {
    display: flex;
    align-items: center;
    width: 40%;
  }

  @media (max-width: 720px) {
    width: 80%;
    text-align: center;
  }
`;

export const GameTitle = styled.h4`
  font-size: 1.12rem;
  color: ${(props) => props.theme.colors.secondary1};
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
  @media (max-width: 720px) {
    margin-top: 0.48rem;
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
  @media (max-width: 720px) {
    margin-top: -0.48rem;
  }
`;

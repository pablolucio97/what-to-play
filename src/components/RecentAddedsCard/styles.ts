import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 772px;
  height: 130px;
  padding: 0.4rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray2};
  margin: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  @media (max-width: 1240px) {
    width: 640px;
    height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 720px) {
    width: 278px;
    height: 360px;
    flex-direction: column;
    align-items: center;
    padding-left: .4rem;
  }
`;

export const Img = styled.img`
  width: 182px;
  height: 104px;

  @media (max-width: 1240px) {
    width: 224px;
    height: 124px;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 174px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 368px;
  height: 80px;
  border-radius: 4px;
  @media (max-width: 720px) {
    width: 278px;
    height: 240px;
  }
`;

export const InfoSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 80px;
  align-items: center;
  padding: 0.4rem;
`;

export const GameTitle = styled.h3`
  font-size: 1.1rem;
`;

export const Description = styled.h4`
  font-size: 1rem;
  margin-top: -0.8rem;

  @media (max-width: 1240px) {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.6rem;
  }

  @media (max-width: 720px) {
    font-size: 0.9rem;
    text-align: center;
    padding: 0;
  }

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
  border: 1px solid ${(props) => props.theme.colors.primary1};
  transform: all 0.2s ease;
  outline: none;
  margin: 1rem;

  &:hover {
    background: ${(props) => props.theme.colors.primary1};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;

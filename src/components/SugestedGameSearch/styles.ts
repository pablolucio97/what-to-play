import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 96.2%;
  height: 72px;
  background: ${(props) => props.theme.colors.gray};
  padding: 0.4rem;
  transition: all 0.3s ease;
  margin: 0 auto 1rem;

  &:hover {
    background: ${(props) => props.theme.colors.gray3};
  }

  h3 {
    color: ${(props) => props.theme.colors.gray2};
    font-size: 1rem;
  }

  img {
    width: 72px;
    height: 48px;
    margin: 0.8rem 1rem 1rem;
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  @media (max-width: 720px){
    flex-direction: column;
    padding: 0;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 120px;
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
    height: 24px;
    width: 88px;
    margin-top: .72rem;
    font-size: .68rem;
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  height: 32px;
  width: 120px;
  color: #fff;
  background: ${(props) => props.theme.colors.secondary2};
  border: 1px solid ${(props) => props.theme.colors.secondary1};
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.secondary1};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 720px) {
    height: 24px;
    width: 88px;
    margin-top: .24rem;
    font-size: .68rem;
  }
`;

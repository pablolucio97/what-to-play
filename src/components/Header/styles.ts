import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  background: ${(props) => props.theme.colors.gray};
  padding: 1rem 0.4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary1};
  box-shadow: 0 0 8px #000;
  @media (max-width: 720px) {
    height: 40px;
  }
  `;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

 
  
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 0.4rem;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary2};
  margin-left: 1rem;

  @media (max-width: 720px) {
    font-size: 1rem;
    margin-top: -0.2rem;
    margin-left: 0;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 0.4rem;
  }
`;

export const Search = styled.input`
  width: 120px;
  height: 12px;
  background: ${(props) => props.theme.colors.gray2};
  border-radius: 4px;
  padding: 0.3rem 0.4rem;
  border: none;
  outline: none;
  margin-left: 1rem;
`;

export const Linker = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  transition: all 0.3s ease-in-out;
  margin: 0 1rem;
  font-size: 0.8rem;
  text-decoration-line: none;
  color: ${(props) => props.theme.colors.secondary2};
  border-radius: 4px;

  &:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  transition: all 0.3s ease-in-out;
  margin: 0 1rem;
  font-size: 0.8rem;
  text-decoration-line: none;
  color: ${(props) => props.theme.colors.gray2};
  border-radius: 4px;
  background: none;
  border: none;

  &:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
`;


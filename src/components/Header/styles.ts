import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5rem;
  }
`;
export const NewTransactionButton = styled.button`
  padding: 0.9rem 1.25rem;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["pink-500"]};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${(props) => props.theme["pink-600"]};
  }
`;

import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin: 0 0 2rem;

  input {
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["white"]};

    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: none;

    ::placeholder {
      background-color: ${(props) => props.theme["gray-500"]};
    }
  }
  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.875rem 2rem;
    border: 1px solid ${(props) => props.theme["pink-500"]};
    background-color: transparent;
    color: ${(props) => props.theme["pink-500"]};
    font: bold 1rem "Roboto", sans-serif;
    cursor: pointer;
    border-radius: 6px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["pink-500"]};
      color: ${(props) => props.theme["white"]};
      transition: background-color 0.3s;
    }
  }
`;

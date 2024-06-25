import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  position: fixed;
  background-color: ${(props) => props.theme["gray-800"]};

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
  input {
    padding: 1rem;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }
  button[type="submit"] {
    padding: 1rem;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme["pink-500"]};
    color: ${(props) => props.theme["white"]};
    font: bold 1rem "Roboto", sans-serif;
    cursor: pointer;
    transition: background 0.3s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["pink-600"]};
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
interface TransactionTypeButtonProps {
  variant?: "income" | "outcome";
}
export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme["gray-700"]};
  border: none;
  padding: 1rem;
  border-radius: 6px;
  color: ${(props) => props.theme["white"]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }
  &[data-state="unchecked"] {
    &:hover {
      background: ${(props) => props.theme["gray-600"]};
    }
  }
  &[data-state="checked"] {
    color: ${(props) => props.theme.white};

    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

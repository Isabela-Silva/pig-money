import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 0 2rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  margin-top: -5rem;
`;
interface SummaryCardProps {
  variant?: "income" | "green" | "red";
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme["gray-600"]};
  padding: 1.5rem;
  border-radius: 6px;

  header {
    display: flex;
    justify-content: space-between;
  }
  header button {
    border: none;
    background-color: transparent;
  }

  ${(props) =>
    props.variant === "income" &&
    css`
      background: ${(props) => props.theme["green-500"]};
    `}

  svg {
    color: ${(props) =>
      props.variant === "green"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }
`;

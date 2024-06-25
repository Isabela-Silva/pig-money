import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 0 2rem;
  margin: 4rem auto 0;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
      padding: 1.25rem 2rem;
      background-color: ${(props) => props.theme["gray-700"]};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`;

interface PriceHiglightProps {
  variant: "income" | "outcome";
}

export const PriceHiglight = styled.span<PriceHiglightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

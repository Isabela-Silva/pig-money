import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const summary = useSummary();
  return (
    <SummaryContainer>
      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <button>
            <ArrowCircleUp size={30} />
          </button>
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard variant="red">
        <header>
          <span>Saídas</span>
          <button>
            <ArrowCircleDown size={30} />
          </button>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="income">
        <header>
          <span>Total</span>
          <button>
            <CurrencyDollar size={30} color="white" />
          </button>
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

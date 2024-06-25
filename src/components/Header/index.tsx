import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/logoapp.png";
import { NewTransactionsModal } from "../NewTransactionsModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logo} alt="" />
          <h2> Pig Money </h2>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}

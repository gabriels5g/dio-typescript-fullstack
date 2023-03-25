import { BankAccount } from "./bank-account";

export class CompanyAccount extends BankAccount {
  constructor(name: string, AccountNumber: number) {
    super(name, AccountNumber);
  }

  getLoan() {
    console.log("você fez um empréstimo");
  }
}

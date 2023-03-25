import { BankAccount } from "./bank-account";

export class PeopleAccount extends BankAccount {
  doc_id: number;
  constructor(doc_id: number, name: string, AccountNumber: number) {
    super(name, AccountNumber);
    this.doc_id = doc_id;
  }
}

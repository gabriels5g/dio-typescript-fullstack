export abstract class BankAccount {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit() {
    console.log("você depositou");
  }

  withdraw() {
    console.log("você sacou");
  }

  getBalance() {
    console.log("você consultou o saldo");
  }
}

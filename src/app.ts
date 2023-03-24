abstract class Account {
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

  getValue() {
    console.log("você consultou o saldo");
  }
}
class PeopleAccount extends Account {
  doc_id: number;
  constructor(doc_id: number, name: string, AccountNumber: number) {
    super(name, AccountNumber);
    this.doc_id = doc_id;
  }
}

const peopleAccount = new PeopleAccount(2712, "Gabriel", 1);
console.log(peopleAccount);

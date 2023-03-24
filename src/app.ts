class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit() {
    return "você depositou";
  }

  withdraw() {
    return "você sacou";
  }
}

const newAccount = new Account("Gabriel", 1);
newAccount.withdraw();

console.log(newAccount);

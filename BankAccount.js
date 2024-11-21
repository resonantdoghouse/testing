class BankAccount {
  constructor() {
    this.balance = 0;
    this.isFrozen = false;
  }

  deposit(depositAmount) {
    this.balance += depositAmount;
  }
}

export default BankAccount;

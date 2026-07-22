class Bank {
  // Private Properties and Methods
  #percentageInProfit = 1.5;

  #calculatePercentage() {
    console.log(
      `Your income will be calculated by ${this.#percentageInProfit} * ${this.balance}`
    );
  }

  // Static Properties and Methods
  static bankCode = "CBIN0078";

  static getBankCode() {
    return `Bank Code: ${this.bankCode}`;
  }

  constructor(name, mobile, email, amount = 0) {
    this.__accountHolderName = name;
    this.mobile = mobile;
    this._email = email;
    this.balance = amount;
  }

  set email(emailValue) {
    this._email = emailValue;
  }

  get email() {
    return this._email;
  }

  deposit(amount) {
    this.balance += Number(amount);

    console.log(
      `Amount of Rs. ${amount} is Deposited by ${this.__accountHolderName}`
    );

    console.log(this.sendDepositEmail(amount));
  }

  checkBalance() {
    console.log(`Your balance is Rs. ${this.balance}`);
  }

  withdraw(amount) {
    if (amount !== undefined && amount !== 0) {
      if (this.balance < amount) {
        console.log("Insufficient Balance");
        console.log(this.insufficientFundEmail(amount));
      } else {
        this.balance -= Number(amount);

        console.log(`Amount Withdrawn : Rs. ${amount}`);

        console.log(this.sendWithdrawEmail(amount));
      }
    } else {
      console.log("Please Enter amount to Withdraw");
    }
  }

  getPercentage() {
    console.log(`The Percentage is ${this.#percentageInProfit}`);
    this.#calculatePercentage();
  }

  checkBankProfile() {
    console.log(`Account Holder = ${this.__accountHolderName}`);
    console.log(`Mobile No. = ${this.mobile}`);
    console.log(`Email = ${this.email}`);
    console.log(`Account Balance = Rs. ${this.balance}`);
  }
}

// ================= Object Prototype Methods =================

Object.prototype.sendDepositEmail = function (amount) {
  return `
To ${this.__accountHolderName},

This is to inform you that an amount of Rs.${amount} has been deposited.

Available Balance: Rs.${this.balance}
`;
};

Object.prototype.sendWithdrawEmail = function (amount) {
  return `
To ${this.__accountHolderName},

This is to inform you that an amount of Rs.${amount} has been withdrawn.

Available Balance: Rs.${this.balance}
`;
};

Object.prototype.insufficientFundEmail = function (amount) {
  return `
To ${this.__accountHolderName},

Transaction Failed!

You tried to withdraw Rs.${amount},
but your available balance is only Rs.${this.balance}.
`;
};

// ================= Driver Code =================

let obj1 = new Bank(
  "Raj",
  "5959561000",
  "raj45@gmail.com",
  522000
);

obj1.checkBankProfile();

console.log("------------------------");

obj1.deposit(9000);

console.log("------------------------");

obj1.withdraw(10000);

console.log("------------------------");

obj1.withdraw(600000);

console.log("------------------------");

obj1.checkBalance();

console.log("------------------------");

obj1.getPercentage();

console.log("------------------------");

console.log(Bank.getBankCode());
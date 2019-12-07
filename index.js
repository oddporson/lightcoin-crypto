/*
Allow multiple accounts to be created
Each account can have many transactions
Allow withdrawals and deposits into accounts
Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
Allow us to retrieve the current balance of the account at any time
Don't allow withdrawals that exceed the remaining balance of the account
*/
// user's balanace
let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}

class Withdrawal { // this is just a class. a blueprint. not yet built
  // Pass in the account that the withdrawal this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  // Update the balance in the account
  commit() {
    this.account.balance -= this.amount; // balance = balance - this.amount
  }

}

class Deposit {
  // Pass in the account that the deposit this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  // Update the balance in the account
  commit() {
    this.account.balance += this.amount; // balance = balance + this.amount
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
// these are considered instances. meaning that these are physical cash in hand being withdraw from the bank machine.

const myAccount = new Account("snow-patrol");
console.log(myAccount);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);


console.log('Balance:', balance);

/// testing for git push

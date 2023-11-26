// "using strict"
function BankAccount(accountNumber, name, type, balance){
    this.accountNumber = accountNumber
    this.name = name
    this.type = type
    this.balance = balance
    this.active = true
    this.deposite = (amount) => {
        this.balance += amount
        console.log("Succesful deposite and current balance is  ", this.balance);
    }  
    this.withdraw = (amount) => {
        if(this.balance >= amount){
            this.balance -= amount 
            console.log(`successful withdraw amount is ${amount} and current balance is ${this.balance}`);
        } else{
            console.log("In this account have not suffient balance and current balance is ",this.balance);
        }
    }
    this.checkBalance = () =>{
        console.log(`this account ${this.accountNumber} have current balance is ${this.balance}`);
    }
    this.isActive = () =>{
        return this.active
    }

}
let ac1 = new BankAccount(123445,"Suraj","Saving",500)
let ac2 = new BankAccount(123445,"vijay","Saving",1500)
let ac3 = new BankAccount(123445,"Raj","Saving",2500)

ac1.deposite(1000)
ac1.withdraw(100)
ac2.deposite(1500)
ac2.withdraw(1000)
ac3.deposite(2000)
ac3.withdraw(1700)

// check active status
console.log(`ac1 is active : ${ac1.isActive()}`);
console.log(`ac2 is active : ${ac2.isActive()}`);
console.log(`ac3 is active : ${ac3.isActive()}`);

// check total balance
function getTotalBalance() {
    const accounts = [ac1, ac2, ac3];
    let totalBalance = 0;

    accounts.map((account) =>{
        if(account.isActive()){
            totalBalance += account.balance
            console.log(account)
        }
    })
    return totalBalance;
}
// Test getTotalBalance function
console.log(`Total balance of all active accounts: ${getTotalBalance()}`);

//Practica 3 de la Lesson 3 Typescript 1

class BankAccount{
    //Propiedades
    private accountNumber: string;
    protected balance: number;
    
    //Constructor y asignacion
    constructor(accountNumber: string, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    //Metodos
    public getAccountNumber(): string{
        return this.accountNumber;
    }

    public getBalance(): number{
        return this.balance;
    }
}

const bankAccount = new BankAccount("283248SAWQD", 30000);
console.log("El numero de cuenta es: ", bankAccount.getAccountNumber());
console.log("El saldo de la cuenta es: ", bankAccount.getBalance());
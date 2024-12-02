/*
DESAFIO
[ x ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
- Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
- Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ x ] Todos os atributos de qualquer conta devem ser privados

[ x ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ x ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.
*/

export abstract class DioAccount {
  // Atributes
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  // Constructor
  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // Setters
  protected setBalance = (val: number): void => {
    this.balance = val
  } 

  // Getters
  public getName = (): string => {
    return this.name
  }
  protected getBalance = (): number => {
    return this.balance
  }

  // Methods
  public deposit = (val: number): void => {
    if(this.validateStatus()){
      this.balance += val
      console.log(`${this.name} depositou ${val} e o saldo é ${this.balance}`)
    }
  }
  public withdraw = (val: number): void => {
    if(this.balance < val) {
      console.log(`Saldo insuficiente! ${this.name} tentou sacar ${val} mas só tem ${this.balance} de saldo`)
    } else if(this.validateStatus()){
      this.balance -= val
      console.log(`${this.name} sacou ${val} e o saldo é ${this.balance}`)
    }
  }
  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}

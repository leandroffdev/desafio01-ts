import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  // Atributes
  private doc_id: number
  
  // Constructor
  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }
}
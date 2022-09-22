export interface ITransaction {
  type: TTransactionType
  _id: string;
  amount: number;
  name: { 
    first: string;
    last: string;
  }
  company: string;
  email: string;
  phone: string;
  address: string;
}

export type TTransactionType = "income" | "outcome" | "loan" | "investment";
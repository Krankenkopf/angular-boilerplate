import { Injectable } from '@angular/core';

import { ITransaction } from '../models';
import * as TRANSACTIONS from 'transactions.json'

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  cached: { total: number; data: ITransaction[] } | null = null;

  constructor() { }

  getTransactions() {

    if (this.cached) return this.cached;

    let data: ITransaction[] = [];
    const transactions = TRANSACTIONS;

    for (let i = 0; i < transactions.data.length; i++) {
      data.push({ 
        ...transactions.data[i], 
        type: transactions.data[i].type as ITransaction["type"], 
        amount: ((Math.floor(Math.random() * 400000) + 500) / 100) 
      })
    }
    
    this.cached = { total: transactions.total, data};
    return this.cached
  }
}

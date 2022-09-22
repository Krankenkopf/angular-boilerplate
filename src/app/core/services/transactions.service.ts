import { Injectable } from '@angular/core';

import { ITransaction } from '../models';
import * as TRANSACTIONS from 'transactions.json'

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactions() {
    let data: ITransaction[] = [];
    const transactions = TRANSACTIONS;

    for (let i = 0; i < transactions.data.length; i++) {
      data.push({ ...transactions.data[i], type: transactions.data[i].type as ITransaction["type"], amount: 400 })
    }

    return { total: transactions.total, data};
  }
}

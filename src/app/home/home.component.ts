import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  objectKeys = Object.keys as <T extends Object>(obj: T) => Array<keyof T>;

  total = 0;
  titles = {
    income: "Income",
    outcome: "Outcome",
    loan: "Loans",
    investment: "Investments",
  };
  amounts = {
    income: 0,
    outcome: 0,
    loan: 0,
    investment: 0,
  };
  navigatorTabs = {
    income: 1,
    outcome: 2,
    loan: 3,
    investment: 4,
  };

  constructor(private transactionsService: TransactionsService) { }

  getTransactionsMeta(): void {
    const transactions = this.transactionsService.getTransactions();
    this.total = transactions.total;
    transactions.data.forEach(entry => {
      switch(entry.type) {
        case 'income':
          this.amounts.income++;
          break;
        case 'outcome':
          this.amounts.outcome++;
          break;
        case 'loan':
          this.amounts.loan++;
          break;
        case 'investment':
          this.amounts.investment++;
          break;
        default: break;
      }
    })
  }

  ngOnInit(): void {
    this.getTransactionsMeta();
  }

}

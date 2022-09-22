import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransaction, TTransactionType } from '../core/models';
import { TransactionsService } from '../core/services';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  tabIndexes = Object
  .values(NAV_TABS)
  .reduce(
    (acc, el, i, arr) => (i >= arr.length / 2 ? [...acc, el as NAV_TABS] : acc),
    [] as NAV_TABS[],
  )
  .map(entry => entry);

  tabTitles = {
    [NAV_TABS.income]: "Income",
    [NAV_TABS.outcome]: "Outcome",
    [NAV_TABS.loan]: "Loans",
    [NAV_TABS.investment]: "Investments",
  };

  listByCurrentType: ITransaction[] = [];

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private transactionsService: TransactionsService) { }

  getTransactions(type: TTransactionType): void {
    const transactions = this.transactionsService.getTransactions();
    this.listByCurrentType = transactions.data.filter(entry => entry.type === type)
  }

  ngOnInit(): void {
    let queryTab = this.route.snapshot.queryParams['tab'];
    if (!queryTab) {
      queryTab = 0;
      this.router.navigate(['navigator'], { queryParams: { tab: queryTab } });
    }
    this.getTransactions(NAV_TABS[queryTab] as TTransactionType)

    this.route.queryParams.subscribe(params => {
      this.getTransactions(NAV_TABS[params['tab']] as TTransactionType)
    });
  }
}

export enum NAV_TABS {
  income,
  outcome,
  loan,
  investment
}
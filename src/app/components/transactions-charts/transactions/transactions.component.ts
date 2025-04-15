import { Component, Input } from '@angular/core';
import { TransactionComponent } from "./transaction/transaction.component";
import {Transacao} from '../../../models/transacao.model';
import{ ChartsComponent } from '../charts/charts.component'


@Component({
  selector: 'app-transactions',
  imports: [TransactionComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  @Input() transacao: Transacao[] = [];
}

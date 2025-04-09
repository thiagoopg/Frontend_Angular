import { Component } from '@angular/core';
import { TransactionComponent } from "./transaction/transaction.component";
import {Transacao} from '../../../models/transacao.model';

@Component({
  selector: 'app-transactions',
  imports: [TransactionComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transacao: Transacao[] = [
    { nome: "Salário", tipo: true, preco: 5000, data: new Date("2025-04-01") },
    { nome: "Aluguel", tipo: false, preco: 1200, data: new Date("2025-04-05") },
    { nome: "Conta de Luz", tipo: false, preco: 300, data: new Date("2025-04-10") },
    { nome: "Freelance", tipo: true, preco: 1500, data: new Date("2025-04-15") }
  ];
}

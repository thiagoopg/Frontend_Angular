import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//components for the app
import { MenuComponent } from "./components/menu/menu.component";
import { BigChartComponent } from "./components/transactions-charts/big-chart/big-chart.component";
import { ChartsComponent } from "./components/transactions-charts/charts/charts.component";
import { TransactionsComponent } from "./components/transactions-charts/transactions/transactions.component";
import { Conta } from './models/conta.model';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuComponent,
    BigChartComponent,
    ChartsComponent,
    TransactionsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Site';
  id:number = 1;
  contas: Conta[] = [
    new Conta(1, '50% Casa', [
      { nome: "aluguel", preco: 1200, tipo: false, data: new Date("2025-04-01") },
      { nome: "energia", preco: 250, tipo: false, data: new Date("2025-04-03") },
      { nome: "água", preco: 180, tipo: false, data: new Date("2025-04-04") },
      { nome: "manutenção", preco: 320, tipo: false, data: new Date("2025-04-06") },
      { nome: "da mãe", preco: 600, tipo: true, data: new Date("2025-04-08") },
      { nome: "ajuda do tio", preco: 400, tipo: true, data: new Date("2025-04-09") },
      { nome: "devolução condomínio", preco: 150, tipo: true, data: new Date("2025-04-11") }
    ]),
    new Conta(2, '20% Lazer', [
      { nome: "cinema", preco: 50, tipo: false, data: new Date("2025-04-02") },
      { nome: "Netflix", preco: 40, tipo: false, data: new Date("2025-04-05") },
      { nome: "viagem", preco: 800, tipo: false, data: new Date("2025-04-07") },
      { nome: "da grabryela", preco: 100, tipo: true, data: new Date("2025-04-08") },
      { nome: "Gasolina", preco: 120, tipo: false, data: new Date("2025-04-09") },
      { nome: "bônus empresa", preco: 250, tipo: true, data: new Date("2025-04-10") },
      { nome: "presente de aniversário", preco: 200, tipo: true, data: new Date("2025-04-12") }
    ]),
    new Conta(3, '30% Estudos', [
      { nome: "curso online", preco: 300, tipo: false, data: new Date("2025-04-01") },
      { nome: "livros", preco: 200, tipo: false, data: new Date("2025-04-03") },
      { nome: "fone", preco: 130, tipo: false, data: new Date("2025-04-04") },
      { nome: "bolsa de estudos", preco: 500, tipo: true, data: new Date("2025-04-05") },
      { nome: "materiais", preco: 90, tipo: false, data: new Date("2025-04-06") },
      { nome: "reembolso inscrição", preco: 100, tipo: true, data: new Date("2025-04-07") },
      { nome: "ajuda do pai", preco: 300, tipo: true, data: new Date("2025-04-10") }
    ])
  ];
}

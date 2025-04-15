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
  Contas: Conta[] = [
      new Conta(1,'50% Casa', [
        { nome: "chá", preco: 10, tipo: false, data: new Date("2025-04-01") },
        { nome: "carne", preco: 102, tipo: false, data: new Date("2025-04-01") },
        { nome: "água", preco: 300, tipo: false, data: new Date("2025-04-01") }
      ]),
      new Conta(2,'20% Lazer', [
        { nome: "da grabryela", preco: 100, tipo: true, data: new Date("2025-04-01") },
        { nome: "água", preco: 300, tipo: false, data: new Date("2025-04-01") }
      ]),
      new Conta(3,'30% Estudos', [
        { nome: "fone", preco: 130, tipo: false, data: new Date("2025-04-01") },
        { nome: "água", preco: 300, tipo: false, data: new Date("2025-04-01") }
      ])
    ];
}

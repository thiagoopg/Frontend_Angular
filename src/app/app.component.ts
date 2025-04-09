import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//components for the app
import { MenuComponent } from "./components/menu/menu.component";
import { BigChartComponent } from "./components/transactions-charts/big-chart/big-chart.component";
import { ChartsComponent } from "./components/transactions-charts/charts/charts.component";
import { TransactionsComponent } from "./components/transactions-charts/transactions/transactions.component";

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
}

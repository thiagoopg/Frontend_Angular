import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conta } from '../../../models/conta.model';

import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-charts',
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  @Output() id = new EventEmitter<number>();
  @Input() minhasContas!: Conta[];

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',           // 📌 Tipo do gráfico
      backgroundColor: 'transparent', // 🎨 Fundo transparente
    },
    title: {
      text: undefined        // ❌ Sem título
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,       // 🖱️ Permite clicar/destacar
        cursor: 'pointer',            // 🖱️ Cursor ao passar
      }
    },
    legend: {
      enabled: false // ❌ Sem legenda separada
    },
    credits: {
      enabled: false // ❌ Remove "highcharts.com"
    },
    series: [{
      type: 'pie',
      name: 'Distribuição',
      data: [
        { name: 'Customer Support', y: 21.3, color: '#4BC0C0' },
        { name: 'Development', y: 18.7, color: '#7E57C2' },
        { name: 'Sales', y: 20.2, color: '#4CAF50' },
        { name: 'Marketing', y: 14.2, color: '#FF7043' },
        { name: 'Other', y: 25.6, color: '#5C6BC0' }
      ]
    }]
  };


  idButton(id:number){
    this.id.emit(id-1);
  }
}
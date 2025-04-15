import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { Conta } from '../../../models/conta.model';


@Component({
  selector: 'app-big-chart',
  imports: [HighchartsChartModule],
  templateUrl: './big-chart.component.html',
  styleUrl: './big-chart.component.css'
})
export class BigChartComponent implements OnChanges {
  @Input() conta!: Conta;
  tipoDeTransacaoDoGrafico:boolean = true;
  tipoBaseadoNoBoolean:string = "Receitas";
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  chartOptions: Highcharts.Options = {};

  ngOnChanges(): void {
    this.chartOptions = {
      chart: { type: 'pie' },
      title: { 
        text:  this.tipoBaseadoNoBoolean=this.tipoDeTransacaoDoGrafico?'Receitas':'Despesas',
        align: 'center',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>R$ {point.y:.2f}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>'
          }
        }
      },
      series: [{
        name: 'Valor',
        type: 'pie',
        colorByPoint: true,
        data: this.conta.pegarTodosOsNomesDeTransacoes(this.tipoDeTransacaoDoGrafico).map((nome, i) => ({
          name: nome,
          y: this.conta.pegarTodosOsPrecosDeTransacoes(this.tipoDeTransacaoDoGrafico)[i]
        }))
      } as Highcharts.SeriesPieOptions],
      credits: { enabled: false }
    };

    this.updateFlag = true;
  }
  
  trocarValor() {
    console.log(this.tipoDeTransacaoDoGrafico);
    this.tipoDeTransacaoDoGrafico = this.tipoDeTransacaoDoGrafico ? false : true;
    this.forcarMudanca();
  }
  forcarMudanca() {
    this.ngOnChanges();
  }
}

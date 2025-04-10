import { 
  AfterViewInit, //Para usar o método NgAfterViewInit
  Component, //@Component, biblioteca padrão para Standalone = True
  ElementRef, //Referenciar um elemento do HTML
  ViewChild //Usar o @ViewCHild
} from '@angular/core';
import {
  ApexAxisChartSeries, 
  ApexChart, 
  ApexXAxis, 
  ApexDataLabels,
  ApexTitleSubtitle, 
  ApexStroke, 
  ApexGrid, 
  NgApexchartsModule, 
  ChartComponent
} from 'ng-apexcharts';
//---------------------------------------------------------------------------------------------------
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
//---------------------------------------------------------------------------------------------------
@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule,],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
//---------------------------------------------------------------------------------------------------
export class ChartComponent_ implements AfterViewInit {

  //Variáveis
  public chartOptions: ChartOptions;
  @ViewChild('chartWrapper') chartWrapper!: ElementRef;
  @ViewChild('chart') chartComponent!: ChartComponent;
  public graficoPronto: boolean = false;

  public valores:number[]=[];
  public categorias:string[]=[];
  public title:string="";
  //Construtor com o gráfico
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Money',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 203, 23]
        }
      ],
      chart: {
        height: "auto",
        width: "100%", // começa com 100%
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Gasto totais por mês',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      }
    };
  }


  //Método que arruma o tamanho do gráfico
  ngAfterViewInit(): void {
    const alturaPai = this.chartWrapper.nativeElement.parentElement.offsetHeight;
    let largura = 100;
    let incremento = 50;

    const ajuste = () => {
      const alturaChart = this.chartWrapper.nativeElement.offsetHeight;

      if (alturaChart <= alturaPai) {
        largura += incremento;
      } else {
        largura -= incremento;
        incremento = incremento / 2;

        if (incremento < 0.5) {
          this.graficoPronto = true;
          return;
        }
        largura += incremento;
      }

      this.chartOptions.chart.width = `${largura}%`;
      this.chartComponent.updateOptions(this.chartOptions, true, true);

      setTimeout(ajuste, 50);
    };

    setTimeout(ajuste, 100);
  }
}
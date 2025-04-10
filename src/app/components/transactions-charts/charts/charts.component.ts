import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChartComponent_ } from './chart/chart.component';


@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, ChartComponent_],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements AfterViewInit{
  public pronto:boolean = false;
  public graficoProntos:boolean[] = [];
  @ViewChildren(ChartComponent_) filhos!: QueryList<ChartComponent_>;
  ngAfterViewInit(){
    
    const ajuste = () => {
      this.pronto = this.todosGraficosFilhosProntos() == true?true:false
    setTimeout(ajuste, 50);
    };
    setTimeout(ajuste, 100);
  }
  todosGraficosFilhosProntos():boolean{
    return this.filhos.toArray().every(filhos => filhos.graficoPronto === true);
  }
}

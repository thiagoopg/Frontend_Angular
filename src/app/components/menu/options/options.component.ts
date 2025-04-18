import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-options',
  imports: [LucideAngularModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
@Input() name: string = '';
@Input() icon: string = 'chart-pie';
@Input() ativo: boolean = false;

pegarNome() {
  return this.name || 'opção';
}
pegarIcon(){
  return this.icon;
}

}

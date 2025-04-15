import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-options',
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
@Input() name: string = '';
@Input() image: string = 'circle';
@Input() ativo: boolean = false;

pegarNome() {
  return this.name || 'opção';
}
pegarImagem(){
  return this.image;
}

}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-options',
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  name = input('Default');
  image = input('https://images.freeimages.com/image/previews/937/geosteer-magnetic-png-5691080.png');
}

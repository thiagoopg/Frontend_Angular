import { Component } from '@angular/core';
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: 'app-menu',
  imports: [
    OptionsComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}

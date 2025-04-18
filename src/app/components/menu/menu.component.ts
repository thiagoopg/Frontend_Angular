import { Component } from '@angular/core';
import { OptionsComponent } from "./options/options.component";

import { LucideAngularModule, ChartPie } from 'lucide-angular';


@Component({
  selector: 'app-menu',
  standalone:true,
  imports: [
    OptionsComponent,
    LucideAngularModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}

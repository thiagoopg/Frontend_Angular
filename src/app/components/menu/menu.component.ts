import { Component } from '@angular/core';
import { OptionsComponent } from "./options/options.component";
import { LucideAngularModule } from 'lucide-angular';
import { ContaService } from '../../services/conta.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone:true,
  imports: [
    OptionsComponent,
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  constructor(public service:ContaService){}
}

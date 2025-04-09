import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {Transacao} from '../../../../models/transacao.model';

@Component({
  selector: 'app-transaction',
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  @Input() transacoes: Transacao[] = [];
}

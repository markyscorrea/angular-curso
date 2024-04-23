import { Component } from '@angular/core';
import { MeuPrimeiroComponent } from '../meu-primeiro/meu-primeiro.component';

@Component({
  selector: 'app-meu-primeiro2',
  standalone: true,
  imports: [MeuPrimeiroComponent],
  templateUrl: './meu-primeiro2.component.html',
  styleUrl: './meu-primeiro2.component.scss'
})
export class MeuPrimeiro2Component {

}

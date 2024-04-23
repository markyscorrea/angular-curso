import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ouput-property',
  standalone: true,
  imports: [],
  templateUrl: './ouput-property.component.html',
  styleUrl: './ouput-property.component.scss'
})
export class OuputPropertyComponent {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}

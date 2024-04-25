import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CamelCasePipe } from '../pipes/camel-case.pipe';

@Component({
  selector: 'app-exemplos-pipes',
  standalone: true,
  imports: [
    CommonModule,
    CamelCasePipe
  ],
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss'
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios',
    rating: 4.68524,
    numeroPaginas: 408,
    preco: 55.19,
    dataLancamento: new Date(2012, 6, 24),
    url: 'https://a.co/d/8jhJn7q'
  }
}

import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../diretivas/fundo-amarelo.directive';
import { HighlightDirective } from '../diretivas/highlight.directive';
import { HighlightcolorDirective } from '../diretivas/highlightcolor.directive';
import { NgIf } from '@angular/common';
import { NgelseDirective } from '../diretivas/ngelse.directive';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [FundoAmareloDirective, HighlightDirective, HighlightcolorDirective, NgIf, NgelseDirective],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.scss'
})
export class DiretivasCustomizadasComponent {

  cursos: string[] = ['Angular'];
  mostrarOuEsconder: boolean = true;

  mostrarOuEsconderCursos(){
    this.mostrarOuEsconder = !this.mostrarOuEsconder;
  }

}

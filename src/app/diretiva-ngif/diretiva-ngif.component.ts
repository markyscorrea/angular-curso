import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [NgIf],
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.scss'
})
export class DiretivaNgifComponent {
  cursos: string[] = ['Angular'];
  mostrarOuEsconder: boolean = true;

  mostrarOuEsconderCursos(){
    this.mostrarOuEsconder = !this.mostrarOuEsconder;
  }
}

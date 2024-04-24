import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  standalone: true,
  imports: [NgClass],
  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.scss'
})
export class DiretivaNgclassComponent {
  meuFavorito: boolean = false;

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }
}

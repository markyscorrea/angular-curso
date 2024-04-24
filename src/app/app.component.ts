import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { NgIf } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MeuPrimeiro2Component,
    DataBindingComponent,
    CicloComponent,
    NgIf,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-curso';
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }
}

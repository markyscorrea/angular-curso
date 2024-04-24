import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.scss'
})
export class DiretivaNgforComponent {
  cursos: string[] = ['Angular 2+', 'NestJS', 'AWS'];
}

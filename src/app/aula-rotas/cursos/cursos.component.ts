import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  
  cursos: any[] = [];

  constructor(private cursosService: CursosService){}

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }
}

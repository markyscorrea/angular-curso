import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  cursos?: string[] = [];
  cursosService?: CursosService;

  constructor(_cursosService: CursosService){
    this.cursosService = _cursosService;
  }

  ngOnInit(){
    this.cursos = this.cursosService?.getCursos();
  }

  onAddCurso(curso: string){
    this.cursosService?.addCurso(curso);
  }

}

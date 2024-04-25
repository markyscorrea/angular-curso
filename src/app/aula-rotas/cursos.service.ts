import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Node JS'},
      {id: 3, nome: 'Nest JS'},
      {id: 4, nome: 'Meta ADS'},
      {id: 5, nome: 'Git'}
    ]
  }

  getCurso(id: number){
    let listaCursos = this.getCursos();
    for (let c = 0; c < listaCursos.length; c++) {
      const curso = listaCursos[c];
      if(curso.id == id){
        return curso;
      }
    }
    return null;
  }
}

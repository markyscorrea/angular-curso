import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CursosService {

    private cursos: string[] = ['Angular 17', 'NodeJS', 'Bootstrap'];

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
    }
}
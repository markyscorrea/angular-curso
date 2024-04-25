import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent {
  curso: any = '';
  id?: any;

  constructor(
    private cursoService: CursosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');

    this.curso = this.cursoService.getCurso(this.id);
  }
}

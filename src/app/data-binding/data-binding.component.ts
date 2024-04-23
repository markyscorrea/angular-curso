import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { OuputPropertyComponent } from '../ouput-property/ouput-property.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule,
    InputPropertyComponent,
    OuputPropertyComponent
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  
  url: string = 'markyscorrea.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://fastly.picsum.photos/id/499/200/300.jpg?hmac=KWCVeuvGZEdEyxpon_0lUlQ2hJzA3Tli3AQTLM5RLXA'
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  pessoa: any = {
    nome: 'markys',
    idade: 30
  };
  nomeDoCurso: string = "Angular";
  valorInicial: number = 10;

  constructor(){

  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Clicado com sucesso.')
  }

  onKeyUp(e: KeyboardEvent){
    //console.log((<HTMLInputElement>e.target).value)
    //console.log(e.key)
    this.valorAtual = (<HTMLInputElement>e.target).value
  }

  salvarValor(e: any){
    this.valorSalvo = (<HTMLInputElement>e.target).value;
  }

  salvarComClique(v: string){
    this.valorSalvo = v;
  }

  isMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(e: any){
    console.log(e.novoValor)
  }
}

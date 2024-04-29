import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarrinhoService } from '../compras/carrinho.service';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent {
  title = 'angular-observables';
  inputProduto = '';

  carrinhoQuantidade: any = '';

  // EXEMPLO PROMISE
  // private timer = new Promise<string>((res, rej) => {
  //   console.log('Promise Iniciada!')
  //   setTimeout(() => {
  //     console.log('Promise Resolvida!')
  //   }, 3000);
  // })
  // EXEMPLO OBSERVABLE
  // private timer$ = new Observable<string>(sub => {
  //   sub.next
  //   console.log('Observable Iniciado!')
  //   setTimeout(() => {
  //     sub.next('Observable Resolvido!');
  //   }, 3000);
  // })

  constructor(private carrinhoService: CarrinhoService){}

  ngOnInit(): void {
    // EXEMPLO PROMISE
    // this.timer.then(value => {
    //   console.log(value);
    // })
    // EXEMPLO OBSERVABLE
    //this.timer$.subscribe(value => console.log(value));
  }

  adicionarProduto() {
    this.carrinhoService.adicionarProduto(this.inputProduto);
    this.inputProduto = '';
    //this.carrinhoQuantidade = this.carrinhoService.retornaCarrinhoQtd();
  }

}

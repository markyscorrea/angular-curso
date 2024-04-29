import { Injectable } from '@angular/core';
import { Compra } from './carrinho/carrinho.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: Compra[] = [];

  private produtoAdicionado$ = new BehaviorSubject<number>(0);

  constructor() { }

  adicionarProduto(prod: string){

    const produtoCompra: Compra = {
      produto: prod,
      id: this.carrinho.length + 1
    }

    this.carrinho.push(produtoCompra);
    this.produtoAdicionado$.next(this.carrinho.length);
    console.log(this.carrinho);
  };

  obterQuantidadeCarrinho(){
    return this.produtoAdicionado$.asObservable();
  }
}

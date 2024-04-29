import { Component, Input } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {

  qtdeCarrinho$ = this.carrinhoService.obterQuantidadeCarrinho();
  //qtdeProdutos: number = 0;

  //@Input()
  //qtd: number = 0;

  // sub = new Subscription();

  constructor(private carrinhoService: CarrinhoService) {
    // const subCarrinho = this.qtdeCarrinho$.subscribe(v => {
    //   console.log('valor emitido', v)
    //   this.qtdeProdutos = v
    // });

    // this.sub.add(subCarrinho);
  }

  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  // }

}

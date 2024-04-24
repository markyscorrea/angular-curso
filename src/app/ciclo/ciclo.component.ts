import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  standalone: true,
  imports: [],
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.scss'
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 10;

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(): void {
    console.log('ngOnChanges')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook )
  }

}

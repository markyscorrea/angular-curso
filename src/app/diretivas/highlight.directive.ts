import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'backgroundColor',
    //   'yellow'
    // )
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'backgroundColor',
    //   'white'
    // )
    this.backgroundColor = 'white';
  }

}

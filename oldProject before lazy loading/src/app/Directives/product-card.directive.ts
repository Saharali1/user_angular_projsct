import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective {

  constructor(private elemRef: ElementRef) {

    elemRef.nativeElement.style.boxShadow=` 2px red`;
    // elemRef.nativeElement.style.border=`solid 2px #555`;
    // elemRef.nativeElement.style.shadow=`0 0 10px  rgba(0,0,0,0.6)`;


   }

   @HostListener('mouseenter') onMouseEnter()
  {
    this.elemRef.nativeElement.style.boxShadow=` 4px 4px red`;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.boxShadow=` 2px 2px red`;
  }

}

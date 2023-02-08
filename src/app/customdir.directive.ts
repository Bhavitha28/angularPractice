import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="red"
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appItalic]',
})
export class ItalicDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.fontStyle = 'italic';
  }
}

import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[focus]"
})

export class AutoFocusDirective {
  constructor(public elementRef: ElementRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    });
  }
}
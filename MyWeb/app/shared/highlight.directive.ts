import { Directive, ElementRef,HostListener, Input, Renderer } from '@angular/core';

@Directive({ 
    selector: '[highlight]' 
})

export class HighlightDirective {
   private _defaultColor = 'red';

  constructor(private renderer: Renderer,private el: ElementRef) {
    //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
  }

  @Input() set defaultColor(colorName:string){
    this._defaultColor=colorName||this._defaultColor;
  }

  @Input('highlightColor') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}

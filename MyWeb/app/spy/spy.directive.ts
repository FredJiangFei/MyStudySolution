import { Directive, OnInit,OnDestroy  } from '@angular/core';

@Directive({selector: '[mySpy]'})

export class SpyDirective implements OnInit, OnDestroy {
  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    console.log(`Spy # ${msg}`);
  }
}

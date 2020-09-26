import { Component, Injector } from '@angular/core';
import { FeatLineGenerated } from './feat-line-generated.component';

@Component({
  selector: 'page-feat-line',
  templateUrl: './feat-line.component.html'
})
export class FeatLineComponent extends FeatLineGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

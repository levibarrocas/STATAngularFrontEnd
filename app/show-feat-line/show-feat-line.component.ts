import { Component, Injector } from '@angular/core';
import { ShowFeatLineGenerated } from './show-feat-line-generated.component';

@Component({
  selector: 'page-show-feat-line',
  templateUrl: './show-feat-line.component.html'
})
export class ShowFeatLineComponent extends ShowFeatLineGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

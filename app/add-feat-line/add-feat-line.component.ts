import { Component, Injector } from '@angular/core';
import { AddFeatLineGenerated } from './add-feat-line-generated.component';

@Component({
  selector: 'page-add-feat-line',
  templateUrl: './add-feat-line.component.html'
})
export class AddFeatLineComponent extends AddFeatLineGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

import { Component, Injector } from '@angular/core';
import { AddFeatLineFreeFeatGenerated } from './add-feat-line-free-feat-generated.component';

@Component({
  selector: 'page-add-feat-line-free-feat',
  templateUrl: './add-feat-line-free-feat.component.html'
})
export class AddFeatLineFreeFeatComponent extends AddFeatLineFreeFeatGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

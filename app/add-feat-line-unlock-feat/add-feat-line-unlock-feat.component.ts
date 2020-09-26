import { Component, Injector } from '@angular/core';
import { AddFeatLineUnlockFeatGenerated } from './add-feat-line-unlock-feat-generated.component';

@Component({
  selector: 'page-add-feat-line-unlock-feat',
  templateUrl: './add-feat-line-unlock-feat.component.html'
})
export class AddFeatLineUnlockFeatComponent extends AddFeatLineUnlockFeatGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

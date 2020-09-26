import { Component, Injector } from '@angular/core';
import { AddFeatActionGenerated } from './add-feat-action-generated.component';

@Component({
  selector: 'page-add-feat-action',
  templateUrl: './add-feat-action.component.html'
})
export class AddFeatActionComponent extends AddFeatActionGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

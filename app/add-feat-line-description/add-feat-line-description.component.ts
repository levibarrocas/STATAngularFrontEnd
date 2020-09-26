import { Component, Injector } from '@angular/core';
import { AddFeatLineDescriptionGenerated } from './add-feat-line-description-generated.component';

@Component({
  selector: 'page-add-feat-line-description',
  templateUrl: './add-feat-line-description.component.html'
})
export class AddFeatLineDescriptionComponent extends AddFeatLineDescriptionGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

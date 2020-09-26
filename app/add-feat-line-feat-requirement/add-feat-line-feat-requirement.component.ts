import { Component, Injector } from '@angular/core';
import { AddFeatLineFeatRequirementGenerated } from './add-feat-line-feat-requirement-generated.component';

@Component({
  selector: 'page-add-feat-line-feat-requirement',
  templateUrl: './add-feat-line-feat-requirement.component.html'
})
export class AddFeatLineFeatRequirementComponent extends AddFeatLineFeatRequirementGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

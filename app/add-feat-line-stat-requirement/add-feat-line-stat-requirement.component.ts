import { Component, Injector } from '@angular/core';
import { AddFeatLineStatRequirementGenerated } from './add-feat-line-stat-requirement-generated.component';

@Component({
  selector: 'page-add-feat-line-stat-requirement',
  templateUrl: './add-feat-line-stat-requirement.component.html'
})
export class AddFeatLineStatRequirementComponent extends AddFeatLineStatRequirementGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

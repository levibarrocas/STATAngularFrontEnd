import { Component, Injector } from '@angular/core';
import { EditStatLevelGenerated } from './edit-stat-level-generated.component';

@Component({
  selector: 'page-edit-stat-level',
  templateUrl: './edit-stat-level.component.html'
})
export class EditStatLevelComponent extends EditStatLevelGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

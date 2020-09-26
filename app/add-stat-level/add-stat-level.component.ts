import { Component, Injector } from '@angular/core';
import { AddStatLevelGenerated } from './add-stat-level-generated.component';

@Component({
  selector: 'page-add-stat-level',
  templateUrl: './add-stat-level.component.html'
})
export class AddStatLevelComponent extends AddStatLevelGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

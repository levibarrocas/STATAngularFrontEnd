import { Component, Injector } from '@angular/core';
import { StatDescriptionsGenerated } from './stat-descriptions-generated.component';

@Component({
  selector: 'page-stat-descriptions',
  templateUrl: './stat-descriptions.component.html'
})
export class StatDescriptionsComponent extends StatDescriptionsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

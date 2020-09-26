import { Component, Injector } from '@angular/core';
import { NewCharacterGenerated } from './new-character-generated.component';

@Component({
  selector: 'page-new-character',
  templateUrl: './new-character.component.html'
})
export class NewCharacterComponent extends NewCharacterGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

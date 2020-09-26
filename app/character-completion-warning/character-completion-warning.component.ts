import { Component, Injector } from '@angular/core';
import { CharacterCompletionWarningGenerated } from './character-completion-warning-generated.component';

@Component({
  selector: 'page-character-completion-warning',
  templateUrl: './character-completion-warning.component.html'
})
export class CharacterCompletionWarningComponent extends CharacterCompletionWarningGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

import { Component, Injector } from '@angular/core';
import { CharactersGenerated } from './characters-generated.component';

@Component({
  selector: 'page-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent extends CharactersGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}

import { Component, Inject } from '@angular/core';
import { Person } from '../model/person';
import { BobService } from '../services/bob';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{person.name}}</h1>
  <my-ajaxey></my-ajaxey>
  <input [(ngModel)]="person.name" placeholder="name">
  <my-buttons [foo]="person.name"></my-buttons>
  `,
  styles: [`body {}`]
})
export class AppComponent {
    constructor(
        @Inject(BobService)
        bob
    ) {
        this.bob = bob;
    }
    
    person = new Person();
    bar = 'barry';
}

import { Component, Inject, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { BobService } from '../services/bob';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{person.name}}</h1>
  <my-ajaxey></my-ajaxey>
  <input [(ngModel)]="person.name" placeholder="name">
  <my-buttons [foo]="person.name"></my-buttons>
  `,
  services: [BobService],
  styles: [`body {}`]
})
//@Inject(BobService)
//@Implement(OnInit)
export class AppComponent {
    constructor(
        @Inject(BobService)
        bob
    ) {
        console.log('bob', bob);
    }
    
    ngOnInit() {
        console.log('OnInit');
        console.log(this)
    }
    
    person = new Person();
    bar = 'barry';
}

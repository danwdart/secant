import { Component, Inject, OnInit, OpaqueToken } from '@angular/core';
import { Person } from '../../model/person';
import { BobService } from '../../services/bob';

@Component({
  selector: 'my-app',
  templateUrl: `/js/src/components/myapp/index.html`,
  providers: [BobService],
  styles: [`body {}`]
})
export class AppComponent {
    constructor(bob) {
        this.bob = bob;
    }
    
    static parameters = [[BobService]];
    
    ngOnInit() {
        console.log('OnInit');
        this.bob.getBob().then((result) => console.log(result));
    }
    
    person = new Person();
    bar = 'barry';
}

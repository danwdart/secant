import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { BobService }               from '../../services/bob';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-ajaxey',
  templateUrl: `/js/src/components/ajaxey/index.html`,
  styles: [`body {}`]
})
export class AjaxeyComponent {
    
    static parameters = [[BobService], [ActivatedRoute], [Location]];
    
    constructor(BobService, route, location) {
        this.BobService = BobService;
        this.route = route;
        this.location = location;
    }
    
    ngOnInit() {
        console.log(this.BobService, this.route, this.location);
        this.route.params.switchMap((params) => this.BobService.getBob(+params.id))
            .subscribe(bob => this.bob = bob)
    }
    
    goBack() {
        this.location.back();
    }
    
    bob = null;
    
    @Input()
    id = null;
}

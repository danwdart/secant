import { Injectable } from '@angular/core';

@Injectable()
export class BobService {
    this_is_bob = 1;

    getBob() {
        return Promise.resolve([{
            id: 1,
            name: 'Bob'
        }]);
    }
}

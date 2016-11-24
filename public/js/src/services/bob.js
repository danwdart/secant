import { Injectable } from '@angular/core';

@Injectable()
export class BobService {
    getBob() {
        return [{
            id: 1,
            name: 'Bob'
        }];
    }
}

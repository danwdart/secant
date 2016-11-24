import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-buttons',
  templateUrl: `/js/src/components/buttons/index.html`,
  styles: [`body {}`]
})
export class ButtonsComponent {
    array = [1,2,3,4,5];
    
    @Input()
    foo = null;
    
    selectedItem = null;
    
    onClick(item) { console.log(item); this.selectedItem = item; }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-buttons',
  template: `
  <h3>Hello... input was {{ foo }}</h3>
  <h2 *ngIf="selectedItem">Item is {{ selectedItem }}</h2>
  <ul *ngFor="let item of array"><li><button [class.selected]="item == selectedItem" (click)="onClick(item)">{{ item }}</button></li></ul>
  `,
  styles: [`body {}`]
})
export class ButtonsComponent {
    array = [1,2,3,4,5];
    
    @Input()
    foo = null;
    
    selectedItem = null;
    
    onClick(item) { console.log(item); this.selectedItem = item; }
}

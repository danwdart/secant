import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './components/myapp';
import { ButtonsComponent } from './components/buttons';
import { AjaxeyComponent } from './components/ajaxey';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ButtonsComponent, AjaxeyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

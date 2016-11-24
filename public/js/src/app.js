import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './components/myapp';
import { ButtonsComponent } from './components/buttons';
import { AjaxeyComponent } from './components/ajaxey';

;

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: 'ajaxey/:id',
            component: AjaxeyComponent
        }
    ])
],
  declarations: [ AppComponent, ButtonsComponent, AjaxeyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

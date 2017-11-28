import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule, AppComponent } from './core';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

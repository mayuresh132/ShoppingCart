import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

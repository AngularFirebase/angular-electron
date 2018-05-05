import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoundProgressModule } from 'angular-svg-round-progressbar'; // <-- here

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    FormsModule, 
    BrowserModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

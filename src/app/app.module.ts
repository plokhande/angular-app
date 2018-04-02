import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './myapp/first/first.component';
import { SqrtPipe } from './pipes/sqrt.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SqrtPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

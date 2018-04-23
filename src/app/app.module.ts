import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './myapp/first/first.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { ROUTING } from './app.routing';
import { CalcComponent } from './calc/calc/calc.component';
import { MyserviceService } from './app.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SqrtPipe,
    CalcComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, ROUTING, HttpModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

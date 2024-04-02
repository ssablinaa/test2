import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AppRoutingModule } from './app-routing.module';
import { JsonService } from './core/services/json.service';
import { ItalicDirective } from './core/directives/italic.directive';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ItalicDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [JsonService],
  bootstrap: [AppComponent],
})
export class AppModule {}

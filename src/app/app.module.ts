import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AppRoutingModule } from './app-routing.module';
import { JsonService } from './core/services/json.service';
import { ItalicDirective } from './core/directives/italic.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';
import { ParentsComponent } from './parents/parents.component';
import { ReversePipe } from './core/pipes/reserve.pipe';
import { ErrorInterceptor } from './core/interceptors/error.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ItalicDirective,
    ParentComponent,
    ChildComponent,
    ChildrenComponent,
    ParentsComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

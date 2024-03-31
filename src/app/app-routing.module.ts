import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { confirmGuard } from './core/guards/confirm.guard';
import { exitGuard } from './core/guards/exit.guard';
import { DataService } from './core/services/data.service';

const routes: Routes = [
  { path: 'page1/:id', component: Page1Component },
  {
    path: 'page2',
    component: Page2Component,
    canActivate: [confirmGuard],
    canDeactivate: [exitGuard],
  },
  { path: 'page3', component: Page3Component },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

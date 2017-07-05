import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';
import { TestComponent } from './test.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    TestComponent, DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DetailModule {
  public static routes = routes;

  constructor() {
    console.log('ROUTES -> ', routes);
  }
}

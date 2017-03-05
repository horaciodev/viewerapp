import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorListComponent } from './error-list.component';


@NgModule({
  imports: [
    RouterModule.forChild(
    [
      { path: 'errors', component: ErrorListComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }

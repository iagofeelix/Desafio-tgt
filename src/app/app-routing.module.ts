import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataFormComponent} from "./data-form/data-form.component";

const routes: Routes = [
  { path: 'cliente', component: DataFormComponent },
  { path: '',   redirectTo: '/cliente', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

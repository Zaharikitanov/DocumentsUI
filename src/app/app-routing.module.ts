import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './document/create/create.component';
import { ListComponent } from './document/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'document/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

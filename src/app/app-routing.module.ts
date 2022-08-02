import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModelsComponent } from './form-models/form-models.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { TableModelsComponent } from './table-models/table-models.component';
import { TableUsersComponent } from './table-users/table-users.component';

const routes: Routes = [
 {path: '', component: TableUsersComponent},
 {path: 'users', component: TableUsersComponent},
 {path: 'users/form', component: FormUsersComponent},
 {path: 'users/form/:id', component: FormUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

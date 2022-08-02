import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsProductsComponent } from './cards-products/cards-products.component';
import { FormModelsComponent } from './form-models/form-models.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { HomeComponent } from './home/home.component';
import { TableModelsComponent } from './table-models/table-models.component';
import { TableUsersComponent } from './table-users/table-users.component';

const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'users', component: TableUsersComponent},
 {path: 'users/form', component: FormUsersComponent},
 {path: 'users/form/:id', component: FormUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import {AdminLayoutComponent} from "../shared/admin-layout/admin-layout.component";

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent},
          {path: 'add', component: AddPageComponent},
          {path: 'orders', component: OrdersPageComponent},
          {path: 'product/:id/edit', component: EditPageComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule],
  declarations: [
    LoginPageComponent,
    AddPageComponent,
    DashboardPageComponent,
    EditPageComponent,
    OrdersPageComponent,
    AdminLayoutComponent
  ]
})

export class AdminModule{

}

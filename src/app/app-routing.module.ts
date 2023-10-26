import { DepositaryComponent } from './components/depositary/depositary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDepositaryComponent } from './components/dialog/edit-depositary/edit-depositary.component';
import { ItemDataUpdateComponent } from './components/item-data-update/item-data-update.component';
import { OrderDepositaryComponent } from './components/order-depositary/order-depositary.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "depositary",
    pathMatch: "full"
  },

  {
    path: "depositary",
    component: DepositaryComponent
  },
  {
    path: "itemDataUpdate",
    component: ItemDataUpdateComponent
  },
  {
    path: "orderDepositary",
    component: OrderDepositaryComponent
  },
  {
    path: "**",
    component: DepositaryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

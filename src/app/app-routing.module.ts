import { DepositaryComponent } from './components/depositary/depositary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

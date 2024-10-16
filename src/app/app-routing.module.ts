import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LoginComponent
  },
  {
    path: "login",
    component: RegisterComponent
  },
  {
    path: "home",
    component: FeaturesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

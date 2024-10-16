import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { WikiComponent } from './features/wiki/wiki.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
    {
        path: "",
        component: RegisterComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: FeaturesComponent
    },
];

import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/login/login.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { AppMaterialModule } from './angular-material-components/material-components-module';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './_guards';
import { HeaderNavigationComponent } from './main-layout/header-navigation/header-navigation.component';
import { FormsComponent } from './modules/forms/forms.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path :'forms',component:FormsComponent},
  // { path: '', component: HeaderNavigationComponent,canActivate: [AuthGuard] },
  { path: '', component: HomeComponent,canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [
    RouterModule,
    AppMaterialModule
  ]
})
export class AppRoutingModule { }

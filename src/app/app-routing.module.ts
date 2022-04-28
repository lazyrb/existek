import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SignUpComponent } from './components/signUp/signUp.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: ':category',
    component: MainComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

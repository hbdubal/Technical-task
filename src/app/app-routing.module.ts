import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { QuestionsComponent } from './questions/questions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthguardGuard } from './service/authguard.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'books',
    component:BooksComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'questions',
    component:QuestionsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

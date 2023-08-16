import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: ':dish.idMeal', component: FoodDetailsComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

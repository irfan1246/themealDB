import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  constructor(
    private foodService: FoodService
  ) {}

  ngOnInit() {
    // this.getMealCategories();
  }

  // getMealCategories() {
  //   this.foodService.getMealCategories().subscribe(
  //     (data: any) => {
  //       this.categories = data.categories;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
}

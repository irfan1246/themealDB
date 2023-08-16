import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { ActivatedRoute } from '@angular/router';
// import { ApiService } from '../api.service';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
 mealId: any;
mealData: any;
//  idMeal: any;
//  id!: string;
//  mealQuery!: string;
//  searchResults: any[] = [];
//  mealDetails: any;
//   constructor(
//     private foodService: FoodService
//   ) {}

//   ngOnInit(){
    
//   }
meal: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: FoodService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mealId = params['dish.idMeal'];
    });
    this.getMealDetails();
  }

  // Replace with the actual ID you want to pass
  getMealDetails() {
  // const mealId = '52971'; 
  this.apiService.getMealById(this.mealId).subscribe(response => {
    this.mealData = response.meals[0];
    // Handle the API response here
    console.log("$$$$$$$$$$$",response);
  });
}

getIngredients() {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = this.mealData['strIngredient' + i];
    const measure = this.mealData['strMeasure' + i];
    if (ingredient) {
      ingredients.push(ingredient + ' - ' + measure);
    }
  }
  return ingredients;
}
  
// getMealDetails() {
//   this.apiService.getMealDetails(this.mealId).subscribe((data: any) => {
//     this.meal = data.meals[0];
//   },
//       (error) => {
//         console.log(error);
//       }
//     );
// }
  // getMealDetails(): void {
  //   this.apiService.getMealDetails(this.mealId).subscribe(
  //     (response: any) => {
  //       if (response.meals) {
  //         this.mealDetails = response.meals[0];
  //       } else {
  //         this.mealDetails = null;
  //       }
  //     },
  //     (error: any) => {
  //       console.error('An error occurred:', error);
  //     }
  //   );
  // }


  // showRecipes(id: string) {
  //   this.apiService.getMealDetails(id)
  //     .subscribe((data: any) => {
  //       const meal = data.meals;
  //       console.log("meallllllllll", meal);
  //       console.log('Meal ID:', meal.idMeal);
  //         console.log('Meal Name:', meal.strMeal);
  //         console.log('Category:', meal.strCategory);
  //         console.log('Area:', meal.strArea);
  //         console.log('Instructions:', meal.strInstructions);
  //     });
  // }
}

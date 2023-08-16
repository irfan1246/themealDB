import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from './food';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Recipes {
  meals: any;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // recipeURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  // categoryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  // randomURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  // allCategoriesURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  // areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
  // searchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';
  constructor(
    private http : HttpClient
  ) {
   }

  fetchProfile() {
    return this.http.get<{[key: string]: Food}>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .pipe(map((res) => {
      const profile = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)) {
          profile.push(res[key])
        }
      }
      return profile  ;
    }))
  }

  getMealById(id: string): Observable<any> {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get<any>(url);
  }

  // getMealById(id: string) {
  //   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  //   return this.http.get(url);
  // }
}

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  dataList: any;
  constructor(
    private foodService: FoodService
  ) {}

ngOnInit() {
  this.fetchPro();
}

  private fetchPro() {
    this.foodService.fetchProfile().subscribe((data => {
      this.dataList = data;
      console.log('444444444444',this.dataList)
    }))
  }
}

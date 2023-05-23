import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant/add-restaurant.component';


@NgModule({
  declarations: [
    AddRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }

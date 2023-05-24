import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant/add-restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { MapComponent } from 'src/app/shared/components/map/map.component';


@NgModule({
  declarations: [
    AddRestaurantComponent,
    SearchBarComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    LeafletModule,
    FormsModule
  ]
})
export class RestaurantModule { }

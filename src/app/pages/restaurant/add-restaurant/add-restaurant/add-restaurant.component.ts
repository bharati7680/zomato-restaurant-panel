import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  restaurantForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.restaurantForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.restaurantForm.valid) {
      // Perform your form submission logic here
      console.log(this.restaurantForm.value);
    } else {
      // Display error messages or handle invalid form
    }
  }

  onMapClick(event: any) {
    this.restaurantForm.patchValue({
      latitude: event.lat,
      longitude: event.lng
    })
  }

}

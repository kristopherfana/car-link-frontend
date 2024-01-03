import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CarService } from './services/cars.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Car } from './model/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carDto: FormGroup;
  carPicture!: File;
  allCars: Car[] = [];

  constructor(private carService: CarService, private formBuilder: RxFormBuilder) {
    this.carDto = this.formBuilder.group({
      make: [''],
      model: [''],
      color: [''],
      regNumber: [''],
      clientEmail: [''],
    });
  }
  ngOnInit() {
    this.getAllCars();
  }

  createCar() {
    let formData = new FormData();
    formData.append('carDto', new Blob([JSON.stringify(this.carDto.value)], { type: 'application/json' }));
    formData.append('file', this.carPicture);
    this.carService.createCar(formData).subscribe();
  }

  onFileSelected($event: Event) {
    this.carPicture = (event!.target as HTMLInputElement).files![0];
  }

  getAllCars() {
    this.carService.getAllCars().subscribe(
      {
        next: (data) => {
          this.allCars = data;
        }
      }
    );
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(
      {
        next: () => {
          this.getAllCars();
        }
      }
    )
  }


}

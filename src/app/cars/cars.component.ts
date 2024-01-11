import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CarService } from './services/cars.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Car, CarDto, Engine, ExteriorColor, InteriorColor, Make, Model, Body } from './model/car';
import { CarApiSeviceService } from './services/CarApiService/car-api-sevice.service';
import { ClientsService } from '../clients/services/clients.service';
import { Client } from '../clients/model/client';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent implements OnInit {

  allCars: Car[] = [];

  constructor(private carService: CarService, private carApiService: CarApiSeviceService) {
  }
  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getAllCars().subscribe({ next: (data) => this.allCars = data });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe({ next: () => this.getAllCars() })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/cars.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrl: './cars-detail.component.scss'
})
export class CarsDetailComponent implements OnInit {
  id: string | null = null;
  car!: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getCarById(this.id);
  }

  getCarById(id: string | null) {
    if (id != null) {
      if (!isNaN(parseInt(id, 10))) { this.carService.getCarById(parseInt(id, 10)).subscribe((car) => this.car = car); }
    }
  }
}

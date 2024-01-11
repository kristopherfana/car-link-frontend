import { Component, ElementRef } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Client } from 'src/app/clients/model/client';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { Car, CarDto, Make, Model, Engine, InteriorColor, ExteriorColor, Body } from '../model/car';
import { CarApiSeviceService } from '../services/CarApiService/car-api-sevice.service';
import { CarService } from '../services/cars.service';
import { ResponseMessage } from 'src/app/shared/Model/error';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrl: './cars-form.component.scss'
})
export class CarsFormComponent {
  updateValue(button: HTMLButtonElement, value: string) {
    button.textContent = value;
  }

  createCarForm: FormGroup;
  carPicture!: File;
  allCars: Car[] = [];
  carDto: CarDto = new CarDto();
  makes: Make[] = [];
  models: Model[] = [];
  bodies: Body[] = [];
  engines: Engine[] = [];
  interiorColors: InteriorColor[] = [];
  exteriorColors: ExteriorColor[] = [];
  clients: Client[] = [];
  responseMessage?: ResponseMessage;

  constructor(private carService: CarService, private formBuilder: RxFormBuilder, private carApiService: CarApiSeviceService, private clientsService: ClientsService) {
    this.createCarForm = this.formBuilder.group({
      makeId: ['', Validators.required],
      modelId: ['', Validators.required],
      engineId: ['', Validators.required],
      interiorColorId: ['', Validators.required],
      exteriorColorId: ['', Validators.required],
      bodyId: ['', Validators.required],
      regNumber: ['', Validators.required],
      clientEmail: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.getClientsList();
    this.getMakes();
    this.createCarForm.disable();
    this.createCarForm.get("clientEmail")?.enable();
    this.createCarForm.get("regNumber")?.enable();
    this.createCarForm.get("makeId")?.enable();
    this.updateNextControl("makeId", ["modelId"]);
    this.updateNextControl("modelId", ["bodyId", "engineId", "interiorColorId", "exteriorColorId"]);
  }

  createCar() {
    let formData = new FormData();
    formData.append('carDto', new Blob([JSON.stringify(this.createCarForm.value)], { type: 'application/json' }));
    formData.append('file', this.carPicture);
    this.carService.createCar(formData).subscribe({ next: (response: any) => { this.responseMessage = response; } });
  }

  onFileSelected($event: Event) {
    this.carPicture = (event!.target as HTMLInputElement).files![0];
  }

  getAllCars() {
    this.carService.getAllCars().subscribe({ next: (data) => this.allCars = data });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe({ next: () => this.getAllCars() })
  }

  getMakes() {
    this.carApiService.getMakes().subscribe({ next: (makes) => this.makes = makes })
  }

  getModels(makeId: number) {
    this.carApiService.getModels(makeId).subscribe({ next: (models) => this.models = models })
  }

  getBodies(modelId: number) {
    this.carApiService.getBodies(modelId).subscribe({ next: (bodies) => this.bodies = bodies })
  }
  getEngines(modelId: number) {
    this.carApiService.getEngines(modelId).subscribe({ next: (engines) => this.engines = engines })
  }
  getInteriorColors(modelId: number) {
    this.carApiService.getInteriorColors(modelId).subscribe({ next: (interiorColors) => this.interiorColors = interiorColors })
  }
  getExteriorColors(modelId: number) {
    this.carApiService.getExteriorColors(modelId).subscribe({ next: (exteriorColors) => this.exteriorColors = exteriorColors })
  }
  getClientsList() {
    this.clientsService.getAllClient().subscribe((data) => this.clients = data)
  }
  updateNextControl(formControlName: string, nextFormControlArray: string[]) {
    this.createCarForm.get(formControlName)?.valueChanges.subscribe(
      {
        next: (data) => {
          for (const nextFormControl of nextFormControlArray) {
            console.log(nextFormControl)
            switch (nextFormControl) {
              case "modelId":
                console.log(data);
                this.getModels(data)
                break;
              case "bodyId":
                this.getBodies(data);
                break;
              case "engineId":
                this.getEngines(data);
                break;
              case "interiorColorId":
                this.getInteriorColors(data)
                break;
              case "exteriorColorId":
                this.getExteriorColors(data);
                break;
              default:
                break;
            }
            this.createCarForm.get(nextFormControl)?.enable({ emitEvent: false });
          }

        }
      }
    )
  }

  doNotSubmit() {

  }
}

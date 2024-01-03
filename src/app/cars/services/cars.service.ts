import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { Car } from 'src/app/cars/model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  API_URL = "http://localhost:8080/cars"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createCar(data: any): Observable<any> {
    console.log("Posted")
    return this.httpClient.post<any>(
      this.API_URL,
      data,
      {
        reportProgress: true,
        observe: 'events'
      }
    )
  }

  getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(
      this.API_URL,
      this.httpOptions
    )
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(
      this.API_URL + `/${id}`,
      this.httpOptions
    )
  }

  deleteCar(id: number): Observable<String> {
    return this.httpClient.delete<String>(
      this.API_URL + `/${id}`,
      { ...this.httpOptions, responseType: "json" }
    );
  }


}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, retry } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Car } from 'src/app/cars/model/car';
import { ResponseMessage } from 'src/app/shared/Model/error';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  responseBody!: Car | Car[] | string;

  API_URL = "http://localhost:8080/cars"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createCar(data: any): Observable<any> {
    return this.httpClient.post<any>(
      this.API_URL,
      data
    ).pipe(
      map(response => {
        return new ResponseMessage(
          true,
          "Car created successfully!",
          "default",
          (response as Car),
        );
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 404) {
          return of(new ResponseMessage(false, error.error, "default"));
        }
        return of(new ResponseMessage(false, error.error.text, "error"));
      })
    );
  }


  getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(
      this.API_URL,
      this.httpOptions
    )
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(
      `${this.API_URL}/${id}`,
      this.httpOptions
    )
  }

  deleteCar(id: number): Observable<String> {
    return this.httpClient.delete<String>(
      `${this.API_URL}/${id}`,
      { ...this.httpOptions, responseType: "json" }
    );
  }

  createCarSubscription(data: any): Observable<ResponseMessage> {
    return this.createCar(data).pipe(
      map(response => {
        // Successful HTTP call
        return new ResponseMessage(
          true,
          'HTTP call successful',
          response.body,
          response.status,
          response.type
        );
      }),
      catchError(error => {
        // Error in HTTP call
        const errorMessage = error.message; // Replace with appropriate error handling
        return of(new ResponseMessage(false, 'HTTP call error', errorMessage));
      })
    );
  }


}

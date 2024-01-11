import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Car } from 'src/app/cars/model/car';
import { Client, ClientForm } from 'src/app/clients/model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URL = "http://localhost:8080/clients"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createClient(data: ClientForm): Observable<Client> {
    return this.httpClient.post<Client>(
      this.API_URL,
      JSON.stringify(data),
      this.httpOptions
    ).pipe()
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `An error occured on our side. Please retry: ${error.error.message}`;
    } else {
      if (error.error) {
        errorMessage = error.error;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return throwError(errorMessage)
  }

  getAllClient(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(
      this.API_URL,
      this.httpOptions
    ).pipe()
  }

  getClientById(id: number | undefined): Observable<Client> {
    return this.httpClient.get<Client>(
      this.API_URL + `/${id}`,
      this.httpOptions
    ).pipe(
      catchError(this.handleError)
    )
  }

  deleteClient(id: number): Observable<String> {
    return this.httpClient.delete<String>(
      this.API_URL + `/${id}`,
      { ...this.httpOptions, responseType: 'text' as 'json' }
    ).pipe();
  }

  getCarsByClient(id: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>(
      this.API_URL + `/${id}/cars`,
      this.httpOptions
    ).pipe(
      catchError(this.handleError)
    )
  }


}

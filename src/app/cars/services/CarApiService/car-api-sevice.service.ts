import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Body, Engine, ExteriorColor, InteriorColor, Make, Model } from '../../model/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarApiSeviceService {

  API_URL = "http://localhost:8080/car-api"

  constructor(private httpClient: HttpClient) { }

  getMakes(): Observable<Make[]> {
    return this.httpClient.get<Make[]>(`${this.API_URL}/makes`);
  }

  getModels(makeId: number): Observable<Model[]> {
    return this.httpClient.get<Model[]>(`${this.API_URL}/models?make_id=${makeId}`);
  }

  getBodies(modelId: number): Observable<Body[]> {
    return this.httpClient.get<Body[]>(`${this.API_URL}/bodies?make_model_id=${modelId}`);
  }

  getInteriorColors(modelId: number): Observable<InteriorColor[]> {
    return this.httpClient.get<InteriorColor[]>(`${this.API_URL}/interior-colors?make_model_id=${modelId}`);
  }

  getEngines(modelId: number): Observable<Engine[]> {
    return this.httpClient.get<Engine[]>(`${this.API_URL}/engines?make_model_id=${modelId}`);
  }

  getExteriorColors(modelId: number): Observable<ExteriorColor[]> {
    return this.httpClient.get<ExteriorColor[]>(`${this.API_URL}/exterior-colors?make_model_id=${modelId}`);
  }

  //This method is created to assign the models from Http Calls to the local variables in the code.
  assignModelsToLocalVariable(makeId: number, variableToBeStored: any) {
    this.getModels(makeId).subscribe((data) => variableToBeStored = data);
  }

}

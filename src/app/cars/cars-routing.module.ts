import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'create', component: CarsFormComponent },
  { path: ':id', component: CarsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }

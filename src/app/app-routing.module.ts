import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) }, { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

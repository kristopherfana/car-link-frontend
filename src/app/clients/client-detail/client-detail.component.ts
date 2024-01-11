import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../services/clients.service';
import { Client } from '../model/client';
import { Car } from 'src/app/cars/model/car';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.scss'
})
export class ClientDetailComponent implements OnInit {
  id: string | null = null;
  client!: Client;
  cars: Car[] = [];

  constructor(private route: ActivatedRoute, private clientService: ClientsService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getClientById(this.id);
  }

  getClientById(id: string | null) {
    if (id != null) {

      this.clientService.getClientById(parseInt(id, 10)).subscribe((client) => { this.client = client });
      this.clientService.getCarsByClient(parseInt(id, 10)).subscribe((cars) => this.cars = cars);
    }
  }
}

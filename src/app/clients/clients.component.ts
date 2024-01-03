import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients/services/clients.service';
import { Client, ClientForm } from './model/client';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  allClients: Client[] = [];
  response!: String;
  clientForm!: ClientForm;
  clientDetail!: Client;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  addClientForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });


  getClientByIdForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
  });

  createClient() {
    this.clientForm = new ClientForm(this.addClientForm.value);
    this.clientService.createClient(this.clientForm).subscribe(
      {
        next: (data) => {
          this.response = "User created successfully!";
          this.getClientById(data.id);
          this.getAllClients();
        },
        error: (error) => {
          this.response = error.error.text;
        }
      }
    )
  }

  getAllClients() {
    this.clientService.getAllClient().subscribe(
      (data) => {
        this.allClients = data
      }
    );
  }

  getClientById(id: any) {
    this.clientService.getClientById(id).subscribe(
      {
        next: (data) => {
          this.clientDetail = data;
        },
        error: (error) => {
          this.response = error.message;
        }
      }
    )
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(
      (response) => {
        this.response = response;
        this.getAllClients();
      }
    )
  }



}

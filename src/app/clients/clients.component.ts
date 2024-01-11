import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ClientsService } from '../clients/services/clients.service';
import { Client, ClientForm } from './model/client';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  allClients!: Client[];
  response!: String;
  clientForm!: ClientForm;
  clientDetail!: Client;
  @ViewChildren('secondButton') components!: QueryList<ElementRef>;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.getAllClients();

  }

  getClientByIdForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
  });

  getAllClients() {
    this.clientService.getAllClient().subscribe((response) => this.allClients = response);
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
    this.clientService.deleteClient(id).subscribe({
      next: (response) => {
        this.response = response;
        this.getAllClients();
      }
    }
    )
  }

  firstButtonClicked(id: number) {
    this.components.forEach((button: ElementRef) => {
      if (button.nativeElement.name == id) {
        button.nativeElement.click();
      }
    });
  }

}

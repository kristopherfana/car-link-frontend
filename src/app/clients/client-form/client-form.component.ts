import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientForm } from '../model/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {

  clientForm!: ClientForm;

  constructor(private clientService: ClientsService) { }
  addClientForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    streetAddress: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    about: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  createClient() {
    this.clientForm = new ClientForm(this.addClientForm.value);
    this.clientService.createClient(this.clientForm).subscribe()
  }
}

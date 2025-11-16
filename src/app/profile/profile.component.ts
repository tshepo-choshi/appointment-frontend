import { Component, Input } from '@angular/core';
import { Client } from '../interface/client.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @Input() clientData: Client | undefined;
  firstNamePro: string | undefined = '';
  lastNamePro: string | undefined = '';
  emailPro: string | undefined = '';

  constructor(){
  }

  ngOnInit(): void {
    this.firstNamePro = this.clientData?.fullName;
    this.lastNamePro = this.clientData?.lastname;
    this.emailPro = this.clientData?.email;
  }

  public updateClient(){
   //updateClientData
  }

}

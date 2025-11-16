import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { AppointmentComponent } from "../appointment/appointment.component";
import { BranchService } from '../service/branch.service';
import { Branch } from '../interface/branch.interface';
import { NgIf } from '@angular/common';
import { AppointmentService } from '../service/appointment.service';
import { Client } from '../interface/client.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileComponent, AppointmentComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clientData: any;
  appointment: any;
  branches: Branch[] = [];
  isDataLoaded: boolean = false; 

  constructor(private branchService: BranchService, private appointmentService: AppointmentService){
    branchService.getBranches().subscribe(response =>{
      this.branches = response;
    });

    this.appointment = []
  }

  ngOnInit(): void {
    const sessionClient = sessionStorage.getItem("loginData");  
    if(sessionClient){
      this.clientData = JSON.parse(sessionClient);
      this.appointmentService.getAppointmentsForClient(this.clientData.id).subscribe(response =>{
        this.appointment = response;
        sessionStorage.setItem("clientAppointments", JSON.stringify(this.appointment));
      });
      this.isDataLoaded = true;
    }
      
  }
  
}

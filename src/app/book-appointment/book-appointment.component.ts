import { Component } from '@angular/core';
import { BranchService } from '../service/branch.service';
import { Branch } from '../interface/branch.interface';
import { AppointmentService } from '../service/appointment.service';
import { Appointment, AppointmentDto } from '../interface/appointment.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css'
})
export class BookAppointmentComponent {
  public showSpinner: boolean = false;
  public clientAppointments: Appointment[] = [];
  public branchList: Branch[] = [];
  public userId: any;
  public mailTo: string = '';
  public branchCode: string = '';
  public description: string = '';
  public startTime: string = '';

  constructor(private branchService: BranchService, private appointmentService: AppointmentService, private router: Router){
      this.branchService.getBranches().subscribe(response =>{
        this.branchList = response;
      });
  }

  ngOnInit(): void {
    const sessionData = sessionStorage.getItem("loginData");
    if(sessionData){
      this.userId = JSON.parse(sessionData).id;
      this.mailTo = JSON.parse(sessionData).email;
    }
    const sessionClientAppointments = sessionStorage.getItem("clientAppointments");
    if(sessionClientAppointments){
      this.clientAppointments = JSON.parse(sessionClientAppointments);
    }
  }

  bookAppointment(){
    if(this.clientAppointments.length < 2){
      this.showSpinner = true;
      let bookAppointment: AppointmentDto = {
        'userId': this.userId,
        'branchCode': this.branchCode,
        'description': this.description,
        'startTime': this.startTime,
        'email': this.mailTo
      }
      
      if(this.branchCode != "" && this.branchCode != "null" && this.description != "" && this.startTime != ""){
        this.appointmentService.bookAppointment(bookAppointment).subscribe(response =>{
          this.showSpinner = true;
          this.router.navigateByUrl("home");
          alert("Appointmnet booked successfully, please check your email for confirmation");
        },(error: HttpErrorResponse)=>{
          this.showSpinner = true;
          alert(error.message);
        });
      }else{
        alert("All fields are required");
      }
    }else{
      window.location.reload();
       alert("You cannot book more than 2 appoinments");
    } 
  }


  onSelectionChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.branchCode = selectElement.value;
  }

}

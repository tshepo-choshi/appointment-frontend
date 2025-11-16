import { Component, Input } from '@angular/core';
import { Appointment } from '../interface/appointment.interface';
import { NgFor, NgIf } from '@angular/common';
import { AppointmentService } from '../service/appointment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

    @Input() appointment: Appointment[] | undefined;

    constructor(private appointmentService: AppointmentService){}

    ngOnInit(): void {
    }

    deleteAppointment(appointmnetId: number){
     
      let text = "Click OK to cancel this appointment?";
      if (confirm(text) == true) {
        this.appointmentService.cancelAppointmentForClient(appointmnetId).subscribe(response =>{
          window.location.reload();
        },(error: HttpErrorResponse)=>{
          alert(error.message);
        });
      }

    }

}

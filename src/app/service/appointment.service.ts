import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Appointment, AppointmentDto } from "../interface/appointment.interface";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AppointmentService{

    private apiServerUrl = environment.apiBaseurl;

    constructor(private http: HttpClient){
    }
    
    public getAppointmentsForClient(clientId: number):Observable<Appointment[]>{
        return this.http.get<Appointment[]>(`${this.apiServerUrl}/appointment/${clientId}`);
    }

    public cancelAppointmentForClient(appointmentId: number):Observable<any>{
        console.log("It came here");
        return this.http.delete<number>(`${this.apiServerUrl}/appointment/${appointmentId}`);
    }

    public bookAppointment(appointment: AppointmentDto):Observable<any>{
        return this.http.post<Appointment>(`${this.apiServerUrl}/appointment`, appointment);
    }

    public updateAppointment(appointment: Appointment){
        this.http.put<Appointment>(`${this.apiServerUrl}/appointment`, appointment);
    }

}


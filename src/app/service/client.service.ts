import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../interface/client.interface";
import { environment } from "../../environments/environment.prod";
import { Login } from "../interface/login.interface";
import { Register } from "../interface/register.interface";
import { ResponseText } from "../interface/responseText.interface";


@Injectable({
    providedIn: 'root'
})
export class ClientService{

    private apiServerUrl = environment.apiBaseurl;

    constructor(private http: HttpClient){
    }

    public login(login: Login):Observable<Client>{
        return this.http.post<Client>(`${this.apiServerUrl}/client/login`, login);
    } 

    public register(register: Register):Observable<ResponseText>{
        return this.http.post<ResponseText>(`${this.apiServerUrl}/client/register`, register);
    } 

}
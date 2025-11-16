import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Branch } from "../interface/branch.interface";
import { environment } from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class BranchService{

    private apiServerUrl = environment.apiBaseurl;

    constructor(private http: HttpClient){
    }

    public getBranches():Observable<Branch[]>{
        return this.http.get<Branch[]>(`${this.apiServerUrl}/branch`);
    }
}
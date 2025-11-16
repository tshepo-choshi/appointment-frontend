import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate{
    
    isLoggedIn: boolean = false;
    clientData: any;
    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const sessionClient = sessionStorage.getItem("loginData");  

        if(sessionClient){
            this.clientData = JSON.parse(sessionClient);
            this.isLoggedIn = true;
        }
        const isAuthorize: boolean = this.isLoggedIn;
        if(!isAuthorize){
            this.router.navigateByUrl('')
        }
        return isAuthorize;
    }

}

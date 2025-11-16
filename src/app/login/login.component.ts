import { Component } from '@angular/core';
import { ClientService } from '../service/client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from '../interface/login.interface';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailInput: string = '';
  passwordInput: string = '';

  constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void {
    
  }

  public loginSubmit(){

    let login: Login = {'email': this.emailInput, 'password': this.passwordInput};

    this.clientService.login(login).subscribe(clientData =>{
      
      if(clientData != null){
        sessionStorage.setItem("loginData", JSON.stringify(clientData));
        this.router.navigateByUrl("home");
      }
    },(error: HttpErrorResponse)=>{
      alert(error.message);
    });
  }

  public register(){
    this.router.navigateByUrl("register");
  }

}

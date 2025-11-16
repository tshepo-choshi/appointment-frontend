import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from '../service/client.service';
import { Register } from '../interface/register.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  firstNameInputRegister: string = '';
  lastNameInputRegister: string = '';
  emailInputRegister: string = '';
  passwordInputRegister: string = '';

  constructor(private clientService: ClientService, private router: Router){}
  
    public registerSubmit(){
     
      let register: Register = {'firstName': this.firstNameInputRegister, 'lastName': this.lastNameInputRegister, 'email': this.emailInputRegister, 'password': this.passwordInputRegister};
  
      this.clientService.register(register).subscribe(response =>{
        this.clearFields();
        alert(response.message);
        this.router.navigateByUrl("login");
      },(error: HttpErrorResponse)=>{
        console.log(error);
        alert(error.message);
      });
    }

    clearFields(){
      this.firstNameInputRegister = '';
      this.lastNameInputRegister = '';
      this.emailInputRegister = '';
      this.passwordInputRegister = '';
    }
  
}

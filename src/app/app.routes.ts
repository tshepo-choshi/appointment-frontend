import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AuthGuardService } from './service/authguard.service';

export const routes: Routes = [
    {path: '' , component: LoginComponent},
    {path: 'home' , component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'login' , component: LoginComponent},
    {path: 'register' , component: RegisterComponent},
    {path: 'book-appointment' , component: BookAppointmentComponent, canActivate: [AuthGuardService]},
    { path: '**', redirectTo: '/login' } 
];

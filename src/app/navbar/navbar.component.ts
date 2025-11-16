import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){}

  logout(){
    let text = "Are you sure you want to Logout?";
    if (confirm(text) == true) {
      sessionStorage.clear();
      this.router.navigateByUrl("login");
      window.location.reload();
      alert("Logout success");
    }
  }

}

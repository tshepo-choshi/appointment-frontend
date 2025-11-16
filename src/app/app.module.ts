import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
// import { AppRoutingModule } from "./app.routes";
import { RouterModule } from "@angular/router";
import { ClientService } from "./service/client.service";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([]),
       
        
    ],
    providers: [],
    bootstrap: []
})
export class Appmodule {}
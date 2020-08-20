import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ChecksComponent } from "./checks/checks.component";
import { RadiosComponent } from "./radios/radios.component";
import { CommonModule } from '@angular/common';
import { IconComponent } from "./icons/icon.component";

@NgModule({
    declarations: [
        AppComponent,
        ButtonsComponent,
        ChecksComponent,
        RadiosComponent,
        IconComponent
    ],
    imports: [BrowserModule, CommonModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

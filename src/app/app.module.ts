import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContainerComponent } from './container/container.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {FormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ShowCourseComponent } from './show-course/show-course.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContainerComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    NotFoundComponent,
    HomeComponent,
    ShowCourseComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

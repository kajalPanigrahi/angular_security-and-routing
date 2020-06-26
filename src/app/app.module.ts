import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//for material component animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//for material toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//for mat expansion panel
import {MatExpansionModule} from '@angular/material/expansion';

//for mat form field
import { MatFormFieldModule } from '@angular/material/form-field'

//for matInput
import { MatInputModule } from '@angular/material/input';

//for mat button
import {MatButtonModule} from '@angular/material/button';

//for ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//for mat card
import {MatCardModule} from '@angular/material/card';

//for HttpClient
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './note.service';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';
 

const routes : Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[CanActivateGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NoteService, AuthenticationService ],
  bootstrap: [AppComponent]//,HeaderComponent]
})
export class AppModule { }

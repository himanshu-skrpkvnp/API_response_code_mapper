import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddnewComponent } from './addnew/addnew.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatDialogActions } from '@angular/material/dialog';
// import { DialogBoxComponent } from './dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    MatTableModule , 
    MainComponent , 
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive  , AddnewComponent , DialogboxComponent  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

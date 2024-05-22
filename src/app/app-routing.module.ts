import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { DialogboxComponent } from './dialogbox/dialogbox.component';


const routes: Routes = [

     {  path : '' , component : MainComponent  } , 
     { path: 'addnew', component: AddnewComponent } , 
     { path : 'dialog' , component : DialogboxComponent }
];

@NgModule({
  imports: [ CommonModule , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

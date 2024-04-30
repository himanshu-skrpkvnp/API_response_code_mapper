import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [

  {  path : '' , component : MainComponent  } , 
     { path: 'addnew', component: AddnewComponent }
];

@NgModule({
  imports: [ CommonModule , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

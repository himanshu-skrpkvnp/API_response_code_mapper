import { Component, Inject, Injectable } from '@angular/core';
import {MatDialog, MatDialogModule , MatDialogActions, MAT_DIALOG_DATA, MatDialogRef , } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'] ,
  standalone : true , 
  imports : [MatDialogModule, MatButtonModule  , FormsModule , MatFormFieldModule , MatInputModule , MatRadioModule
     , CommonModule
   ]
})


export class DialogboxComponent {

normalRadioButton: boolean = false   ;


constructor(public dialogRef: MatDialogRef<DialogboxComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any ) {
   
   }
   onNoClick(): void {
    this.dialogRef.close();
    }
    save() : void {
       this.dialogRef.close( this.data ) 
    }

    onProfileChange(newvalue : boolean ) : void  {
          console.log(  "hii atul " + newvalue ) ;
          if( !newvalue ) this.data.ProfileStrategy = '' ;
      }
  
}

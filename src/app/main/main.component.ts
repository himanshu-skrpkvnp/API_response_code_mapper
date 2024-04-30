import { CommonModule, NgIf } from '@angular/common';
import { Component  , ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule , MatTable} from '@angular/material/table';
import { RouterModule, Router, RouterLink } from '@angular/router';




export interface PeriodicElement {
  ApiName : String ;
  TestCase : String ;
  Result : String ;
  Message : String ;
  Profile : String ;
  ProfileStrategy : String ;
  editMode : boolean ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ApiName  : "ApiReqVal" , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static' , editMode : false },
  { ApiName  : "ApiReqVal2" , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static' , editMode : false},
  { ApiName  : "ApiReqVal3" , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static' , editMode : false},
  

];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] ,
  standalone: true,
  imports: [MatTableModule , RouterLink  , FormsModule , NgIf , CommonModule],
})

export class MainComponent {
onFieldBlur(_t26: any) {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = ['Actions', 'ApiName', 'TestCase', 'Result', 'Message' , 'Profile' , 'ProfileStrategy'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable) table: MatTable<PeriodicElement> | undefined;
  
  constructor(private router: Router) {
   
  }

  onEdit(element: PeriodicElement): void {
    // const indexToDelete = this.dataSource.findIndex(
    //   (periodicElement) => periodicElement.position === element.position
    // );
    // ELEMENT_DATA.splice(indexToDelete, 1);
    // this.dataSource = ELEMENT_DATA;
    // this.table.renderRows();
  }

  toggleEditMode(element: PeriodicElement): void {
    element.editMode = !element.editMode;
  }
  

  onDelete(element: PeriodicElement): void {
    const indexToDelete = this.dataSource.findIndex(
      (PeriodicElement) => PeriodicElement.ApiName === element.ApiName
    );
    if( indexToDelete != -1  )
    {ELEMENT_DATA.splice(indexToDelete, 1);
    this.dataSource = ELEMENT_DATA;
    if( this.table != undefined) this.table.renderRows();
    }
  }

  addNew() : void {
    this.router.navigate(['/addnew']);
  }
}

 
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Router } from '@angular/router';




export interface PeriodicElement {
  ApiName : String ;
  TestCase : String ;
  Result : String ;
  Message : String ;
  Profile : String ;
  ProfileStrategy : String ;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ApiName  : 'ReqValadd' , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static'},
  

];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] ,
  standalone: true,
  imports: [MatTableModule],
})

export class MainComponent {
  displayedColumns: string[] = ['Actions', 'ApiName', 'TestCase', 'Result', 'Message' , 'Profile' , 'ProfileStrategy'];
  dataSource = ELEMENT_DATA;
  table: any;

  constructor(private router: Router) {}

  onEdit(element: PeriodicElement): void {
    // const indexToDelete = this.dataSource.findIndex(
    //   (periodicElement) => periodicElement.position === element.position
    // );
    // ELEMENT_DATA.splice(indexToDelete, 1);
    // this.dataSource = ELEMENT_DATA;
    // this.table.renderRows();
  }

  onDelete(element: PeriodicElement): void {
    // const indexToDelete = this.dataSource.findIndex(
    //   (periodicElement) => periodicElement.position === element.position
    // );
    // ELEMENT_DATA.splice(indexToDelete, 1);
    // this.dataSource = ELEMENT_DATA;
    // this.table.renderRows();
  }

  addNew() : void {
    this.router.navigate(['/addnew']);
  }
}

 
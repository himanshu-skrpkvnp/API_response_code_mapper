import { Component  , ViewChild} from '@angular/core';
import {MatTableModule , MatTable} from '@angular/material/table';
import { RouterModule, Router, RouterLink } from '@angular/router';




export interface PeriodicElement {
  ApiName : Number ;
  TestCase : String ;
  Result : String ;
  Message : String ;
  Profile : String ;
  ProfileStrategy : String ;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ApiName  : 1 , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static'},
  { ApiName  : 2 , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static'},
  { ApiName  : 3 , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static'},
  

];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] ,
  standalone: true,
  imports: [MatTableModule , RouterLink ],
})

export class MainComponent {
  displayedColumns: string[] = ['Actions', 'ApiName', 'TestCase', 'Result', 'Message' , 'Profile' , 'ProfileStrategy'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable) table: MatTable<PeriodicElement> | undefined;

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

 
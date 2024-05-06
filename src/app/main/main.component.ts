import { CommonModule, NgIf } from '@angular/common';
import { Component  , ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule , MatTable} from '@angular/material/table';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';




export interface PeriodicElement {
  ApiName : String ;
  TestCase : String ;
  Result : String ;
  Message : String ;
  Profile : String ;
  ProfileStrategy : String ;
  editMode : boolean ;
}

  var ELEMENT_DATA: PeriodicElement[] = [
  { ApiName  : "ApiReqVal" , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static'  , editMode : false },
  { ApiName  : "ApiReqVal2" , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static' , editMode : false},
  { ApiName  : "ApiReqVal3" , TestCase : '000',  Result : 'True',  Message : 'H'  ,Profile : 'True' , ProfileStrategy : 'static' , editMode : false},
  

];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] ,
  standalone: true,
  imports: [MatTableModule  ,  FormsModule , NgIf , CommonModule],
})

export class MainComponent {

  displayedColumns: string[] = ['Actions', 'ApiName', 'TestCase', 'Result', 'Message' , 'Profile' , 'ProfileStrategy'];
  dataSource = ELEMENT_DATA;
  
  @ViewChild(MatTable) table: MatTable<PeriodicElement> | undefined;
  private formDataSubscription : Subscription ;
  
  constructor(private router: Router , private dataService : SharedService) {
   
    // logic for the added data to be displayed 
    this.formDataSubscription = this.dataService.formData$.subscribe(data => {
      var newRow = {
        ApiName: data.rows[0].ApiName,
        TestCase: data.rows[0].TestCase,
        Result: data.rows[0].Result,
        Message: data.rows[0].Message,
        Profile: data.rows[0].Profile,
        ProfileStrategy: data.rows[0].ProfileStrategy ,
        editMode : false
      };
      this.dataSource.push( newRow ); // Push data object into dataSource array
      // console.log("this is datasource", this.dataSource)
      // if (this.table) {
      //   this.table.renderRows(); // Render rows if table exists
      // }
    });
  }


   // 
  //  ngOnInit() {
  //   this.formDataSubscription = this.dataService.formData$.subscribe(data => {
  //     this.dataSource.push(data); 
  //   });
  //  }

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
    console.log( ELEMENT_DATA.length ) ;
    }
  }

  addNew() : void {
    this.router.navigate(['/addnew']);
  }
  
  onFieldBlur( element : PeriodicElement) {
    const index = ELEMENT_DATA.findIndex(item => item === element);
    if (index !== -1) {
      console.log( index )
      ELEMENT_DATA[index] = { ...element };
   }  
    console.log( element ) ;
    console.log( ELEMENT_DATA  )
  }
   
  ngOnDistroy() {
     this.formDataSubscription.unsubscribe() ;
  }
 

  
}

 
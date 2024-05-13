import { CommonModule, NgIf } from '@angular/common';
import {  ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule , MatTable} from '@angular/material/table';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';



export interface PeriodicElement {
  ApiName : String;
  TestCase : String ;
  Result : String ;
  Message : String ;
  Profile : String ;
  ProfileStrategy : String ;
  editMode : boolean ;
}

  var ELEMENT_DATA: PeriodicElement[] = [
   

];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] ,
  standalone: true,
  imports: [MatTableModule  ,  FormsModule , NgIf , CommonModule , MatFormFieldModule , MatInputModule , MatIconModule ],
})

export class MainComponent {


  displayedColumns: string[] = ['Actions', 'ApiName', 'TestCase', 'Result', 'Message' , 'Profile' , 'ProfileStrategy'];
  dataSource = ELEMENT_DATA ;
  
  @ViewChild(MatTable) table: MatTable<PeriodicElement> | undefined;
  private formDataSubscription : Subscription  | undefined;
filter: any;
value: any;

  
  constructor(private router: Router , private dataService : SharedService) {
   
    // this.formDataSubscription = undefined;
     
  }

   ngOnInit() : void {
    // private formDataSubscription : Subscription ;


    
    this.formDataSubscription = this.dataService.formDataSubject.pipe(take(1)).subscribe(data => {
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
    });
    
   }

  onEdit(element: PeriodicElement): void {
  
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
    if( this.formDataSubscription)
     this.formDataSubscription.unsubscribe() ;
   
  }
  customFilterPredicate(data: any, filter: string): boolean {
    let searchString = JSON.parse(filter);
    return data.name.toString().trim().indexOf(searchString.name) !== -1 &&
           data.department.toString().trim().indexOf(searchString.department) !== -1;
  }
  applyfilter( event : Event ){
     
  }
}

 
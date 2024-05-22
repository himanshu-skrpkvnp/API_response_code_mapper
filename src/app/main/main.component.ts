import { CommonModule, NgIf } from '@angular/common';
import {  ViewChild} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule , FormControl } from '@angular/forms';
import {MatTableModule , MatTable} from '@angular/material/table';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Pipe , PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
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

export class MainComponent  implements OnInit{


  displayedColumns: string[] = ['Actions', 'ApiName', 'TestCase', 'Result', 'Message' , 'Profile' , 'ProfileStrategy'];
  // dataSource = ELEMENT_DATA ;
  
  dataSource = new MatTableDataSource<PeriodicElement>( ELEMENT_DATA );
  public searchForm: FormGroup | undefined;

  
  @ViewChild(MatTable) table: MatTable<Element> | undefined;
  private formDataSubscription : Subscription  | undefined;
  filter: any;
  value: any;
  

  
  constructor(private router: Router , private dataService : SharedService , public dialog : MatDialog ) {
   
    // this.formDataSubscription = undefined;
     
  }

   ngOnInit() : void {
     this.dataSource.filterPredicate = ( data : PeriodicElement , filter : string ) => {
     return   data.ApiName.trim().toLowerCase().indexOf(filter) != -1;
    }
    
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
      const currentData = this.dataSource.data;
      currentData.push(newRow);
      this.dataSource.data = currentData; // Push data object into dataSource array
    });
    
   }

  onEdit(element: PeriodicElement): void {
  
  }


  toggleEditMode(element: PeriodicElement): void {
    element.editMode = !element.editMode;
  }
  

  onDelete(element: PeriodicElement): void {
    const indexToDelete = this.dataSource.data.findIndex(
      (item) => item.ApiName === element.ApiName
    );
    
    if (indexToDelete !== -1) {
        const newData = this.dataSource.data.slice();
      
       newData.splice(indexToDelete, 1);
      
      this.dataSource.data = newData;
      
       if (this.table) {
        this.table.renderRows();
      }
      console.log(newData.length);
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

  
  
  applyfilter( event : KeyboardEvent ){
     const value = ( event.target as HTMLInputElement ).value ;
     
     if( value !==  null && value !== undefined  ){
            
        var  filtervalue = value.trim() ;
        filtervalue = filtervalue.toLowerCase() ;
        this.dataSource.filter = filtervalue;

     }
      
    }

   openEditDialog( row_obj : any ) {
    var data : any ;
    let dialogRef = this.dialog.open(DialogboxComponent , { width : '500px'  , 
        data: {  
          ApiName : row_obj.ApiName ,
          TestCase : row_obj.TestCase ,
          Result : row_obj.Result ,
          Message : row_obj.Message ,
          Profile : row_obj.Profile ,
          ProfileStrategy : row_obj.ProfileStrategy , 

          }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log( row_obj.ApiName ) ;
      if (result) {
        const index = this.dataSource.data.findIndex(
          (item) => item.ApiName === row_obj.ApiName
        );
        if (index !== -1) {
          this.dataSource.data[index] = row_obj ;
          console.log( row_obj  ) ;
          this.dataSource = new MatTableDataSource(this.dataSource.data);
          if (this.table) {
            this.table.renderRows();
          }
        }
      }
    });
   }

  
}

 
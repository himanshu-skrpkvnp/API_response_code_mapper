import { Component  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';



interface FormRow {
  ApiName: string;
  TestCase: string;
  Result: boolean;
  Message: string;
  Profile: boolean;
  ProfileStrategy?: string;
}

@Component({
  selector: 'app-addnew',
  
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
  standalone: true,
  imports: [ FormsModule , MatFormFieldModule , MatInputModule , MatProgressBarModule , CommonModule ],
})
export class AddnewComponent {

  
  formData: { rows: FormRow[] } = { rows: [] };
  
  
  
  constructor(private dataService : SharedService , private router : Router ) {
    this.addNewRow();
    //  this.dataService =  SharedService ; 
  }

  addNewRow(): void {
    this.formData.rows.push({
      ApiName: '',
      TestCase: '',
      Result: false,
      Message: '',
      Profile: false
    });
  }

  onSubmit(form: NgForm): void {
    // Handle form submission logic here
 this.dataService.updateFormData(this.formData);

    console.log("after submitting " , this.dataService.formDataSubject ) ;
   this.router.navigate(['/']);
  }

  onCancel(): void {
      
    this.formData.rows[0].ApiName = '' ;
    this.formData.rows[0].Result = false ;
    this.formData.rows[0].TestCase = '' ;
    this.formData.rows[0].Message = '' ;
    this.formData.rows[0].Profile = false ;
    
  }

  onProfileChange(event: any, index: number): void {
    if (event.target.value === 'true') {
      this.formData.rows[index].Profile = true;
    } else {
      this.formData.rows[index].Profile = false;
      this.formData.rows[index].ProfileStrategy = undefined;
    }
  }

  apiList()  : void {
    this.router.navigate(['/']);
  }

}

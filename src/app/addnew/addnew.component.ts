import { Component  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';



interface FormRow {
  apiName: string;
  testCase: string;
  result: boolean;
  message: string;
  profile: boolean;
  profileStrategy?: string;
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
  // private   dataService  ;
  
  
  constructor(private dataService : SharedService , private router : Router ) {
    this.addNewRow();
    //  this.dataService =  SharedService ; 
  }

  addNewRow(): void {
    this.formData.rows.push({
      apiName: '',
      testCase: '',
      result: false,
      message: '',
      profile: false
    });
  }

  onSubmit(form: NgForm): void {
    // Handle form submission logic here

    console.log('Form submitted:', this.formData);
    this.dataService.updateFormData(this.formData);

    console.log("after submitting ") ;
    console.log( this.dataService.formDataSubject) ;
  }

  onCancel(): void {
      
    this.formData.rows[0].apiName = '' ;
    this.formData.rows[0].result = false ;
    this.formData.rows[0].testCase = '' ;
    this.formData.rows[0].message = '' ;
    this.formData.rows[0].profile = false ;
  }

  onProfileChange(event: any, index: number): void {
    if (event.target.value === 'true') {
      this.formData.rows[index].profile = true;
    } else {
      this.formData.rows[index].profile = false;
      this.formData.rows[index].profileStrategy = undefined;
    }
  }

  apiList()  : void {
    this.router.navigate(['/']);
  }

}

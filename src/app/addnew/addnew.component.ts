import { Component  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';


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

  // constructor() {
  //   this.addNewRow();
  // }
  constructor(private router: Router) {
    this.addNewRow();
  }

  addNewRow(): void {
    this.formData.rows.push({
      apiName: '',
      testCase: '',
      result: true,
      message: '',
      profile: false
    });
  }

  onSubmit(form: NgForm): void {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
  }

  onCancel(): void {
    // Handle cancel button click logic here
    console.log('Form cancelled');
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

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-addnew',
  
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
  standalone: true,
  imports: [ FormsModule , MatFormFieldModule , MatInputModule , MatProgressBarModule ],
})
export class AddnewComponent {
onProfileChange($event: Event,_t11: any) {
throw new Error('Method not implemented.');
}
onCancel() {
throw new Error('Method not implemented.');
}
onSubmit() {
throw new Error('Method not implemented.');
}

  formData: any = {
    apiname : '',
    testcase : '',
    message : '',
    result : false,
    profile : false,
    profilestrategy : ''
  };

  constructor(private router: Router) {
  }


  apiList()  : void {
    this.router.navigate(['/']);
  }

}

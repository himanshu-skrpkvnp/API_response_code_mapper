import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addnew',
  
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
  standalone: true,
  imports: [ FormsModule , MatFormFieldModule , MatInputModule],
})
export class AddnewComponent {

  constructor(private router: Router) {
  }


  apiList()  : void {
    this.router.navigate(['/']);
  }

}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-addnew',
  
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
  // imports : [ RouterLink ]
})
export class AddnewComponent {

  constructor(private router: Router) {
   
  }
  apiList()  : void {
    this.router.navigate(['/']);
  }

}

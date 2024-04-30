import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  // imports : [CommonModule, RouterOutlet, RouterLink, RouterLinkActive] ,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
})
export class AppComponent {
  title = 'API_response_code_mapper';
}

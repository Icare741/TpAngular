import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  version: number;
  constructor() { 
    this.version = 0;
    
  }

  ngOnInit(): void {
    
  }


  
  incrementVersion() {
    console.log('version test');
    this.version++;
    
  }
  decrementVersion() {
    this.version--;
  }

}


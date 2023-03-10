import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.css']
})
export class IconNavComponent {
  
    public myicon= faBars;
    constructor() { }
  
    ngOnInit(): void {
    }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {

  bool: boolean;

  constructor() {
    this.bool = true;}

  toggle(){
    this.bool = !this.bool;
  }
}

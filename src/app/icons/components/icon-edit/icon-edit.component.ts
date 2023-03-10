import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.css']
})
export class IconEditComponent {

  public myicon= faEdit;
  constructor() { }

  ngOnInit(): void {
  }
}

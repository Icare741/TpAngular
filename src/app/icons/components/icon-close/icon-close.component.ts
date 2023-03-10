import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.css']
})
export class IconCloseComponent implements OnInit {

  public myicon= faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}



import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-tiffinproviderhome',
  templateUrl: './tiffinproviderhome.component.html',
  styleUrls: ['./tiffinproviderhome.component.scss']
})
export class TiffinproviderhomeComponent implements OnInit {
  showFiller = false;

  showContent='tiffinhome';
  constructor() { }

  ngOnInit(): void {
  }

  

}

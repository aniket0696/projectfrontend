import { Component, OnInit } from '@angular/core';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-tiffin-declained-menu',
  templateUrl: './tiffin-declained-menu.component.html',
  styleUrls: ['./tiffin-declained-menu.component.scss']
})
export class TiffinDeclainedMenuComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
  }

}

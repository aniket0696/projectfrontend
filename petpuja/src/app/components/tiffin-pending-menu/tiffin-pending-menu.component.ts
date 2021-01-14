import { Component, OnInit } from '@angular/core';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-tiffin-pending-menu',
  templateUrl: './tiffin-pending-menu.component.html',
  styleUrls: ['./tiffin-pending-menu.component.scss']
})
export class TiffinPendingMenuComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
  }

}

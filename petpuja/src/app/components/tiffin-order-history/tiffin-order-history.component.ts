import { Component, OnInit } from '@angular/core';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-tiffin-order-history',
  templateUrl: './tiffin-order-history.component.html',
  styleUrls: ['./tiffin-order-history.component.scss']
})
export class TiffinOrderHistoryComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
  }

}

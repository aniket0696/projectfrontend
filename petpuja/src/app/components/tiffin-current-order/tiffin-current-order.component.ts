import { Component, OnInit } from '@angular/core';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-tiffin-current-order',
  templateUrl: './tiffin-current-order.component.html',
  styleUrls: ['./tiffin-current-order.component.scss']
})
export class TiffinCurrentOrderComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
  }

}

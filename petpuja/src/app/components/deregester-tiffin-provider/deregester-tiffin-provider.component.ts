import { Component, OnInit } from '@angular/core';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-deregester-tiffin-provider',
  templateUrl: './deregester-tiffin-provider.component.html',
  styleUrls: ['./deregester-tiffin-provider.component.scss']
})
export class DeregesterTiffinProviderComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
  }

}

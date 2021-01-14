import { Component, OnInit } from '@angular/core';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-add-tiffin-menu',
  templateUrl: './add-tiffin-menu.component.html',
  styleUrls: ['./add-tiffin-menu.component.scss']
})
export class AddTiffinMenuComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
  }

}

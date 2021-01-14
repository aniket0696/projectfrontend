import { Component, OnInit } from '@angular/core';
import { TiffinProviderMenu } from 'src/app/models/TiffinProviderMenu';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-tiffin-menu',
  templateUrl: './tiffin-menu.component.html',
  styleUrls: ['./tiffin-menu.component.scss']
})
export class TiffinMenuComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  menuList:TiffinProviderMenu[];
  id:Number;
  ngOnInit(): void {
    this.id=50000000000003;
    debugger
    this.tiffinService.getTiffinProviderMymenu(this.id).subscribe(data=>{
      this.menuList=data;
      console.log(this.menuList);
    });
  }

}

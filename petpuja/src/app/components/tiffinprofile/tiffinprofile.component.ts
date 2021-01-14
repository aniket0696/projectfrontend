import { Component, OnInit } from '@angular/core';
import { TiffinProvider } from 'src/app/models/tiffinprovider';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-tiffinprofile',
  templateUrl: './tiffinprofile.component.html',
  styleUrls: ['./tiffinprofile.component.scss']
})
export class TiffinprofileComponent implements OnInit {

  id: Number;
  tiffinProvider: TiffinProvider;
  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
    
    this.tiffinProvider=new TiffinProvider();
    this.id=50000000000002;
    this.tiffinService.getTiffinProviderById(this.id)
    .subscribe(data=>{
      this.tiffinProvider=data;
      console.log("details of tiffin provider");
      console.log(this.tiffinProvider);
    },error=>console.log(error));
  }

}

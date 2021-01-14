import { Component, OnInit } from '@angular/core';
import { TiffinProvider } from 'src/app/models/tiffinprovider';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';
import { FormBuilder, Validators } from "@angular/forms";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-update-tiffin-provider',
  templateUrl: './update-tiffin-provider.component.html',
  styleUrls: ['./update-tiffin-provider.component.scss']
})
export class UpdateTiffinProviderComponent implements OnInit {

  
  id: number;
  tiffinProvider: TiffinProvider;
  email = new FormControl('', [Validators.required, Validators.email]);
  fullname = new FormControl('', [Validators.required]);
  restaurantName=new FormControl('', [Validators.required]);
  houseNo =new FormControl('', [Validators.required]);
  locality =new FormControl('', [Validators.required]);
  street1 =new FormControl('', [Validators.required]);
  street2 =new FormControl('', [Validators.required]);
  stateName  =new FormControl('', [Validators.required]);
  country =new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private formBuilder: FormBuilder,private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
    this.tiffinProvider=new TiffinProvider();
    this.id=50000000000002;
    this.tiffinService.getTiffinProviderById(this.id)
    .subscribe(data=>{
      this.tiffinProvider=data;
      console.log("details of tiffin in update provider");
      console.log(this.tiffinProvider);
    },error=>console.log(error));

  }

  updateTiffinProvider()
  {
    alert("submitted");
      this.tiffinService.updateTiffinProvider(this.id,this.tiffinProvider)
  }
  onSubmit()
  {
    this.updateTiffinProvider();
  }
  
}

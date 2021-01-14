import { Component, OnInit } from '@angular/core';
import { TiffinserviceService } from 'src/app/services/tiffinservice.service';

@Component({
  selector: 'app-tiffin-feedback',
  templateUrl: './tiffin-feedback.component.html',
  styleUrls: ['./tiffin-feedback.component.scss']
})
export class TiffinFeedbackComponent implements OnInit {

  constructor(private tiffinService: TiffinserviceService) { }

  ngOnInit(): void {
  }

}

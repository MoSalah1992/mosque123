import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit{
 

  @Input()imageURL:any
  @Input()imageName:any


  ngOnInit(): void {
  }
}

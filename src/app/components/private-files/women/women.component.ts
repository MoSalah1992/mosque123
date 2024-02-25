import { Component, OnInit } from '@angular/core';
import { PrivateFilesService } from '../PrivateFiles.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  filesList:any=[];
  
  // cardList=[
  //   {name:'Women Invitation cards',rout:'Invitation'},
  //   {name:'Women Fatwa',rout:'Fatwa'},
  //   {name:'Women Video',rout:'Video'},
  //   {name:'Women Audio',rout:'Audio'},
  //   {name:'Women Articles',rout:'Articles'},

  // ]

  cardList=[
    {name:`Women Invitation cards`,rout:'/Invitation'},
    {name:`Women Fatwa`,rout:'/Fatwa'},
    {name:`Women Video`,rout:'/media/video/filter'},
    {name:`Women Audio`,rout:'/media/audio/filter'},
    {name:`Women Articles`,rout:'/media/articles'},
  

  ]

  constructor(
    private privateFilesService:PrivateFilesService
  ){

  }
  ngOnInit() {

    this.getPrivateFileByid('2')

  }


  getPrivateFileByid(fileId:any) {
    this.privateFilesService.getPrivateFileByid(fileId).subscribe({
      next: (data) => {
        
        if (data) {
          this.filesList = data;
          

        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }


  openBanner(openURL:any){
    


  }

  

}

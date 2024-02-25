import { Component, OnInit } from '@angular/core';
import { PrivateFilesService } from '../PrivateFiles.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  filesList:any=[];



  cardList=[
    {name:`Kides Invitation cards`,rout:'/Invitation'},
    {name:`Kides Fatwa`,rout:'/Fatwa'},
    {name:`Kides Video`,rout:'/media/video/filter'},
    {name:`Kides Audio`,rout:'/media/audio/filter'},
    {name:`Kides Articles`,rout:'/media/articles'},
  

  ]

  constructor(
    private privateFilesService:PrivateFilesService

  ){

  }
  ngOnInit() {

    this.getPrivateFileByid('3')

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

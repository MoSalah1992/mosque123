import { Component, OnInit } from '@angular/core';
import { PrivateFilesService } from '../PrivateFiles.service';

@Component({
  selector: 'app-ramadan',
  templateUrl: './ramadan.component.html',
  styleUrls: ['./ramadan.component.scss'],
})
export class RamadanComponent implements OnInit {
  filesList: any = [];

  cardList = [
    { name: 'Ramadan Invitation cards', rout: 'Invitation' },
    { name: 'Ramadan Fatwa', rout: 'Fatwa' },
    { name: 'Ramadan Video', rout: 'Video' },
    { name: 'Ramadan Audio', rout: 'Audio' },
    { name: 'Ramadan Articles', rout: 'Articles' },
  ];
  constructor(private privateFilesService: PrivateFilesService) {}
  ngOnInit() {
    this.getPrivateFileByid('9');
  }

  getPrivateFileByid(fileId: any) {
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

  openBanner(openURL: any) {
    
  }
}

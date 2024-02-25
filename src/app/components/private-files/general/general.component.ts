import { Component, OnInit } from '@angular/core';
import { PrivateFilesService } from '../PrivateFiles.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  filesList:any=[];
  
  cardList:any[]=[];
  constructor(
    private privateFilesService:PrivateFilesService
  ){

  }
  ngOnInit() {

    this.getPrivateFileByid(history.state.fileId);

  }


  getPrivateFileByid(fileId:any) {
    this.privateFilesService.getPrivateFileByid(fileId).subscribe({
      next: (data) => {
        
        if (data) {
          
          this.filesList = data;

          this.cardList=[
            {name:`${this.filesList.title_En} Invitation cards`,rout:'/Invitation'},
            {name:`${this.filesList.title_En} Fatwa`,rout:'/Fatwa'},
            {name:`${this.filesList.title_En} Video`,rout:'/media/video/filter'},
            {name:`${this.filesList.title_En} Audio`,rout:'/media/audio/filter'},
            {name:`${this.filesList.title_En} Articles`,rout:'/media/articles'},
          
        
          ]
          

        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }


  openBanner(openURL:any){
    
  }

  getColor(str: string): string {
    // Generate a color based on the string
    const hash = this.hashCode(str);
    const hue = parseInt(hash.substring(0, 2), 16); // Use the first two characters of the hash as the hue value
    const saturation = 70; // Fixed saturation value (you can adjust this if needed)
    const lightness = 50 + parseInt(hash.substring(2, 4), 16) % 30; // Use the next two characters of the hash to adjust the lightness (ensuring it's not too light)

    // Convert HSL values to CSS HSL color format
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  // Hash function to generate a consistent hash value for a given string
  private hashCode(str: string): string {
    let hash = 0;
    if (str.length === 0) {
      return hash.toString();
    }
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-agaza',
  templateUrl: './agaza.component.html',
  styleUrls: ['./agaza.component.scss']
})
export class AgazaComponent {

  AgazaList=[
    {id:'1',name:'Book Agaza',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',image:'BookAgaza.png'},
    {id:'2',name:'alhadeth Agaza',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',image:'alhadethAgaza.png'},
    {id:'3',name:'Quran Agaza',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',image:'QuranAgaza.png'},
  ]

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
       }
       else{
         document.body.setAttribute('color-theme','light');
       }
      }
}

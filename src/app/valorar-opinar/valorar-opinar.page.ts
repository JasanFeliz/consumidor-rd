import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valorar-opinar',
  templateUrl: './valorar-opinar.page.html',
  styleUrls: ['./valorar-opinar.page.scss'],
})
export class ValorarOpinarPage implements OnInit {


  estrellas: Array<any>=[
    {
    estrella: 1,
    icon:'ion-ios-star-outline'
    },
    {
    estrella: 2,
    icon:'ion-ios-star-outline'
    },
    {
    estrella: 3,
    icon:'ion-ios-star-outline'
    },
    {
    estrella: 4,
    icon:'ion-ios-star-outline'
    },
    {
    estrella: 5,
    icon:'ion-ios-star-outline'
    }
    ];
  constructor() { }

  ngOnInit() {
  }

}

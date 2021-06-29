import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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


   opiniones = this.fb.group({

   titulo: ['', [Validators.required, Validators.minLength(3)]],
   opinion:  ['', [Validators.required, Validators.minLength(3)]],

   });



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

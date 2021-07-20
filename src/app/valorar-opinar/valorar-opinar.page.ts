import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
public respuesta: any;
empresas: any = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient) { }


   opiniones = this.fb.group({

   titulo: ['', [Validators.required, Validators.minLength(3)]],
   opinion:  ['', [Validators.required, Validators.minLength(3)]],

   });


   ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any)=>{
      const{params} = paramMap;
      this.cargarData(params.any);
    });
  }
  cargarData(empresas: string) {this.http
    .get('assets/data/empresas.json')
    .subscribe(empresa => {
      this.empresas = empresa;
    }

    );
}

}

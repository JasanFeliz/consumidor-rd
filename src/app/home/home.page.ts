import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  empresas: any = [];
  opiniones: any = [];



  constructor(
    private http: HttpClient)  { }



    ngOnInit() {
      this.getEmpresas().subscribe(res=>{
        console.log('res',res);
        this.empresas = res;
      });
      this.getOpiniones().subscribe(res=>{
        console.log('res',res);
        this.opiniones = res;
      });
    }
    getEmpresas() {return this.http
      .get('assets/data/empresas.json')
      .pipe(
        map((res: any) =>res.empresas)
      );
   }
  getOpiniones() {return this.http
    .get('assets/data/opiniones.json')
    .pipe(
      map((res: any) =>res.opiniones)
    );
}

}

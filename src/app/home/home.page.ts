import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categorias: any = [];
  
  
  constructor(
    private http: HttpClient) { }

   

    ngOnInit() {
      this.getCategorias().subscribe(res=>{
        console.log('res',res);
        this.categorias = res;
      });
    }
    getCategorias() {return this.http
      .get('assets/data/database.json')
      .pipe(
        map((res: any) =>res.categorias)
      );
  }

  
}
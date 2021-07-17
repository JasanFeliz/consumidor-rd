import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

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

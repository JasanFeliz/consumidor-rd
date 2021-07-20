import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.page.html',
  styleUrls: ['./perfil-empresa.page.scss'],
})
export class PerfilEmpresaPage implements OnInit {

  constructor(private http: HttpClient) { }

  empresas: any = [];

 
  ngOnInit() {
    this.getEmpresas().subscribe(res=>{
      console.log('res',res);
      this.empresas = res;
    });
  }
  getEmpresas() {return this.http
    .get('assets/data/empresas.json')
    .pipe(
      map((res: any) =>res.empresas)
    );
 }


}

 

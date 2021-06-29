import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-verificar-cuenta',
  templateUrl: './verificar-cuenta.page.html',
  styleUrls: ['./verificar-cuenta.page.scss'],
})
export class VerificarCuentaPage implements OnInit {

  verificar = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.compose([Validators.minLength(10), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
    numero: ['',[Validators.required, Validators.minLength(11)]]
  });
  
  
  
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

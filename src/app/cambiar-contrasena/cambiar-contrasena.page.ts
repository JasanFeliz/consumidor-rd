import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {


  contrasena = this.fb.group({
    contrasenaActual: ['', [Validators.required, Validators.minLength(6)]],
    contrasenaNueva: ['', [Validators.required, Validators.minLength(6)]],
    confirmarcontrasena: ['', [Validators.required, Validators.minLength(6)]],
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

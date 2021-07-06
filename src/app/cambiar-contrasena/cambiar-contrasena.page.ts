import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {


constructor(private fb: FormBuilder) { }

  contrasena = this.fb.group({
    contrasenaActual: ['', [Validators.required, Validators.minLength(6)]],
    contrasenaNueva: ['', [Validators.required, Validators.minLength(6)]],
    confirmarcontrasena: ['', [Validators.required, Validators.minLength(6)]],
  });


  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  passwordType1: string = 'password';
  passwordIcon1: string = 'eye-off';
 
  hideShowPassword1() {
      this.passwordType1 = this.passwordType1 === 'text' ? 'password' : 'text';
      this.passwordIcon1 = this.passwordIcon1 === 'eye-off' ? 'eye' : 'eye-off';
  }

  passwordType2: string = 'password';
  passwordIcon2: string = 'eye-off';
 
  hideShowPassword2() {
      this.passwordType2 = this.passwordType2 === 'text' ? 'password' : 'text';
      this.passwordIcon2 = this.passwordIcon2 === 'eye-off' ? 'eye' : 'eye-off';
  }


  ngOnInit() {
  }

}

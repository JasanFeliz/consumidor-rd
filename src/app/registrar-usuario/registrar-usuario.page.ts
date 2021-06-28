import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  usuario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.compose([Validators.minLength(10), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
    contrasena: ['', [Validators.required, Validators.minLength(8)]],
    confirmarcontrasena: ['', [Validators.required, Validators.minLength(8)]],
  });


constructor(private fb: FormBuilder) { }
  
  
ngOnInit() 
    
{}


}

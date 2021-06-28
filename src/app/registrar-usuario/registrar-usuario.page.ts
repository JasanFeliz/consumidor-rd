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
    email: ['', Validators.email],
    contrasena: ['', [Validators.required, Validators.minLength(8)]],
    confirmarcontrasena: ['', [Validators.required, Validators.minLength(8)]],
  });


constructor(private fb: FormBuilder) { }
  
  
ngOnInit() 
    
{}


}

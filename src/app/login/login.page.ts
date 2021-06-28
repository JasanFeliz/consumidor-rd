import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login = this.fb.group({
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', Validators.email],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

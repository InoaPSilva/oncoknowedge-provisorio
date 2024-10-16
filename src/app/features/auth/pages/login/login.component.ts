import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  func(event: any) {
    console.log("event no login: " + JSON.stringify(event));

    const validEmail = 'inoa@gmail.com';
    const validPassword = 'admin123';

    const email = event.email;  // Pega o valor do campo "email" enviado pelo componente app-auth-form
    const password = event.senha; // Pega o valor do campo "senha" enviado pelo componente app-auth-form

    // Simulação de login
    if (email === validEmail && password === validPassword) {
      console.log('Login bem-sucedido');
      this.router.navigate(['home']);
    } else {
      console.log('Login falhou: credenciais inválidas');
    }
  }
}

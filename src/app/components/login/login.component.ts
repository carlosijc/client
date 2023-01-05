import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  
  }
  showEye() {
    const showPassword = document.querySelector('#show-password');
    const passwordField = document.querySelector('#pwd');
    showPassword.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") ==="password" ? "text" : "password";
    passwordField.setAttribute("type",type);
  }
}




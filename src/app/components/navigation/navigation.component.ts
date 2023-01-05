import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.router.navigateByUrl('/frequency');
    this.goToHome();
  }

  goToHome() {
    this.router.navigateByUrl("/");
  }
  
  goToFrequencies() {
    this.router.navigateByUrl("/frequency");
  }
  goToWinners() {
    this.router.navigateByUrl("/winners");
  }
  goToLogin(){
    this.router.navigateByUrl("/login");
  }
}

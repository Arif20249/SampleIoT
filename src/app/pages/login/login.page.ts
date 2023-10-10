import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavExtrasService } from 'src/app/services/nav-extras/nav-extras.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  param: any;
  constructor(
    private authServices : AuthService, 
    private navCtrl: NavController,
    private navExtras : NavExtrasService,
    private router: Router,) { }
    
  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl('dashboard');
  }
  
}

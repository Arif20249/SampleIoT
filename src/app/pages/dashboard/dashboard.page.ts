import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavExtrasService } from 'src/app/services/nav-extras/nav-extras.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  param: any;
  constructor(
    private authServices : AuthService, 
    private navCtrl: NavController,
    private navExtras : NavExtrasService,
    private router: Router,) { }
    
  ngOnInit() {
  }
  logout(){
    this.authServices.logout().then(() => {
      this.navCtrl.navigateRoot('/login');
    }).catch( e => 
      { 
        console.log(e);
      })
  }
  panel(){
    this.router.navigateByUrl('panel-control');
  }
  
}

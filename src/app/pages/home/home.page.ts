import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage implements OnInit {
  constructor(
    private platform: Platform,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.platform.backButton.subscribe(() => {
      console.log('atras');
      console.log(router.url);
      if (router.url === '/home') {
        // tslint:disable-next-line: no-string-literal
        navigator['app'].exitApp();
      }
      if (router.url === '/precios-hora' || router.url === 'comparar') {
        // tslint:disable-next-line: no-string-literal
        this.loadingController.dismiss('cargando');
      }
    });
  }

  ngOnInit() {}
}

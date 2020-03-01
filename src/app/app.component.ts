import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark'
    },
    {
      title: 'Ahorra en tu factura',
      url: '/ahorrar-factura',
      icon: 'logo-euro',
      colorIcon: 'dark',
      fondo: 'warning',
      texto: 'dark'
    },
    {
      title: 'Precios por periodo',
      url: '/precios-hora',
      icon: 'pie',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark'
    },
    {
      title: 'Comparar Precios',
      url: '/comparar',
      icon: 'podium',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark'
    },
    // {
    //   title: 'Logo',
    //   url: '/logo',
    //   icon: 'list',
    //   colorIcon: 'medium',
    //   fondo: '',
    //   texto: 'dark'
    // },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list',
    //   colorIcon: 'medium',
    //   fondo: '',
    //   texto: 'dark'
    // },
    // {
    //   title: 'Gráficos',
    //   url: '/graficos',
    //   icon: 'pie',
    //   colorIcon: 'medium',
    //   fondo: '',
    //   texto: 'dark'
    // },
    // {
    //   title: 'Peninsula',
    //   url: '/peninsula',
    //   icon: 'water',
    //   colorIcon: 'medium',
    //   fondo: '',
    //   texto: 'dark'
    // },
    // {
    //   title: 'Empresa',
    //   url: '/empresa',
    //   icon: 'business',
    //   colorIcon: 'medium',
    //   fondo: '',
    //   texto: 'dark'
    // },
    {
      title: 'Ajustes',
      url: '/ajustes',
      icon: 'settings',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark'
    },
    {
      title: 'Contactar',
      url: '/contactar',
      icon: 'call',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark'
    },
    {
      title: 'Ayuda',
      url: '/ayuda',
      icon: 'help-circle-outline',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

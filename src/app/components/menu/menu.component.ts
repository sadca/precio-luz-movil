import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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
      fondo: '',
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

  constructor() {}

  ngOnInit() {
    console.log(window.location.href);
  }

  cambioColor(page: any) {
    // this.appPages.forEach(pagina => {
    //   pagina.fondo = '';
    // });
    // page.fondo = 'warning';
  }
}

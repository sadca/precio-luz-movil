import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark',
    },
    {
      title: 'Ahorra en tu factura',
      url: '/ahorrar-factura',
      icon: 'logo-euro',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark',
    },
    {
      title: 'Precios por hora',
      url: '/precios-hora',
      icon: 'pie',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark',
    },
    {
      title: 'Comparar Precios',
      url: '/comparar',
      icon: 'podium',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark',
    },
    {
      title: 'Ajustes',
      url: '/ajustes',
      icon: 'settings',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark',
    },
    {
      title: 'Contactar',
      url: '/contactar',
      icon: 'call',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark',
    },
    {
      title: 'Ayuda',
      url: '/ayuda',
      icon: 'help-circle-outline',
      colorIcon: 'dark',
      fondo: '',
      texto: 'dark',
    },
  ];

  constructor(
    private socialSharing: SocialSharing,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  compartir() {
    const texto =
      'Consulta el precio de la luz diario con esta app: https://play.google.com/store/apps/details?id=es.sadca.energy.ahorraluz';
    this.socialSharing
      .share(texto)
      .then(() => {
        console.log('Si se puede compartir');
      })
      .catch(() => {
        console.log('No se ha podido compartir');
      });
  }

  cambioColor(page: any) {
    // this.appPages.forEach(pagina => {
    //   pagina.fondo = '';
    // });
    // page.fondo = 'warning';
  }

  async salir() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Está seguro de que quiere salir de la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Salir',
          cssClass: 'text-danger',
          handler: () => {
            // tslint:disable-next-line: no-string-literal
            navigator['app'].exitApp();
          },
        },
      ],
    });

    await alert.present();
  }
}

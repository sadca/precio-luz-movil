import { Component, OnInit } from '@angular/core';
import { EsiosService } from '../../services/esios.service';
import {
  LoadingController,
  IonSlides,
  NavController,
  AlertController,
} from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import chartJs from 'chart.js';
import { PreciosHoraAyudaComponent } from '../../components/ayuda/precios-hora-ayuda/precios-hora-ayuda.component';

@Component({
  selector: 'app-precios-hora',
  templateUrl: './precios-hora.page.html',
  styleUrls: ['./precios-hora.page.scss'],
})
export class PreciosHoraPage implements OnInit {
  @ViewChild('lineCanvas', { static: true }) lineCanvas: any;
  @ViewChild('capas', { static: true }) capas: IonSlides;

  cargando: boolean = true;
  vistaDetalle: boolean = false;
  loading: any = null;
  lineChart: any;
  paginaActual = 1;
  precios: any = [];

  preciosHoy: any = [];
  preMedioHoy: number = 0;
  preHoyMenor: any = {
    precio: 1,
    fecha: new Date(),
  };
  preHoyMayor: any = {
    precio: 0,
    fecha: new Date(),
  };

  preciosMan: any = [];
  preMedioMan: number = 0;
  preManMenor: any = {
    precio: 1,
    fecha: new Date(),
  };
  preManMayor: any = {
    precio: 0,
    fecha: new Date(),
  };

  preciosAyer: any = [];
  preMedioAyer: number = 0;
  preAyerMenor: any = {
    precio: 1,
    fecha: new Date(),
  };
  preAyerMayor: any = {
    precio: 0,
    fecha: new Date(),
  };

  precioBajoHoy1: number = 1;
  precioBajoHoy2: number = 1;
  precioBajoHoy3: number = 1;
  precioAltoHoy1: number = 0;
  precioAltoHoy2: number = 0;
  precioAltoHoy3: number = 0;

  precioBajoMan1: number = 1;
  precioBajoMan2: number = 1;
  precioBajoMan3: number = 1;
  precioAltoMan1: number = 0;
  precioAltoMan2: number = 0;
  precioAltoMan3: number = 0;

  precioBajoAyer1: number = 1;
  precioBajoAyer2: number = 1;
  precioBajoAyer3: number = 1;
  precioAltoAyer1: number = 0;
  precioAltoAyer2: number = 0;
  precioAltoAyer3: number = 0;

  hoy: string = moment(new Date(moment().format('YYYY-MM-DD HH:mm:ss')))
    .format('')
    .substring(0, 13);

  constructor(
    private esiosServ: EsiosService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public modalController: ModalController,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: '<img src="assets/logos/logo.gif">',
      spinner: null,
      cssClass: 'logo-cargando',
      id: 'cargando',
    });

    await this.loading.present();

    await this.getDatos();

    this.cargando = false;

    this.lineChart = this.getLineChart();

    this.loadingController.dismiss('cargando');
  }

  async getDatos() {
    const ayer: string = moment(
      new Date(moment().subtract(1, 'days').format('YYYY-MM-DD'))
    )
      .subtract(2, 'hours')
      .format();

    let hoy: string = moment(new Date(moment().format('YYYY-MM-DD')))
      .subtract(3, 'hours')
      .format();

    let manana = moment(new Date(moment().add(1, 'days').format('YYYY-MM-DD')))
      .subtract(3, 'hours')
      .format();
    const pasado = moment(
      new Date(moment().add(2, 'days').format('YYYY-MM-DD'))
    )
      .subtract(2, 'hours')
      .format();

    await this.esiosServ.getPreciosPorFecha(ayer, hoy).then((data: any) => {
      this.preciosAyer = data;
      for (const precio of this.preciosAyer) {
        this.preMedioAyer += precio.value;

        if (precio.value < this.precioBajoAyer3) {
          if (precio.value < this.precioBajoAyer2) {
            if (precio.value < this.precioBajoAyer1) {
              this.precioBajoAyer1 = precio.value;
            } else {
              this.precioBajoAyer2 = precio.value;
            }
          } else {
            this.precioBajoAyer3 = precio.value;
          }
        }

        if (precio.value > this.precioAltoAyer3) {
          if (precio.value > this.precioAltoAyer2) {
            if (precio.value > this.precioAltoAyer1) {
              this.precioAltoAyer1 = precio.value;
            } else {
              this.precioAltoAyer2 = precio.value;
            }
          } else {
            this.precioAltoAyer3 = precio.value;
          }
        }

        if (precio.value < this.preAyerMenor.precio) {
          this.preAyerMenor.precio = precio.value;
          this.preAyerMenor.fecha = precio.datetime;
        }

        if (precio.value > this.preAyerMayor.precio) {
          this.preAyerMayor.precio = precio.value;
          this.preAyerMayor.fecha = precio.datetime;
        }
      }
      this.preMedioAyer = this.preMedioAyer / this.preciosAyer.length;
    });

    hoy = moment(hoy).add(1, 'hours').format();

    await this.esiosServ.getPreciosPorFecha(hoy, manana).then((data: any) => {
      this.preciosHoy = data;

      for (const precio of this.preciosHoy) {
        this.preMedioHoy += precio.value;

        if (precio.value < this.precioBajoHoy3) {
          if (precio.value < this.precioBajoHoy2) {
            if (precio.value < this.precioBajoHoy1) {
              this.precioBajoHoy1 = precio.value;
            } else {
              this.precioBajoHoy2 = precio.value;
            }
          } else {
            this.precioBajoHoy3 = precio.value;
          }
        }

        if (precio.value > this.precioAltoHoy3) {
          if (precio.value > this.precioAltoHoy2) {
            if (precio.value > this.precioAltoHoy1) {
              this.precioAltoHoy1 = precio.value;
            } else {
              this.precioAltoHoy2 = precio.value;
            }
          } else {
            this.precioAltoHoy3 = precio.value;
          }
        }

        if (precio.value < this.preHoyMenor.precio) {
          this.preHoyMenor.precio = precio.value;
          this.preHoyMenor.fecha = precio.datetime;
        }

        if (precio.value > this.preHoyMayor.precio) {
          this.preHoyMayor.precio = precio.value;
          this.preHoyMayor.fecha = precio.datetime;
        }
      }
      this.preMedioHoy = this.preMedioHoy / this.preciosHoy.length;
    });

    manana = moment(manana).add(1, 'hours').format();
    await this.esiosServ
      .getPreciosPorFecha(manana, pasado)
      .then((data: any) => {
        this.preciosMan = data;
        for (const precio of this.preciosMan) {
          this.preMedioMan += precio.value;

          if (precio.value < this.precioBajoMan3) {
            if (precio.value < this.precioBajoMan2) {
              if (precio.value < this.precioBajoMan1) {
                this.precioBajoMan1 = precio.value;
              } else {
                this.precioBajoMan2 = precio.value;
              }
            } else {
              this.precioBajoMan3 = precio.value;
            }
          }

          if (precio.value > this.precioAltoMan3) {
            if (precio.value > this.precioAltoMan2) {
              if (precio.value > this.precioAltoMan1) {
                this.precioAltoMan1 = precio.value;
              } else {
                this.precioAltoMan2 = precio.value;
              }
            } else {
              this.precioAltoMan3 = precio.value;
            }
          }

          if (precio.value < this.preManMenor.precio) {
            this.preManMenor.precio = precio.value;
            this.preManMenor.fecha = precio.datetime;
          }

          if (precio.value > this.preManMayor.precio) {
            this.preManMayor.precio = precio.value;
            this.preManMayor.fecha = precio.datetime;
          }
        }
        this.preMedioMan = this.preMedioMan / this.preciosMan.length;
      });

    return new Promise((resolve) => {
      if (this.preciosHoy.length === 0) {
        this.presentAlert();
      }
      return resolve('terminado');
    });
  }

  cambioSolapa() {
    this.capas.getActiveIndex().then((num: number) => {
      this.paginaActual = num;
    });
  }

  irA(num: number) {
    this.capas.slideTo(num);
    this.paginaActual = num;
  }

  getChart(context: any, chartType: any, data: any, options?: any) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  getLineChart() {
    const valoresGraficaPreciosHoy: any[] = [];
    const labelsGraficaPreciosHoy: any[] = [];

    for (const precio of this.preciosHoy) {
      valoresGraficaPreciosHoy.push(precio.value);
      labelsGraficaPreciosHoy.push(moment(precio.datetime).format('HH'));
    }

    const data = {
      labels: labelsGraficaPreciosHoy,
      datasets: [
        {
          label: 'Precios Hoy',
          data: valoresGraficaPreciosHoy,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgb(103, 103, 255)',
          borderColor: 'rgb(140, 140, 255)',
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointRadius: 2,
        },
      ],
    };

    return this.getChart(this.lineCanvas.nativeElement, 'line', data);
  }

  cambiarVistaDetalle() {
    if (this.vistaDetalle === true) {
      this.vistaDetalle = false;
    } else {
      this.vistaDetalle = true;
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PreciosHoraAyudaComponent,
    });
    return await modal.present();
  }

  showInfo() {
    this.presentModal();
  }

  horaMas(fecha: Date) {
    return moment(fecha).add(1, 'hours');
  }

  isNow(fecha: Date) {
    return (
      moment().format('YYYY-MM-DD H') === moment(fecha).format('YYYY-MM-DD H')
    );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message:
        'Ha ocurrido un error, vuelva a intentarlo más tarde. Revise su conexión a internet',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

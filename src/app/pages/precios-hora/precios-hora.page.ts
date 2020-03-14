import { Component, OnInit } from '@angular/core';
import { EsiosService } from '../../services/esios.service';
import { LoadingController, IonSlides, NavController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import * as moment from 'moment';
import chartJs from 'chart.js';

@Component({
  selector: 'app-precios-hora',
  templateUrl: './precios-hora.page.html',
  styleUrls: ['./precios-hora.page.scss']
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
    fecha: new Date()
  };
  preHoyMayor: any = {
    precio: 0,
    fecha: new Date()
  };

  preciosMan: any = [];
  preMedioMan: number = 0;
  preManMenor: any = {
    precio: 1,
    fecha: new Date()
  };
  preManMayor: any = {
    precio: 0,
    fecha: new Date()
  };

  preciosAyer: any = [];
  preMedioAyer: number = 0;
  preAyerMenor: any = {
    precio: 1,
    fecha: new Date()
  };
  preAyerMayor: any = {
    precio: 0,
    fecha: new Date()
  };

  hoy: string = moment(new Date(moment().format('YYYY-MM-DD HH:mm:ss')))
    .format('')
    .substring(0, 13);

  constructor(
    private esiosServ: EsiosService,
    public loadingController: LoadingController,
    public navCtrl: NavController
  ) {}

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      id: 'cargando'
    });

    await this.loading.present();

    await this.getDatos();

    this.cargando = false;

    this.lineChart = this.getLineChart();

    this.loadingController.dismiss('cargando');
  }

  async getDatos() {
    const ayer: string = moment(
      new Date(
        moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD')
      )
    )
      .subtract(1, 'hours')
      .format();

    let hoy: string = moment(new Date(moment().format('YYYY-MM-DD')))
      .subtract(2, 'hours')
      .format();

    let manana = moment(
      new Date(
        moment()
          .add(1, 'days')
          .format('YYYY-MM-DD')
      )
    )
      .subtract(2, 'hours')
      .format();
    const pasado = moment(
      new Date(
        moment()
          .add(2, 'days')
          .format('YYYY-MM-DD')
      )
    ).format();

    // this.preciosAyer = await this.esiosServ.getPreciosPorFecha(ayer, hoy);
    await this.esiosServ.getPreciosPorFecha(ayer, hoy).then((data: any) => {
      this.preciosAyer = data;
      for (const precio of this.preciosAyer) {
        this.preMedioAyer += precio.value;

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

    hoy = moment(new Date(moment().format('YYYY-MM-DD')))
      .subtract(1, 'hours')
      .format();

    // this.preciosHoy = await this.esiosServ.getPreciosPorFecha(hoy, manana);
    await this.esiosServ.getPreciosPorFecha(hoy, manana).then((data: any) => {
      this.preciosHoy = data;
      for (const precio of this.preciosHoy) {
        this.preMedioHoy += precio.value;

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

    // console.log(this.preciosHoy);

    manana = moment(
      new Date(
        moment()
          .add(1, 'days')
          .format('YYYY-MM-DD')
      )
    )
      .subtract(1, 'hours')
      .format();

    // this.preciosMan = await this.esiosServ.getPreciosPorFecha(manana, pasado);
    await this.esiosServ
      .getPreciosPorFecha(manana, pasado)
      .then((data: any) => {
        this.preciosMan = data;
        for (const precio of this.preciosMan) {
          this.preMedioMan += precio.value;

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

    return new Promise(resolve => {
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
      type: chartType
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
          pointRadius: 2
        }
      ]
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
}

import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import {
  NavController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import chartJs from 'chart.js';
import { EsiosService } from '../../services/esios.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { CompararPreciosAyudaComponent } from '../../components/ayuda/comparar-precios-ayuda/comparar-precios-ayuda.component';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.page.html',
  styleUrls: ['./comparar.page.scss'],
})
export class CompararPage implements OnInit {
  @ViewChild('lineCanvas', { static: true }) lineCanvas;

  loading: any = null;

  lineChart: any;
  fecha: any = moment(new Date(moment().format('YYYY-MM-DD'))).format();
  hoy: string = moment().format('YYYY-MM-DD');
  fechasComparar: string[] = [];
  manana: string = moment().add(1, 'days').format('YYYY-MM-DD');
  labels: any[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];

  datos: any[] = [];
  data: any = {
    labels: this.labels,
    // datasets: [
    //   {
    //     label: 'Precios Hoy',
    //     data: this.datos,
    //     fill: false,
    //     lineTension: 0.1,
    //     backgroundColor: 'rgb(103, 103, 255)',
    //     borderColor: 'rgb(140, 140, 255)',
    //     borderCapStyle: 'butt',
    //     borderJoinStyle: 'miter',
    //     pointRadius: 2
    //   }
    // ]
  };

  constructor(
    private esiosServ: EsiosService,
    public navCtrl: NavController,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    const options = {
      color: [
        'red', // color for data at index 0
        'blue', // color for data at index 1
        'green', // color for data at index 2
        'black', // color for data at index 3
      ],
    };
    this.lineChart = new chartJs(this.lineCanvas.nativeElement, {
      data: this.data,
      options,
      type: 'line',
    });
  }

  async nuevaFecha() {
    this.loading = await this.loadingController.create({
      message: '<img src="assets/logos/logo.gif">',
      spinner: null,
      cssClass: 'logo-cargando',
      id: 'cargando',
    });
    await this.loading.present();

    if (this.fechasComparar.length >= 4) {
      this.presentToast('No puede añadir más de 4');
      this.loadingController.dismiss('cargando');
      return;
    }

    const desde: string = moment(this.fecha).subtract(1, 'hour').format();

    const hasta = moment(
      new Date(moment(this.fecha).add(1, 'days').format('YYYY-MM-DD'))
    ).format();

    for (const fecha of this.fechasComparar) {
      if (moment(desde).format('DD/MM/YYYY') === fecha) {
        this.presentToast('¡Fecha ya añadida!');
        this.loadingController.dismiss('cargando');
        return;
      }
    }
    // TODO: CAMBIAR COLORES CUANDO AÑADES NUEVOS
    const dataNueva = {
      label: moment(desde).format('DD/MM/YYYY'),
      data: [],
      fill: false,
      lineTension: 0.1,
      backgroundColor:
        'rgb(' +
        Math.round(Math.random() * 250) +
        ', ' +
        Math.round(Math.random() * 250) +
        ', ' +
        Math.round(Math.random() * 250) +
        ')',
      borderColor:
        'rgb(' +
        Math.round(Math.random() * 250) +
        ', ' +
        Math.round(Math.random() * 250) +
        ', ' +
        Math.round(Math.random() * 250) +
        ')',
      borderCapStyle: 'butt',
      borderJoinStyle: 'miter',
      pointRadius: 2,
    };
    await this.esiosServ.getPreciosPorFecha(desde, hasta).then((data: any) => {
      const precios = [];
      if (data.length !== 0) {
        this.fechasComparar.push(moment(desde).format('DD/MM/YYYY'));
        for (const valor of data) {
          precios.push(valor.value);
        }
        dataNueva.data = precios;
        this.lineChart.data.datasets.push(dataNueva);
        this.lineChart.update();
      } else {
        this.presentAlertConfirm('¡Sin datos!', 'No hay datos para esta fecha');
      }
    });
    this.loadingController.dismiss('cargando');
  }

  async borrarFecha(index: number) {
    this.loading = await this.loadingController.create({
      message: '<img src="assets/logos/logo.gif">',
      spinner: null,
      cssClass: 'logo-cargando',
      id: 'cargando',
    });
    await this.loading.present();
    for (let i = 0; i < this.lineChart.data.datasets.length; i++) {
      if (
        this.lineChart.data.datasets[i].label === this.fechasComparar[index]
      ) {
        this.fechasComparar.splice(index, 1);
        this.lineChart.data.datasets.splice(i, 1);
        this.lineChart.update();
        this.presentToast('Eliminado');
        break;
      }
    }
    setTimeout(() => {
      this.loadingController.dismiss('cargando');
    }, 500);
  }

  async presentAlertConfirm(cabecera: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: cabecera,
      message: mensaje,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CompararPreciosAyudaComponent,
    });
    return await modal.present();
  }

  showInfo() {
    this.presentModal();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, TOKEN, URL_WS } from '../config/config';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class EsiosService {
  precios: any = [];

  constructor(private http: HttpClient, private storage: Storage) {}

  async getPreciosPorFecha(desde: any, hasta: any) {
    return new Promise(async (resolve) => {
      await this.getPrecios(desde, hasta).then((data: any) => {
        if (data !== 'Error') {
          this.precios = data.values;
        } else {
          this.precios = [];
        }
      });

      for (let i = 0; i < this.precios.length; i++) {
        this.precios[i].value = this.precios[i].value / 1000;
      }

      return resolve(this.precios);
    });
  }

  getPrecios10211(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/10211';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN,
    });

    return new Promise((resolve) => {
      this.http.get(url, { headers, params }).subscribe(
        (resp: any) => {
          return resolve(resp.indicator);
        },
        (err: any) => {
          {
            console.log('Error', err);
            return resolve('Error');
          }
        }
      );
    });
  }

  async getPrecios(desde: any, hasta: any) {
    let url = URL_SERVICIOS;

    await this.storage.get('tarifa').then((valor) => {
      if (valor !== undefined && valor !== null) {
        if (valor === '20DHA') {
          url += 'indicators/1014';
        } else if (valor === '20DHS') {
          url += 'indicators/1015';
        } else {
          url += 'indicators/1013';
        }
      } else {
        url += 'indicators/1013';
        this.storage.set('tarifa', '20A');
      }
    });

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN,
    });

    return new Promise((resolve) => {
      this.http.get(url, { headers, params }).subscribe(
        (resp: any) => {
          return resolve(resp.indicator);
        },
        (err: any) => {
          {
            console.log('Error', err);
            return resolve('Error');
          }
        }
      );
    });
  }

  async getCosts(desde: any, hasta: any) {
    const url = URL_WS + '/costs';

    const datos = {
      desde,
      hasta,
      tarifa: '20A',
      periodo: '20A',
    };

    await this.storage.get('tarifa').then((valor) => {
      if (valor !== undefined && valor !== null) {
        datos.tarifa = valor;
      } else {
        datos.tarifa = '20A';
      }
    });

    const headers = new HttpHeaders({
      Authorization: TOKEN,
    });

    return new Promise((resolve) => {
      this.http.post(url, datos, { headers }).subscribe(
        (resp: any) => {
          return resolve(resp);
        },
        (err: any) => {
          {
            console.log('Error', err);
            return resolve('Error');
          }
        }
      );
    });
  }
}

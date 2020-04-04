import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, TOKEN } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EsiosService {
  precios = [];
  constructor(private http: HttpClient) {}

  sumarDatos(datos: any) {
    // console.log('datos', datos);
    for (let i = 0; i < datos.length; i++) {
      // console.log('vuelta', datos[i]);
      this.precios[i].value += datos[i].value;
    }
  }

  async getPreciosPorFecha(desde: any, hasta: any) {
    return new Promise(async resolve => {
      await this.getPrecios10211(desde, hasta).then((data: any) => {
        // console.log('getPrecios805', data);
        this.precios = data.values;
      });
      // await this.getPrecios805(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios805', data);
      //   this.precios = data.values;
      // });

      // await this.getPrecios806(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios806', data);
      //   this.sumarDatos(data.values);
      //   // return resolve(data.values);
      // });

      // await this.getPrecios807(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios807', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios808(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios808', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios809(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios809', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios810(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios810', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios811(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios811', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios812(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios812', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios813(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios813', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios814(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios814', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios815(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios815', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios816(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios816', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios1277(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios1277', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios1286(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios1286', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // await this.getPrecios1368(desde, hasta).then((data: any) => {
      //   // console.log('getPrecios1368', data);
      //   // return resolve(data.values);
      //   this.sumarDatos(data.values);
      // });

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.precios.length; i++) {
        this.precios[i].value = this.precios[i].value / 1000;
      }

      return resolve(this.precios);
    });
  }

  // 805,806,807,808,809,810,811,812,813,814,815,816,1277,1286,1368

  getPrecios10211(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/10211';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);
    console.log('Desde', desde);
    console.log('Hasta', hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios805(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/805';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios806(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/806';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios807(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/807';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios808(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/808';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios809(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/809';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios810(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/810';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios811(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/811';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios812(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/812';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios813(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/813';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios814(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/814';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios815(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/815';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios816(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/816';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios1277(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/1277';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios1286(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/1286';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }

  getPrecios1368(desde: any, hasta: any) {
    const url = URL_SERVICIOS + 'indicators/1368';

    let params = new HttpParams();

    params = params.append('start_date', '' + desde);
    params = params.append('end_date', '' + hasta);

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return new Promise(resolve => {
      this.http.get(url, { headers, params }).subscribe((resp: any) => {
        return resolve(resp.indicator);
      });
    });
  }
}

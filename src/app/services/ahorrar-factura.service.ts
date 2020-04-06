import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { URL_WS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AhorrarFacturaService {
  url: string = URL_WS;
  constructor(private http: HttpClient) {}

  sendMail(datos: any, archivos: File[]) {
    const formdata: FormData = new FormData();
    formdata.append('correo', datos.correo);
    formdata.append('comentario', datos.comentario);
    formdata.append('telefono', datos.telefono);
    formdata.append('archivo', archivos[0]);
    if (archivos.length > 1) {
      formdata.append('archivo2', archivos[1]);
    }
    if (archivos.length > 2) {
      formdata.append('archivo3', archivos[2]);
    }
    if (archivos.length > 3) {
      formdata.append('archivo4', archivos[3]);
    }
    if (archivos.length > 4) {
      formdata.append('archivo5', archivos[4]);
    }
    const headers: HttpHeaders = new HttpHeaders({});
    const req = new HttpRequest(
      'POST',
      this.url + '/mails/ahorrar-factura',
      formdata,
      {
        headers,
        reportProgress: true,
        responseType: 'json'
      }
    );
    return this.http.request(req);
  }
}

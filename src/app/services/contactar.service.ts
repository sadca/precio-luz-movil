import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_WS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ContactarService {
  url: string = URL_WS;
  constructor(private http: HttpClient) {}

  sendMail(datos: any) {
    return this.http.post(this.url + '/mails/contactar', datos);
  }
}

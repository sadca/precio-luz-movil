import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.page.html',
  styleUrls: ['./contactar.page.scss']
})
export class ContactarPage implements OnInit {
  motivo: string = 'ayuda';
  observaciones: string = '';
  correo: string = '';
  comentario: string = '';

  constructor() {}

  ngOnInit() {}

  cambiarMotivo(value: string) {
    this.motivo = value;
  }

  enviar(form: any) {
    if (form.valid) {
      console.log(form.valid);
      console.log(form);
      // TODO: LLAMAR AL WS PARA ENVIAR EL CORREO
      console.log(
        'Pendiente llamar al WS que envie el correo a contacto@sadca.es'
      );
    }
  }
}

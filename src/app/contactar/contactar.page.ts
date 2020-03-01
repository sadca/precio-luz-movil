import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.page.html',
  styleUrls: ['./contactar.page.scss']
})
export class ContactarPage implements OnInit {
  motivo: string = 'ayuda';

  constructor() {}

  ngOnInit() {}

  cambiarMotivo(value: string) {
    this.motivo = value;
  }
}

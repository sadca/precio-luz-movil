import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html'
})
export class AyudaPage implements OnInit {
  electrodomesticos: any[] = [
    { nombre: 'Aire acondicionado', potencia: '2950' },
    { nombre: 'Calefactor', potencia: '1300' },
    { nombre: 'Horno del microondas ', potencia: '1200' },
    { nombre: 'Aspiradora', potencia: '1200' },
    { nombre: 'Plancha', potencia: '1200' },
    { nombre: 'Horno eléctrico', potencia: '950' },
    { nombre: 'Tostador eléctrico', potencia: '900' },
    { nombre: 'Secadora de pelo', potencia: '825' },
    { nombre: 'Cafetera', potencia: '700' },
    { nombre: 'Refrigerador estándar', potencia: '575' },
    { nombre: 'Lavadora', potencia: '375' },
    { nombre: 'Licuadora', potencia: '350' },
    { nombre: 'Ordenador', potencia: '150' },
    { nombre: 'Televisión', potencia: '150' },
    { nombre: 'Batidora manual ', potencia: '140' },
    { nombre: 'Máquina de coser ', potencia: '125' },
    { nombre: 'Ventilador', potencia: '100' },
    { nombre: 'Exprimidor Cítricos ', potencia: '35' },
    { nombre: 'Radio', potencia: '15' }
  ];

  constructor() {}

  ngOnInit() {}
}

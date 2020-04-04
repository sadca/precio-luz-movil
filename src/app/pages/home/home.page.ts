import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css']
})
export class HomePage implements OnInit {
  constructor(private storage: Storage, private router: Router) {
    storage.get('tarifa').then(valor => {
      console.log(valor);
      const tarifa = valor;
      if (tarifa === null) {
        return;
      }
    });
    // storage.get('peninsula').then(valor => {
    //   const peninsula = valor;
    //   if (peninsula === null) {
    //     router.navigate(['peninsula']);
    //     return;
    //   }
    // });
    // storage.get('empresa').then(valor => {
    //   const empresa = valor;
    //   if (empresa === null) {
    //     router.navigate(['peninsula']);
    //     return;
    //   }
    // });
  }

  ngOnInit() {}

  borrarStorage() {
    this.storage.clear().then(valor => {
      console.log(valor);
    });
    this.router.navigate(['peninsula']);
  }
}

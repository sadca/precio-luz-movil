import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peninsula',
  templateUrl: './peninsula.page.html',
  styleUrls: ['./peninsula.page.scss']
})
export class PeninsulaPage implements OnInit {
  peninsula: string = '';

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {}

  cambioPeninsula(valor: string) {
    this.peninsula = valor;
    this.storage.set('peninsula', this.peninsula);
    this.router.navigate(['/empresa']);
  }

  siguiente() {
    this.storage.set('peninsula', this.peninsula);
    this.router.navigate(['/empresa']);
  }
}

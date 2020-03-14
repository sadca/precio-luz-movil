import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss']
})
export class EmpresaPage implements OnInit {
  empresa: boolean = false;

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {}

  cambioEmpresa(valor: boolean) {
    this.empresa = valor;
    this.storage.set('empresa', this.empresa);
    this.router.navigate(['/home']);
  }

  siguiente() {
    this.storage.set('empresa', this.empresa);
    this.router.navigate(['/home']);
  }

  atras() {
    this.router.navigate(['/peninsula']);
  }
}

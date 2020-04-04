import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.page.html',
  styleUrls: ['./logo.page.css']
})
export class LogoPage implements OnInit {
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    // this.storage.get('peninsula').then(valor => {
    //   const peninsula = valor;
    //   if (peninsula === null) {
    //     this.router.navigate(['peninsula']);
    //     return;
    //   }
    // });
    // this.storage.get('empresa').then(valor => {
    //   const empresa = valor;
    //   if (empresa === null) {
    //     this.router.navigate(['peninsula']);
    //     return;
    //   }
    // });
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 4000);
    return;
  }
}

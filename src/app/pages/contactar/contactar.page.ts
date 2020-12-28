import { Component, OnInit } from '@angular/core';
import { ContactarService } from '../../services/contactar.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.page.html',
  styleUrls: ['./contactar.page.scss'],
})
export class ContactarPage implements OnInit {
  motivo: string = 'Ayuda';
  observaciones: string = '';
  correo: string = '';
  comentario: string = '';
  telefono: number;
  acuerdoComer: boolean = false;
  politicaProtec: boolean = false;

  loading: any = null;

  constructor(
    private contServ: ContactarService,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

  cambiarMotivo(value: string) {
    this.motivo = value;
  }

  async enviar(form: NgForm) {
    if (!this.politicaProtec) {
      return;
    }
    if (form.valid) {
      this.loading = await this.loadingController.create({
        message: '<img src="assets/logos/logo.gif">',
        spinner: null,
        cssClass: 'logo-cargando',
        id: 'cargando',
      });
      await this.loading.present();

      console.log(form);

      const datos = {
        motivo: this.motivo,
        observaciones: this.observaciones,
        correo: this.correo,
        comentario: this.comentario,
        telefono: this.telefono,
        acuerdoComer: this.acuerdoComer,
      };

      console.log(datos);

      this.contServ.sendMail(datos).subscribe(
        (data: any) => {
          console.log(data);

          form.resetForm();

          this.presentToast(data.mensaje);

          this.resetVariables();
        },
        (err: any) => {
          console.log('Error', err);
          this.presentToast(
            'Ha ocurrido un error, vuelva a intentarlo más tarde'
          );
          this.loadingController.dismiss('cargando');
        },
        () => {
          this.loadingController.dismiss('cargando');
        }
      );
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
    });
    toast.present();
  }

  resetVariables() {
    this.motivo = 'Ayuda';
    this.observaciones = '';
    this.correo = '';
    this.comentario = '';
    this.telefono = undefined;
    this.politicaProtec = false;
    this.acuerdoComer = false;
  }
}

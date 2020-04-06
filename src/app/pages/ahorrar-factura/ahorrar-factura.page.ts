import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiFileUploadComponent } from '../../components/multi-file-upload/multi-file-upload.component';
import { AhorrarFacturaService } from '../../services/ahorrar-factura.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ahorrar-factura',
  templateUrl: './ahorrar-factura.page.html',
  styleUrls: ['./ahorrar-factura.page.scss'],
})
export class AhorrarFacturaPage implements OnInit {
  @ViewChild(MultiFileUploadComponent, { static: false })
  fileField: MultiFileUploadComponent;
  correo: string = '';
  telefono: string = '';
  comentario: string = '';
  acuerdoComer: boolean = true;
  politicaProtec: boolean = true;

  loading: any = null;

  constructor(
    private ahorrarServ: AhorrarFacturaService,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

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
        correo: this.correo,
        comentario: this.comentario,
        telefono: this.telefono,
      };

      console.log(datos);

      this.ahorrarServ.sendMail(datos, this.fileField.archivos).subscribe(
        (data: any) => {
          console.log('data', data);
          if (data.body && data.body.ok) {
            form.resetForm();

            this.presentToast(data.body.mensaje);

            this.resetVariables();
          }
        },
        (err: any) => {
          console.error('Error', err);
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
    this.correo = '';
    this.comentario = '';
    this.telefono = undefined;
    this.fileField.archivos = [];
  }
}

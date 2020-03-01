import { Component } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss']
})
export class MultiFileUploadComponent {
  public uploader: FileUploader = new FileUploader({});
  public archivos: File[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map(fileItem => {
      return fileItem.file;
    });
  }

  subirArchivo(event: any) {
    if (this.comprobarCantidad() === true) {
      if (this.comprobarSubidos(event[0]) === true) {
        this.presentToast('Este archivo ya está subido');
      } else {
        if (this.comprobarSize(event[0]) === true) {
          this.archivos.push(event[0]);
        } else {
          this.presentToast('El archivo excede el tamaño permitido');
        }
      }
    } else {
      this.presentToast('No puede adjuntar más de 5 archivos');
    }
  }

  async borrarArchivo(posicion: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Desea elimiar el archivo seleccionado?',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Eliminar',
          cssClass: 'text-danger',
          handler: () => {
            this.archivos.splice(posicion, 1);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  comprobarSubidos(archivo: File) {
    for (const item of this.archivos) {
      if (archivo.name === item.name) {
        return true;
      }
    }
    return false;
  }

  comprobarSize(archivo: File) {
    if (archivo.size < 10000000) {
      return true;
    } else {
      return false;
    }
  }

  comprobarCantidad() {
    if (this.archivos.length >= 5) {
      return false;
    } else {
      return true;
    }
  }
}

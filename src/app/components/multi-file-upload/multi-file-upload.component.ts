import { Component } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { AlertController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss']
})
export class MultiFileUploadComponent {
  public uploader: FileUploader = new FileUploader({});
  public archivos: File[] = [];

  public optionsCamera: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  public optionsCameraPhoto: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
  };

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    private camera: Camera
  ) {}

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map(fileItem => {
      return fileItem.file;
    });
  }

  takePhoto() {
    this.camera.getPicture(this.optionsCameraPhoto).then(
      (imageData: any) => {
        console.log(imageData);
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        const blob = new Blob([base64Image]);
        console.log(blob);
        // const file = new File([blob], 'imageFileName.png');
        // console.log(file);
        // const imagen = new File(this.dataURItoBlob(imageData), 'prueba');
        // console.log(imageData);
        // const img = window.Ionic.WebView.convertFileSrc(imageData);
        // console.log('img', img);
      },
      err => {
        // Handle error
        console.log(err);
      }
    );
  }

  getPhoto() {
    this.camera.getPicture(this.optionsCamera).then(
      (imageData: any) => {
        console.log(imageData);

        const img = window.Ionic.WebView.convertFileSrc(imageData);
        console.log('img', img);
        // const base64Image = 'data:image/jpeg;base64,' + imageData;
        // const blob = new Blob([base64Image], { type: 'image/jpeg' });
        // console.log(blob);
        // const file = new File([blob], 'imageFileName.png');
        // console.log(file);
        // const imagen = new File(this.dataURItoBlob(imageData), 'prueba');
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // console.log(base64Image);
      },
      err => {
        // Handle error
        console.log(err);
      }
    );
  }

  // dataURItoBlob(dataURI: any) {
  //   // convert base64/URLEncoded data component to raw binary data held in a string
  //   let byteString;
  //   if (dataURI.split(',')[0].indexOf('base64') >= 0) {
  //     byteString = atob(dataURI.split(',')[1]);
  //   } else {
  //     byteString = unescape(dataURI.split(',')[1]);
  //   }

  //   // separate out the mime component
  //   const mimeString = dataURI
  //     .split(',')[0]
  //     .split(':')[1]
  //     .split(';')[0];

  //   // write the bytes of the string to a typed array
  //   const ia = new Uint8Array(byteString.length);
  //   for (const i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }

  //   return new Blob([ia], { type: mimeString });
  // }

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

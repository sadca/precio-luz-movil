import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import { FileLikeObject } from 'ng2-file-upload';

@Component({
  selector: 'app-ahorrar-factura',
  templateUrl: './ahorrar-factura.page.html',
  styleUrls: ['./ahorrar-factura.page.scss']
})
export class AhorrarFacturaPage implements OnInit {
  @ViewChild(MultiFileUploadComponent, { static: false })
  fileField: MultiFileUploadComponent;
  correo: string = '';
  comentario: string = '';

  constructor() {}

  ngOnInit() {}

  upload() {
    const files = this.fileField.archivos;
    console.log(files);

    // const formData = new FormData();
    // formData.append('somekey', 'some value'); // Add any other data you want to send

    // files.forEach((file: FileLikeObject) => {
    //   // formData.append('files[]', file.rawFile, file.name);
    //   console.log(file);
    // });

    // POST formData to Server
  }

  enviar(form: any) {
    if (form.valid) {
      console.log(form.valid);
      console.log(form);
      // TODO: LLAMAR AL WS PARA ENVIAR EL CORREO
      console.log(
        'Pendiente llamar al WS que envie el correo a contacto@sadca.es'
      );
    }
  }
}

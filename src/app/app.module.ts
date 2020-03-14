import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { HttpClientModule } from '@angular/common/http';
import { EsiosService } from './services/esios.service';
import { FormsModule } from '@angular/forms';
import { AhorrarFacturaService } from './services/ahorrar-factura.service';
import { ContactarService } from './services/contactar.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
    EsiosService,
    AhorrarFacturaService,
    ContactarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

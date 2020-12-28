import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLinkActive } from '@angular/router';

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
import { MenuComponent } from './components/menu/menu.component';
import { PreciosHoraAyudaComponent } from './components/ayuda/precios-hora-ayuda/precios-hora-ayuda.component';
import { CompararPreciosAyudaComponent } from './components/ayuda/comparar-precios-ayuda/comparar-precios-ayuda.component';
import { AhorrarFacturaAyudaComponent } from './components/ayuda/ahorrar-factura-ayuda/ahorrar-factura-ayuda.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PreciosHoraAyudaComponent,
    CompararPreciosAyudaComponent,
    AhorrarFacturaAyudaComponent,
  ],
  entryComponents: [
    PreciosHoraAyudaComponent,
    CompararPreciosAyudaComponent,
    AhorrarFacturaAyudaComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
    EsiosService,
    AhorrarFacturaService,
    ContactarService,
    SocialSharing,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

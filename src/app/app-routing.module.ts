import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'ajustes',
    loadChildren: () =>
      import('./pages/ajustes/ajustes.module').then((m) => m.AjustesPageModule),
  },
  {
    path: 'ayuda',
    loadChildren: () =>
      import('./pages/ayuda/ayuda.module').then((m) => m.AyudaPageModule),
  },
  {
    path: 'comparar',
    loadChildren: () =>
      import('./pages/comparar/comparar.module').then(
        (m) => m.CompararPageModule
      ),
  },
  {
    path: 'precios-hora',
    loadChildren: () =>
      import('./pages/precios-hora/precios-hora.module').then(
        (m) => m.PreciosHoraPageModule
      ),
  },
  {
    path: 'ahorrar-factura',
    loadChildren: () =>
      import('./pages/ahorrar-factura/ahorrar-factura.module').then(
        (m) => m.AhorrarFacturaPageModule
      ),
  },
  {
    path: 'contactar',
    loadChildren: () =>
      import('./pages/contactar/contactar.module').then(
        (m) => m.ContactarPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

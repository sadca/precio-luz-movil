import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  // {
  //   path: 'peninsula',
  //   loadChildren: () =>
  //     import('./peninsula/peninsula.module').then(m => m.PeninsulaPageModule)
  // },
  // {
  //   path: 'empresa',
  //   loadChildren: () =>
  //     import('./pages/carga-inicial/empresa/empresa.module').then(
  //       m => m.EmpresaPageModule
  //     )
  // },
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
    path: 'graficos',
    loadChildren: () =>
      import('./pages/carga-inicial/graficos/graficos.module').then(
        (m) => m.GraficosPageModule
      ),
  },
  {
    path: 'comparar',
    loadChildren: () =>
      import('./pages/comparar/comparar.module').then(
        (m) => m.CompararPageModule
      ),
  },
  {
    path: 'logo',
    loadChildren: () =>
      import('./pages/carga-inicial/logo/logo.module').then(
        (m) => m.LogoPageModule
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

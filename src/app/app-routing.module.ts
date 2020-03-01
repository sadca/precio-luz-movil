import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'peninsula',
    loadChildren: () =>
      import('./peninsula/peninsula.module').then(m => m.PeninsulaPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () =>
      import('./empresa/empresa.module').then(m => m.EmpresaPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () =>
      import('./ajustes/ajustes.module').then(m => m.AjustesPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () =>
      import('./ayuda/ayuda.module').then(m => m.AyudaPageModule)
  },
  {
    path: 'graficos',
    loadChildren: () =>
      import('./graficos/graficos.module').then(m => m.GraficosPageModule)
  },
  {
    path: 'comparar',
    loadChildren: () =>
      import('./comparar/comparar.module').then(m => m.CompararPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./logo/logo.module').then(m => m.LogoPageModule)
  },
  {
    path: 'precios-hora',
    loadChildren: () => import('./precios-hora/precios-hora.module').then( m => m.PreciosHoraPageModule)
  },
  {
    path: 'ahorrar-factura',
    loadChildren: () => import('./ahorrar-factura/ahorrar-factura.module').then( m => m.AhorrarFacturaPageModule)
  },
  {
    path: 'contactar',
    loadChildren: () => import('./contactar/contactar.module').then( m => m.ContactarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

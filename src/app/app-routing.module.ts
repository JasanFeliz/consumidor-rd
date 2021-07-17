import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'ajuste',
    loadChildren: () => import('./ajuste/ajuste.module').then( m => m.AjustePageModule)
  },
  {
    path: 'valorar-opinar',
    loadChildren: () => import('./valorar-opinar/valorar-opinar.module').then( m => m.ValorarOpinarPageModule)
  },
  {
    path: 'valoraciones-opiniones',
    loadChildren: () => import('./valoraciones-opiniones/valoraciones-opiniones.module').then( m => m.ValoracionesOpinionesPageModule)
  },
  {
    path: 'historial-opiniones',
    loadChildren: () => import('./historial-opiniones/historial-opiniones.module').then( m => m.HistorialOpinionesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./cambiar-contrasena/cambiar-contrasena.module').then( m => m.CambiarContrasenaPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

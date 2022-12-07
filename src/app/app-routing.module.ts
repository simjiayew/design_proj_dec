import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inside',
    loadChildren: () => import('./inside/inside.module').then( m => m.InsidePageModule)
  },
  {
    path: 'locked',
    loadChildren: () => import('./locked/locked.module').then( m => m.LockedPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'doorbell',
    loadChildren: () => import('./doorbell/doorbell.module').then( m => m.DoorbellPageModule)
  },
  // {
  //   path: 'preview',
  //   loadChildren: () => import('./preview/preview.module').then( m => m.PreviewPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

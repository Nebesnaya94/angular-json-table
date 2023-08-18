import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((page) => page.AuthModule),
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./main/main.module').then((pages) => pages.MainModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { APP_ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: APP_ROUTES.Home,
    loadChildren: () =>
      import('./features/public/public.module').then((mod) => mod.PublicModule),
  },
  {
    path: `${APP_ROUTES.Product}/:id`,
    loadChildren: () =>
      import('./features/product/product.module').then(
        (mod) => mod.ProductModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

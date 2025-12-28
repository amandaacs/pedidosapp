import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';

export const routes: Routes = [
   { path: '', component: ProductList },
   {
      path: 'create-order',
      loadComponent: () =>
         import('./pages/create-order/create-order')
            .then(m => m.CreateOrder)
   }
];

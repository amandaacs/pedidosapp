import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';

export const routes: Routes = [
   { path: '', component: ProductList },
   {
      path: 'create-order',
      loadComponent: () =>
         import('./pages/create-order/create-order')
            .then(m => m.CreateOrder)
   }, 
   {
      path: 'order/:id/payment',
      loadComponent: () => 
         import('./pages/payment-form/payment-form')
            .then(m => m.PaymentForm)
   },
   {
      path: 'order/:id', 
      loadComponent: () => 
         import('./pages/order-details/order-details')
            .then(m => m.OrderDetails)
   }
];

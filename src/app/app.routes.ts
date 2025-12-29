import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
   {
      path: '',
      component: MainLayout,
      children: [
         {
            path: 'orders', 
            loadComponent: () => 
               import('./pages/order-list/order-list')
                  .then(m => m.OrderList)
         }, 
         {
            path: 'order/:id', 
            loadComponent: () => 
               import('./pages/order-details/order-details')
                  .then(m => m.OrderDetails)
         }, 
         {
            path: 'order/:id/payment', 
            loadComponent: () => 
               import('./pages/payment-form/payment-form')
                  .then(m => m.PaymentForm)
         }, 
         {
            path: 'create-order', 
            loadComponent: () => 
               import('./pages/create-order/create-order')
                  .then(m => m.CreateOrder)
         }, 
         {
            path: 'products', 
            loadComponent: () => 
               import('./pages/product-list/product-list')
                  .then(m => m.ProductList)
         }, 
         {
            path: '',
            redirectTo: 'orders', 
            pathMatch: 'full'
         }
      ]
   }
];

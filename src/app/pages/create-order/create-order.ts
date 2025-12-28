import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../models/product';
import { CreateOrderItemRequest, OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './create-order.html',
  styleUrl: './create-order.scss',
})
export class CreateOrder implements OnInit{

    products: Product[] = [];

    selectedItems: { product: Product; quantity: number }[] = [];

    loading = true;

    constructor(
      private orderService: OrderService, 
      private productService: ProductService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.productService.listActive().subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false
        },
        error: () => {
          this.loading = false;
          alert('Erro ao carregar produtos');
        }
      })
    } 

    addProduct(product: Product){
      const existing = this.selectedItems.find(i => i.product.id === product.id);

      if(existing){
        existing.quantity++;
      } else {
        this.selectedItems.push({ product, quantity: 1 });
      }
    }

    removeProduct(productId: number){
      this.selectedItems = this.selectedItems.filter(i => i.product.id !== productId);
    }

    createOrder(){
      if(this.selectedItems.length === 0){
        alert('Selecione ao menos um produto');
        return;
      }

      const items: CreateOrderItemRequest[] = this.selectedItems.map(i => ({
        productId: i.product.id,
        quantity: i.quantity
      }));

      const request = {
        customerId : 1,
        items
      };

      this.orderService.createOrder(request).subscribe({
        next: (order) => {
          alert(`Pedido #${order.id} criado com sucesso`);
          this.router.navigate(['/order', order.id]);
        },
        error: () => {
          alert('Erro ao criar pedido');
        }
      })

    }

}

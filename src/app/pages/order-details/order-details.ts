import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Order } from '../../models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-details',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './order-details.html',
  styleUrl: './order-details.scss',
})
export class OrderDetails implements OnInit{

  order: Order | null = null;
  loading = true;

  constructor(
    private route:ActivatedRoute,
    private router: Router, 
    private orderService: OrderService
  ){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.orderService.getOrder(id).subscribe({
      next: (data) => {
        this.order = data;
        this.loading = false;
      }, 
      error: () => {
        this.loading = false;
        alert('Erro ao carregar pedido');
      }
    });
  }

  goToPayment(){
    if(!this.order) return;
    this.router.navigate(['/order', this.order.id, 'payment']);
  }

}

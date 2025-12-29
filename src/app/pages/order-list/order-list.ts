import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss',
})
export class OrderList implements OnInit{

  orders: Order[] = [];
  loading = true;

  constructor(
    private orderService: OrderService,
    private router: Router
  ){}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.orderService.getAllOrders().subscribe(res => this.orders = res);
      }
    });
  }


  openOrder(id: number){
    this.router.navigate(['/order', id]);
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit{

  products: Product[] = [];
  loading = true;
  
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loadProducts();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadProducts();
      }
    });
  }

  loadProducts(): void {
    this.loading = true;

    this.productService.listActive().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}

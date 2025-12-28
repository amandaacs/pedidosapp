import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatePaymentRequest, PaymentService } from '../../services/payment.service';


@Component({
  selector: 'app-payment-form',
  imports: [
    CommonModule,
    FormsModule, 
    MatCardModule, 
    MatButtonModule, 
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './payment-form.html',
  styleUrl: './payment-form.scss',
})
export class PaymentForm implements OnInit{

  orderId!: number;
  method: string = '';
  amount: number = 0;

  paymentMethods = [
    { value: 'PIX', label: 'PIX' },
    { value: 'CREDIT_CARD', label: 'Cartão de Crédito' },
    { value: 'DEBIT_CARD', label: 'Cartão de Débito' },
    { value: 'CASH', label: 'Dinheiro' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService
  ){}
  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submitPayment(){
    if(!this.method || this.amount <= 0){
      alert('Preencha todos os campos');
      return;
    }

    const request: CreatePaymentRequest = {
      orderId: this.orderId,
      method: this.method,
      amountCents: Math.round(this.amount*100)
    };

    this.paymentService.registerPayment(request).subscribe({
      next: () => {
        alert('Pagamento registrado com sucesso');
        this.router.navigate(['/order', this.orderId]);
      }
    })

  }  

}

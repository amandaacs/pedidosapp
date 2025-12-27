import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Payment } from "../models/payment";

export interface CreatePaymentRequest{
    orderId: number;
    method: string;
    amountCents: number;
}

@Injectable({ providedIn: 'root' })
export class PaymentService{
    private baseUrl = `${environment.apiUrl}/payments`;

    constructor(private http: HttpClient) {}

    registerPayment(request: CreatePaymentRequest): Observable<Payment>{
        return this.http.post<Payment>(this.baseUrl, request)
    }

}
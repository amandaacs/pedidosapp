import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../models/order";

export interface CreateOrderItemRequest{
    productId: number;
    quantity: number;
}

export interface CreateOrderRequest{
    customerId: number;
    items: CreateOrderItemRequest[];
}

@Injectable({ providedIn: 'root' })
export class OrderService{

    private baseUrl = `${environment.apiUrl}/orders`;

    constructor(private http: HttpClient) {}

    createOrder(request: CreateOrderRequest): Observable<Order>{
        return this.http.post<Order>(this.baseUrl, request);
    }

    getOrder(id: number): Observable<Order>{
        return this.http.get<Order>(`${this.baseUrl}/${id}`);
    }

}
import { OrderItem } from "./order-item";
import { Payment } from "./payment";

export interface Order{
    id: number;
    customerId:number;
    customerName: string;
    status: string;
    createdAt: string;
    items: OrderItem[];
    payments: Payment[];
}
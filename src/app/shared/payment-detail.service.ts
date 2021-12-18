import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  formData: PaymentDetail = new PaymentDetail();
  readonly baseUrl = 'https://localhost:5001/api/PaymentDetail';

  postPaymentDetail(): Observable<PaymentDetail> {
    return this.http.post<PaymentDetail>(this.baseUrl, this.formData);
  }
}

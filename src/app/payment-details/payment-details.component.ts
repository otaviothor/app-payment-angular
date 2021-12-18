import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(payment: PaymentDetail): void {
    this.service.formData = Object.assign({}, payment);
  }

  onDelete(id: number): void {
    if (!confirm('Are you sure to delete this record?')) return;

    this.service.deletePaymentDetail(id).subscribe({
      next: (_) => {
        this.toast.info('Deleted successfully', 'Payment detail register');
        this.service.refreshList();
      },
      error: (_) =>
        this.toast.error('Some error ccurred', 'Payment detail register'),
    });
  }
}

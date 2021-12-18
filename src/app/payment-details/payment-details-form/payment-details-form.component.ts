import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss'],
})
export class PaymentDetailsFormComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (this.service.formData.paymentDetailId === 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm): void {
    this.service.postPaymentDetail().subscribe({
      next: (_) => {
        this.toast.success('Submitted successfully', 'Payment detail register');
        this.service.refreshList();
        this.resetForm(form);
      },
      error: (_) =>
        this.toast.error('Some error ccurred', 'Payment detail register'),
    });
  }

  updateRecord(form: NgForm): void {
    this.service.putPaymentDetail().subscribe({
      next: (_) => {
        this.toast.info('Updated successfully', 'Payment detail register');
        this.service.refreshList();
        this.resetForm(form);
      },
      error: (_) =>
        this.toast.error('Some error ccurred', 'Payment detail register'),
    });
  }

  resetForm(form: NgForm): void {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}

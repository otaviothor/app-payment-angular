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
    this.service.postPaymentDetail().subscribe({
      next: (_) => {
        this.toast.success('Submitted successfully', 'Payment detail register');
        this.resetForm(form);
      },
      error: (error) => console.error(error),
    });
  }

  resetForm(form: NgForm): void {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}

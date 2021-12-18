import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.sass'],
})
export class PaymentDetailsFormComponent implements OnInit {
  constructor(public service: PaymentDetailService) {}

  ngOnInit(): void {}
}

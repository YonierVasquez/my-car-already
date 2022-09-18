import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { OrderVehicleComponent } from './order-vehicle/order-vehicle.component';


@NgModule({
  declarations: [
    OrderVehicleComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule
  ]
})
export class TransportModule { }

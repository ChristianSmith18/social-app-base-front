import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidComponent } from './covid.component';

@NgModule({
  declarations: [CovidComponent],
  imports: [CommonModule, CovidRoutingModule],
})
export class CovidModule {}

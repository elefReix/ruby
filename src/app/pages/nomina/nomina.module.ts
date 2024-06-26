import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominaPageRoutingModule } from './nomina-routing.module';

import { NominaPage } from './nomina.page';
import { CurrentWeekComponent } from 'src/app/components/shared/current-week/current-week.component';
import { TeamListComponent } from 'src/app/components/shared/team-list/team-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominaPageRoutingModule,
    CurrentWeekComponent,
    TeamListComponent
  ],
  declarations: [NominaPage]
})
export class NominaPageModule {}

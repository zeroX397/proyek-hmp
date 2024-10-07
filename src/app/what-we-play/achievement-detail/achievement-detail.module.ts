import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementDetailPageRoutingModule } from './achievement-detail-routing.module';

import { AchievementDetailPage } from './achievement-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementDetailPageRoutingModule
  ],
  declarations: [AchievementDetailPage]
})
export class AchievementDetailPageModule {}

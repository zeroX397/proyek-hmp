import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementDetailPage } from './achievement-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AchievementDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementDetailPageRoutingModule {}

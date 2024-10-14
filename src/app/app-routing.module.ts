import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'what-we-play',
    loadChildren: () => import('./what-we-play/what-we-play.module').then( m => m.WhatWePlayPageModule)
  },
  {
    path: 'who-we-are',
    loadChildren: () => import('./who-we-are/who-we-are.module').then( m => m.WhoWeArePageModule)
  },
  {
    path: 'our-schedule',
    loadChildren: () => import('./our-schedule/our-schedule.module').then( m => m.OurSchedulePageModule)
  },
  {
    path: 'achievement/:id',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  {
    path: 'team/:id',
    loadChildren: () => import('./what-we-play/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'schedule-detail/:id',
    loadChildren: () => import('./our-schedule/schedule-detail/schedule-detail.module').then( m => m.ScheduleDetailPageModule)
  },
  {
    path: 'team-member/:id',
    loadChildren: () => import('./what-we-play/team/team-member/team-member.module').then( m => m.TeamMemberPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

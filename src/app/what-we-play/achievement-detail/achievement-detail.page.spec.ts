import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementDetailPage } from './achievement-detail.page';

describe('AchievementDetailPage', () => {
  let component: AchievementDetailPage;
  let fixture: ComponentFixture<AchievementDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

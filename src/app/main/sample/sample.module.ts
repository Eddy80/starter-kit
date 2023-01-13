import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { HomeComponent } from './home.component';
import { UserComponent} from "./user/user.component";
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { EarningComponent } from './earning/earning.component';
import { ProfileComponent } from './profile/profile.component';
import {StatisticsComponent} from "./statistics/statistics.component";
import { QuestionComponent } from './question/question.component';

const routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'advertisement',
    component: AdvertisementComponent,
    data: { animation: 'advertisement' }
  },
  {
    path: 'user',
    component: UserComponent,
    data: { animation: 'user' }
  },
  {
    path: 'earning',
    component: EarningComponent,
    data: { animation: 'earning' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animation: 'profile' }
  },
  {
    path: 'statistics/user',
    component: StatisticsComponent,
    data: { animation: 'statistics' }
  },
  {
    path: 'statistics/advertiser',
    component: StatisticsComponent,
    data: { animation: 'advertiser' }
  },
  {
    path: 'statistics/advertisement',
    component: StatisticsComponent,
    data: { animation: 'advertisement' }
  },
  {
    path: 'question',
    component: QuestionComponent,
    data: { animation: 'question' }
  }




];

@NgModule({
  declarations: [HomeComponent, UserComponent, AdvertisementComponent, EarningComponent, ProfileComponent, StatisticsComponent, QuestionComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [HomeComponent, UserComponent, AdvertisementComponent, EarningComponent, ProfileComponent, StatisticsComponent, QuestionComponent]
})
export class SampleModule {}

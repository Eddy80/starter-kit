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
import {AuthGuard} from "../../auth/helpers";
import {Role} from "../../auth/models";
import {NgxPaginationModule} from "ngx-pagination";
import { NewAdvFormComponent } from './advertisement/new-adv-form/new-adv-form.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {Ng2FlatpickrModule} from "ng2-flatpickr";
import {CardSnippetModule} from "../../../@core/components/card-snippet/card-snippet.module";
import {EditAdvFormComponent} from "./advertisement/edit-adv-form/edit-adv-form.component";


const routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'advertisement',
    component: AdvertisementComponent,
    canActivate: [AuthGuard],
    data: [
           { roles: [Role.Client] } // To set multiple role: [Role.Admin, Role.Client]
          ,{ animation: 'advertisement' }
          ]
  },
  {
    path: 'advertisement/new',
    component: NewAdvFormComponent,
    canActivate: [AuthGuard],
    data: [
       { roles: [Role.Client] } // To set multiple role: [Role.Admin, Role.Client]
      ,{ animation: 'advertisement/new' }
    ]
  },
  {
    path: 'advertisement/edit/:id',
    component: EditAdvFormComponent,
    canActivate: [AuthGuard],
    data: [
      { roles: [Role.Client] } // To set multiple role: [Role.Admin, Role.Client]
      ,{ animation: 'advertisement/edit' }
    ]
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
  declarations: [HomeComponent,
    UserComponent,
    AdvertisementComponent,
    EarningComponent,
    ProfileComponent,
    StatisticsComponent,
    QuestionComponent,
    NewAdvFormComponent,
    EditAdvFormComponent,
  ],
  imports: [RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
    NgxPaginationModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    CardSnippetModule],
  exports: [HomeComponent,
    UserComponent,
    AdvertisementComponent,
    EarningComponent,
    ProfileComponent,
    StatisticsComponent,
    QuestionComponent]
})
export class SampleModule {}

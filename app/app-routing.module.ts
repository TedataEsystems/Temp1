import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DetailedTeamReportComponent } from './component/detailed-team-report/detailed-team-report.component';
import { EvaluateSampleComponent } from './component/evaluate-sample/evaluate-sample.component';
import { PendingComponent } from './component/pending/pending.component';
import { ReEvaluateComponent } from './component/re-evaluate/re-evaluate.component';
import { ReEvaluationReportComponent } from './component/re-evaluation-report/re-evaluation-report.component';
import { ResultComponent } from './component/result/result.component';
import { ViewPendingComponent } from './component/view-pending/view-pending.component';
import { ViewResultComponent } from './component/view-result/view-result.component';
import { LayoutComponent } from './shared/component/layout/layout.component';
import { LoginComponent } from './shared/component/login/login.component';

const routes: Routes = [

  {
    path:'login',
  component:LoginComponent,
  },

  {
    path:'',
    component: LayoutComponent,

    children: [
      {
      path:'',
      component: DashboardComponent,

    },
    {
      path:'result',
      component: ResultComponent,

    },
    {
      path:'viewresult',
      component: ViewResultComponent,

    },
    {
      path:'pending',
      component: PendingComponent,

    },
    {
      path:'viewpending',
      component: ViewPendingComponent,

    },
    {
      path:'revaluatereport',
      component: ReEvaluationReportComponent,

    },
    {
      path:'revaluate',
      component:ReEvaluateComponent,

    },
    {
      path:'sample',
      component:EvaluateSampleComponent,

    },

    {
      path:'detailedteamreport',
      component:DetailedTeamReportComponent
    },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { HeaderComponent } from '../../component/header/header.component';
import { SubHeaderComponent } from '../../component/sub-header/sub-header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { LayoutComponent } from '../../component/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteMsgComponent } from '../../component/delete-msg/delete-msg.component';
import { EditComponent } from 'src/app/component/edit/edit.component';
import { DetailedTeamReportComponent } from 'src/app/component/detailed-team-report/detailed-team-report.component';
import { EvaluateSampleComponent } from 'src/app/component/evaluate-sample/evaluate-sample.component';
import { ReEvaluateComponent } from 'src/app/component/re-evaluate/re-evaluate.component';
import { ReEvaluationReportComponent } from 'src/app/component/re-evaluation-report/re-evaluation-report.component';
import { ViewPendingComponent } from 'src/app/component/view-pending/view-pending.component';
import { ViewResultComponent } from 'src/app/component/view-result/view-result.component';
import { PendingComponent } from 'src/app/component/pending/pending.component';
import { ResultComponent } from 'src/app/component/result/result.component';
import { UpdateSampleComponent } from 'src/app/Forms/update-sample/update-sample.component';
import { ChartsModule } from 'ng2-charts';
import { LoaderComponent } from '../../component/loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from '../../interceptors/loading.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    SidebarComponent,
    DeleteMsgComponent,
    EditComponent,
    ResultComponent,
    PendingComponent,
    ViewResultComponent,
    ViewPendingComponent,
    ReEvaluationReportComponent,
    ReEvaluateComponent,
    EvaluateSampleComponent,
    DetailedTeamReportComponent,
    UpdateSampleComponent,
    LoaderComponent,
  

  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ChartsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),



  ],

  providers:[{provide:HTTP_INTERCEPTORS , useClass:LoadingInterceptor , multi:true}]
})
export class LayoutModule { }

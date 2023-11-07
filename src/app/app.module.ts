import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { MaterialModule } from './material.module';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { AlertService } from './services/alert.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuardService } from './goards/auth-guard.service';
import { AnonGuardService } from './goards/anon-guard.service';
import { OnBoardingComponent } from './container/on-boarding/on-boarding/on-boarding.component';
import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
import { VerificationCompletedService } from './goards/verification-completed.service';
import { VerificationInCompletedService } from './goards/verification-in-completed.service';
import { OnBoardingCompletedService } from './goards/on-boarding-completed.service';
import { OnBoardingInCompletedService } from './goards/on-boarding-in-completed.service';
import { OnBoardingIntroComponent } from './container/on-boarding/on-boarding-intro/on-boarding-intro.component';
import { ResumeNameComponent } from './container/on-boarding/resume-name/resume-name.component';
import { UploadComponent } from './container/tabs/upload/upload.component';
import { UploadImageComponent } from './container/tabs/upload-image/upload-image.component';
import { UploadFormDiskComponent } from './container/tabs/upload-form-disk/upload-form-disk.component';
import { ImportYoutubeComponent } from './container/tabs/import-youtube/import-youtube.component';
import { ResumeFormComponent } from './container/resume-form/resume-form.component';
import { ContactDetailsComponent } from './component/resume-form/contact-details/contact-details.component';
import { ContactDetailsFormComponent } from './component/resume-form/resume-dialogues/contact-details-form/contact-details-form.component';
import { EducationComponent } from './component/resume-form/education/education.component';
import { EducationFormComponent } from './component/resume-form/resume-dialogues/education-form/education-form.component';
import { EducationCardComponent } from './component/resume-form/resume-card/education-card/education-card.component';
import { EducationListComponent } from './component/resume-form/resume-list/education-list/education-list.component';
import { EmploymentHistoryComponent } from './component/resume-form/employment-history/employment-history.component';
import { EmploymentHistoryFormComponent } from './component/resume-form/resume-dialogues/employment-history-form/employment-history-form.component';
import { EmploymentHistoryCardComponent } from './component/resume-form/resume-card/employment-history-card/employment-history-card.component';
import { EmploymentHistorylistComponent } from './component/resume-form/resume-list/employment-historylist/employment-historylist.component';
import { InterestComponent } from './component/resume-form/interest/interest.component';
import { InterestFormComponent } from './component/resume-form/resume-dialogues/interest-form/interest-form.component';
import { InterestCardComponent } from './component/resume-form/resume-card/interest-card/interest-card.component';
import { InterestListComponent } from './component/resume-form/resume-list/interest-list/interest-list.component';
import { SkillsComponent } from './component/resume-form/skills/skills.component';
import { SkillFormComponent } from './component/resume-form/resume-dialogues/skill-form/skill-form.component';
import { SkillCardComponent } from './component/resume-form/resume-card/skill-card/skill-card.component';
import { SikllListComponent } from './component/resume-form/resume-list/sikll-list/sikll-list.component';
import { LanguageComponent } from './component/resume-form/language/language.component';
import { LanguageFormComponent } from './component/resume-form/resume-dialogues/language-form/language-form.component';
import { LanguageCardComponent } from './component/resume-form/resume-card/language-card/language-card.component';
import { LanguageListComponent } from './component/resume-form/resume-list/language-list/language-list.component';
import { IndustrialExposureComponent } from './component/resume-form/industrial-exposure/industrial-exposure.component';
import { IndustrialExposureFormComponent } from './component/resume-form/resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';
import { IndustrialExposureCardComponent } from './component/resume-form/resume-card/industrial-exposure-card/industrial-exposure-card.component';
import { IndustrialExposureListComponent } from './component/resume-form/resume-list/industrial-exposure-list/industrial-exposure-list.component';
import { AwardComponent } from './component/resume-form/award/award.component';
import { AwardFormComponent } from './component/resume-form/resume-dialogues/award-form/award-form.component';
import { AwardCardComponent } from './component/resume-form/resume-card/award-card/award-card.component';
import { AwardListComponent } from './component/resume-form/resume-list/award-list/award-list.component';
import { ObjectiveComponent } from './component/resume-form/objective/objective.component';
import { ObjectiveFormComponent } from './component/resume-form/resume-dialogues/objective-form/objective-form.component';
import { ObjectiveCardComponent } from './component/resume-form/resume-card/objective-card/objective-card.component';
import { ObjectiveListComponent } from './component/resume-form/resume-list/objective-list/objective-list.component';
import { ReferenceComponent } from './component/resume-form/reference/reference.component';
import { ReferenceFormComponent } from './component/resume-form/resume-dialogues/reference-form/reference-form.component';
import { ReferenceCardComponent } from './component/resume-form/resume-card/reference-card/reference-card.component';
import { ReferenceListComponent } from './component/resume-form/resume-list/reference-list/reference-list.component';
import { ProjectDetailsComponent } from './component/resume-form/project-details/project-details.component';
import { ProjectDetailsFormComponent } from './component/resume-form/resume-dialogues/project-details-form/project-details-form.component';
import { ProjectDetailsCardComponent } from './component/resume-form/resume-card/project-details-card/project-details-card.component';
import { ProjectDetailsListComponent } from './component/resume-form/resume-list/project-details-list/project-details-list.component';
import { StrengthComponent } from './component/resume-form/strength/strength.component';
import { StrengthFormComponent } from './component/resume-form/resume-dialogues/strength-form/strength-form.component';
import { StrengthCardComponent } from './component/resume-form/resume-card/strength-card/strength-card.component';
import { StrengthListComponent } from './component/resume-form/resume-list/strength-list/strength-list.component';
import { WeaknessComponent } from './component/resume-form/weakness/weakness.component';
import { WeaknessFormComponent } from './component/resume-form/resume-dialogues/weakness-form/weakness-form.component';
import { WeaknessCardComponent } from './component/resume-form/resume-card/weakness-card/weakness-card.component';
import { WeaknessListComponent } from './component/resume-form/resume-list/weakness-list/weakness-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import {rootReducer} from './reducers';
import { AuthRepository } from './repository/auth-repository';
import { ResumeRepository } from './repository/resume-repository';
import { ResumeComponent } from './container/dashboard/resume/resume.component';
import { SettingComponent } from './container/dashboard/setting/setting.component';
import { HeaderComponent } from './container/layout/header/header.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NotFoundComponent } from './container/not-found/not-found.component';
import { ProfileSettingsComponent } from './component/profile-settings/profile-settings.component';
import { PasswordComponent } from './component/password/password.component';
import { ResumeCardComponent } from './component/resume-card/resume-card.component';
import { ErrorComponent } from './component/error/error.component';
import { AddOrEditResumeComponent } from './component/dialogues/add-or-edit-resume/add-or-edit-resume.component';
import { SingleTemplateComponent } from './container/single-template/single-template.component';
import { TemplatesComponent } from './container/templates/templates.component';
import { TemplateCardComponent } from './component/template-card/template-card.component';
import { BluesTemplateComponent } from './component/templates/blues-template/blues-template.component';
import { ClassicTemplateComponent } from './component/templates/classic-template/classic-template.component';
import { ModernTemplateComponent } from './component/templates/modern-template/modern-template.component';
import { RoyalTemplateComponent } from './component/templates/royal-template/royal-template.component';
import { TraditionalPaneTemplateComponent } from './component/templates/traditional-pane-template/traditional-pane-template.component';
import { SingleResumeComponent } from './container/single-resume/single-resume.component';
import { TemplateButtonsComponent } from './component/resume-template/template-buttons/template-buttons.component';
import { TemplateContactDetaiComponent } from './component/resume-template/template-contact-detai/template-contact-detai.component';
import { TemplateLanguageCardComponent } from './component/resume-template/template-cards/template-language-card/template-language-card.component';
import { TemplateSkillCardComponent } from './component/resume-template/template-cards/template-skill-card/template-skill-card.component';
import { TemplateStrengthCardComponent } from './component/resume-template/template-cards/template-strength-card/template-strength-card.component';
import { TemplateWeaknessCardComponent } from './component/resume-template/template-cards/template-weakness-card/template-weakness-card.component';
import { TemplateDetailsComponent } from './component/resume-template/template-details/template-details.component';
import { TemplateEducationCardComponent } from './component/resume-template/template-cards/template-education-card/template-education-card.component';
import { TemplateAwardsComponent } from './component/resume-template/template-cards/template-awards/template-awards.component';
import { TemplateEmploymentHistoryComponent } from './component/resume-template/template-cards/template-employment-history/template-employment-history.component';
import { TemplateIndustrialExposureComponent } from './component/resume-template/template-cards/template-industrial-exposure/template-industrial-exposure.component';
import { TemplateInterestComponent } from './component/resume-template/template-cards/template-interest/template-interest.component';
import { TemplateObjectiveComponent } from './component/resume-template/template-cards/template-objective/template-objective.component';
import { TemplateProjectDetailComponent } from './component/resume-template/template-cards/template-project-detail/template-project-detail.component';
import { TemplateReferenceComponent } from './component/resume-template/template-cards/template-reference/template-reference.component';
import { ShareComponent } from './component/resume-template/template-cards/share/share.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
    OnBoardingIntroComponent,
    ResumeNameComponent,
    UploadComponent,
    UploadImageComponent,
    UploadFormDiskComponent,
    ImportYoutubeComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    ContactDetailsFormComponent,
    EducationComponent,
    EducationFormComponent,
    EducationCardComponent,
    EducationListComponent,
    EmploymentHistoryComponent,
    EmploymentHistoryFormComponent,
    EmploymentHistoryCardComponent,
    EmploymentHistorylistComponent,
    InterestComponent,
    InterestFormComponent,
    InterestCardComponent,
    InterestListComponent,
    SkillsComponent,
    SkillFormComponent,
    SkillCardComponent,
    SikllListComponent,
    LanguageComponent,
    LanguageFormComponent,
    LanguageCardComponent,
    LanguageListComponent,
    IndustrialExposureComponent,
    IndustrialExposureFormComponent,
    IndustrialExposureCardComponent,
    IndustrialExposureListComponent,
    AwardComponent,
    AwardFormComponent,
    AwardCardComponent,
    AwardListComponent,
    ObjectiveComponent,
    ObjectiveFormComponent,
    ObjectiveCardComponent,
    ObjectiveListComponent,
    ReferenceComponent,
    ReferenceFormComponent,
    ReferenceCardComponent,
    ReferenceListComponent,
    ProjectDetailsComponent,
    ProjectDetailsFormComponent,
    ProjectDetailsCardComponent,
    ProjectDetailsListComponent,
    StrengthComponent,
    StrengthFormComponent,
    StrengthCardComponent,
    StrengthListComponent,
    WeaknessComponent,
    WeaknessFormComponent,
    WeaknessCardComponent,
    WeaknessListComponent,
    ResumeComponent,
    SettingComponent,
    HeaderComponent,
    LogoutComponent,
    NotFoundComponent,
    ProfileSettingsComponent,
    PasswordComponent,
    ResumeCardComponent,
    ErrorComponent,
    AddOrEditResumeComponent,
    SingleTemplateComponent,
    TemplatesComponent,
    TemplateCardComponent,
    BluesTemplateComponent,
    ClassicTemplateComponent,
    ModernTemplateComponent,
    RoyalTemplateComponent,
    TraditionalPaneTemplateComponent,
    SingleResumeComponent,
    TemplateButtonsComponent,
    TemplateContactDetaiComponent,
    TemplateLanguageCardComponent,
    TemplateSkillCardComponent,
    TemplateStrengthCardComponent,
    TemplateWeaknessCardComponent,
    TemplateDetailsComponent,
    TemplateEducationCardComponent,
    TemplateAwardsComponent,
    TemplateEmploymentHistoryComponent,
    TemplateIndustrialExposureComponent,
    TemplateInterestComponent,
    TemplateObjectiveComponent,
    TemplateProjectDetailComponent,
    TemplateReferenceComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ShareButtonsModule.withConfig({
      debug:true
    }),
    ShareIconsModule ,
    ClipboardModule
  ],
  providers: [
    HttpService,  
    ApiService,
    AlertService,
    AuthGuardService,
    AnonGuardService,
    VerificationCompletedService,
    VerificationInCompletedService,
    OnBoardingCompletedService,
    OnBoardingInCompletedService,
    AuthRepository,
    ResumeRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

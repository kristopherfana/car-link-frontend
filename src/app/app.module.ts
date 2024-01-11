import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrnAlertDialogTriggerDirective, BrnAlertDialogContentDirective } from '@spartan-ng/ui-alertdialog-brain';
import { HlmAlertDialogComponent, HlmAlertDialogOverlayDirective, HlmAlertDialogHeaderComponent, HlmAlertDialogFooterComponent, HlmAlertDialogTitleDirective, HlmAlertDialogDescriptionDirective, HlmAlertDialogCancelButtonDirective, HlmAlertDialogActionButtonDirective, HlmAlertDialogContentComponent } from '@spartan-ng/ui-alertdialog-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuModule } from '@spartan-ng/ui-menu-helm';
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';
import { HlmTableComponent, HlmTrowComponent, HlmThComponent, HlmTdComponent, HlmCaptionComponent } from '@spartan-ng/ui-table-helm';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    HlmTableComponent, HlmTrowComponent, HlmThComponent,
    HlmTdComponent, HlmCaptionComponent,
    BrnMenuTriggerDirective,
    HlmMenuModule,
    HlmIconComponent,
    BrnAlertDialogTriggerDirective,
    BrnAlertDialogContentDirective,

    HlmAlertDialogComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogContentComponent,
    HlmSkeletonComponent,

    HlmButtonDirective,
    HlmInputDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

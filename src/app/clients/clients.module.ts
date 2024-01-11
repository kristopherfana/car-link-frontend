import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HlmTableComponent, HlmTrowComponent, HlmThComponent, HlmTdComponent, HlmCaptionComponent } from '@spartan-ng/ui-table-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuModule } from '@spartan-ng/ui-menu-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { radixChevronDown, radixDotsHorizontal, radixCaretSort } from '@ng-icons/radix-icons';
import { BrnAlertDialogTriggerDirective, BrnAlertDialogContentDirective } from '@spartan-ng/ui-alertdialog-brain';
import { HlmAlertDialogComponent, HlmAlertDialogOverlayDirective, HlmAlertDialogHeaderComponent, HlmAlertDialogFooterComponent, HlmAlertDialogTitleDirective, HlmAlertDialogDescriptionDirective, HlmAlertDialogCancelButtonDirective, HlmAlertDialogActionButtonDirective, HlmAlertDialogContentComponent } from '@spartan-ng/ui-alertdialog-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientFormComponent,
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
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
  providers: [provideIcons({ radixChevronDown, radixDotsHorizontal, radixCaretSort })],
})
export class ClientsModule { }

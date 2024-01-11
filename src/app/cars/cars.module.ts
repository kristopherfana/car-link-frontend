import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { HlmMenuItemDirective, HlmMenuModule } from '@spartan-ng/ui-menu-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogTriggerDirective, BrnDialogContentDirective } from '@spartan-ng/ui-dialog-brain';
import { HlmDialogComponent, HlmDialogContentComponent, HlmDialogHeaderComponent, HlmDialogFooterComponent, HlmDialogTitleDirective, HlmDialogDescriptionDirective } from '@spartan-ng/ui-dialog-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmScrollAreaComponent } from '@spartan-ng/ui-scrollarea-helm';
import { SharedModule } from '../shared/shared.module';
import { LabelDirective } from '../shared/components/form-dialog/Directives/label.directive';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AlertDescDirective } from '../shared/components/alert/Directives/alert-desc.directive';
import { AlertTitleDirective } from '../shared/components/alert/Directives/alert-title.directive';
import { HlmMenuLabelComponent } from "../../../components/ui-menu-helm/src/lib/hlm-menu-label.component";
import { HlmMenuSeparatorComponent } from "../../../components/ui-menu-helm/src/lib/hlm-menu-separator.component";
import { HlmMenuGroupComponent } from "../../../components/ui-menu-helm/src/lib/hlm-menu-group.component";
import { HlmMenuComponent } from "../../../components/ui-menu-helm/src/lib/hlm-menu.component";
import { HlmIconComponent } from "../../../components/ui-icon-helm/src/lib/hlm-icon.component";
import { HlmTdComponent } from "../../../components/ui-table-helm/src/lib/hlm-td.component";
import { HlmTrowComponent } from "../../../components/ui-table-helm/src/lib/hlm-trow.component";
import { HlmThComponent } from "../../../components/ui-table-helm/src/lib/hlm-th.component";
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmTableComponent } from '@spartan-ng/ui-table-helm';
import { provideIcons } from '@ng-icons/core';
import { radixChevronDown, radixDotsHorizontal, radixCaretSort } from '@ng-icons/radix-icons';

@NgModule({
  declarations: [
    CarsComponent,
    CarsFormComponent,
    CarsDetailComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    HlmInputDirective,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,
    HlmLabelDirective,
    HlmButtonDirective,
    HlmScrollAreaComponent,
    LabelDirective,
    AlertComponent,
    AlertDescDirective,
    AlertTitleDirective,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuGroupComponent,
    HlmMenuComponent,
    HlmIconComponent,
    HlmTdComponent,
    HlmTrowComponent,
    HlmThComponent,
    BrnMenuTriggerDirective,
    HlmTableComponent,
  ],
  providers: [provideIcons({ radixChevronDown, radixDotsHorizontal, radixCaretSort })]
})
export class CarsModule { }

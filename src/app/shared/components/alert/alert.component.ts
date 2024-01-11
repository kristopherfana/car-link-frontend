import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixCube, radixExclamationTriangle } from '@ng-icons/radix-icons';
import { HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective, HlmAlertTitleDirective, AlertVariants } from '@spartan-ng/ui-alert-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { LabelDirective } from '../form-dialog/Directives/label.directive';
import { SharedModule } from '../../shared.module';
import { AlertDescDirective } from './Directives/alert-desc.directive';
import { AlertTitleDirective } from './Directives/alert-title.directive';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmIconComponent, SharedModule],
  providers: [provideIcons({ radixCube, radixExclamationTriangle })],
  template: `
      <div hlmAlert [variant]="variant" class="text-lg">
        <hlm-icon hlmAlertIcon name="radixExclamationTriangle" size="base" />
        <ng-container hlmAlertTitle *ngTemplateOutlet="alertTitle"></ng-container>
        <ng-container hlmAlertDescription *ngTemplateOutlet="alertDesc"></ng-container>
      </div>
    `,
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @ContentChild(AlertDescDirective, { read: TemplateRef }) alertDesc: any;
  @ContentChild(AlertTitleDirective, { read: TemplateRef }) alertTitle: any;
  @Input() variant: AlertVariants['variant'];
}

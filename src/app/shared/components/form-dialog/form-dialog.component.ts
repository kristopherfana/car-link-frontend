import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { LabelDirective } from './Directives/label.directive';
import { Body, Engine, ExteriorColor, InteriorColor, Model } from 'src/app/cars/model/car';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.scss'
})
export class FormDialogComponent {

  @Input() entityList!: (Body | Engine | InteriorColor | ExteriorColor)[];
  @Input() itemNameKey!: string;
  @Input() entityName!: "body" | "engine" | "interiorColor" | "exteriorColor";
  @ContentChild(LabelDirective, { read: TemplateRef }) labelTemplate: any;
  @Input() buttonDisabled: boolean | undefined = true;

  updateValue(button: HTMLButtonElement, entity: Body | Engine | InteriorColor | ExteriorColor, entityName: "body" | "engine" | "interiorColor" | "exteriorColor") {
    console.log(button.textContent);
    switch (entityName) {

      case "interiorColor":
      case "exteriorColor":
        button.textContent = (entity as InteriorColor | ExteriorColor).name;
        break;
      case "body":
        button.textContent = (entity as Body).type;
        break;
      case "engine":
        button.textContent = (entity as Engine).transmission;
        console.log("Engine")
        break;
      default:
        console.log("Nope");
        break;
    }
  }
}

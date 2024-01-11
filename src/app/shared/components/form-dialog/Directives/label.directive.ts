import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appLabel]',
  standalone: true
})
export class LabelDirective<T> {

  @Input('appLabel') appLabel!: T;

  constructor() { }

}

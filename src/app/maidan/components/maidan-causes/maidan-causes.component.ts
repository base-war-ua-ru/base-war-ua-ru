import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maidan-causes',
  standalone: true,
  imports: [],
  template: ` <div [innerHTML]="data"></div> `,
  styles: ``,
})
export class MaidanCausesComponent {
  @Input() data!: string;
}

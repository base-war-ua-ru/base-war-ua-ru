import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maidan-concept',
  standalone: true,
  imports: [],
  template: ` <div [innerHTML]="data"></div> `,
  styles: ``,
})
export class MaidanConceptComponent {
  @Input() data!: string;
}

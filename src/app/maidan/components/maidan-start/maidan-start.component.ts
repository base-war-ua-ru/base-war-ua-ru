import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maidan-start',
  standalone: true,
  imports: [],
  template: ` <div [innerHTML]="data"></div> `,
  styles: ``,
})
export class MaidanStartComponent {
  @Input() data!: string;
}

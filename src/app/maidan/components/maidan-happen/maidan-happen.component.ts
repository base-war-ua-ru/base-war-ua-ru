import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maidan-happen',
  standalone: true,
  imports: [],
  template: ` <div [innerHTML]="data"></div> `,
  styles: ``,
})
export class MaidanHappenComponent {
  @Input() data!: string;
}

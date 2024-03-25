import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { marked } from 'marked';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-principles',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="container" [innerHTML]="fileContent | async"></section>
  `,
  styles: `
    section {
      padding: 2rem;
    }

    .container h2 {
      text-align: center;
    }
  `,
})
export class PrinciplesComponent {
  fileContent: Observable<string | Promise<string>>;

  constructor(private http: HttpClient) {
    this.fileContent = this.http
      .get('assets/text/principles.md', { responseType: 'text' })
      .pipe(map((text) => marked.parse(text)));
  }
}

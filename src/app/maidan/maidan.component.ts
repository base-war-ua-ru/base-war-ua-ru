import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

import { Observable, forkJoin, map } from 'rxjs';

import { marked } from 'marked';
import { MaidanConceptComponent } from './components/maidan-concept/maidan-concept.component';
import { MaidanCausesComponent } from './components/maidan-causes/maidan-causes.component';
import { AsyncPipe } from '@angular/common';
import { MaidanStartComponent } from './components/maidan-start/maidan-start.component';
import { MaidanHappenComponent } from './components/maidan-happen/maidan-happen.component';
import { MarkdownService } from '../services/markdown.service';

@Component({
  selector: 'app-maidan',
  standalone: true,
  imports: [
    MaidanConceptComponent,
    MaidanCausesComponent,
    MaidanStartComponent,
    MaidanHappenComponent,
    AsyncPipe,
  ],
  templateUrl: './maidan.component.html',
  styleUrl: './maidan.component.css',
})
export class MaidanComponent implements OnInit {
  httpClient = inject(HttpClient);
  data$!: Observable<any>;

  constructor(private markdownService: MarkdownService) {}

  ngOnInit(): void {
    marked.use({ renderer: this.markdownService.renderer });

    const file1$ = this.httpClient
      .get('assets/text/maidan/concept.md', { responseType: 'text' })
      .pipe(map((text) => marked.parse(text)));
    const file2$ = this.httpClient
      .get('assets/text/maidan/causes.md', { responseType: 'text' })
      .pipe(map((text) => marked.parse(text)));
    const file3$ = this.httpClient
      .get('assets/text/maidan/start.md', { responseType: 'text' })
      .pipe(map((text) => marked.parse(text)));
    const file4$ = this.httpClient
      .get('assets/text/maidan/happen.md', { responseType: 'text' })
      .pipe(map((text) => marked.parse(text)));

    this.data$ = forkJoin([file1$, file2$, file3$, file4$]);
  }
}

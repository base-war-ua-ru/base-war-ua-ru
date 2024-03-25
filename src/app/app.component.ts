import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as marked from 'marked';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'base-war-ua-ru';
  fileContent: Observable<any>;

  constructor(private http: HttpClient) {
    this.fileContent = this.http
      .get('assets/t.md', { responseType: 'text' })
      .pipe(map((text) => marked.parse(text)));
  }
}

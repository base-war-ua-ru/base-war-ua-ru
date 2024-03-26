import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  //customize the way links are rendered in marked by using a custom renderer.
  renderer = new marked.Renderer();

  constructor() {
    this.renderer.link = (href, title, text) =>
      `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
  }
}

import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  renderer = new marked.Renderer();

  constructor(private sanitizer: DomSanitizer) {
    this.renderer.link = (href, title, text) =>
      `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

    this.renderer.heading = (text, level) => {
      const linkText = text.split('|')[0].trim();
      const escapedText = (text.split('|')[1] || linkText)
        .trim()
        .toLowerCase()
        .replace(/[^\w]+/g, '-');

      return `
        <h${level} id="${escapedText}">
          ${linkText}
        </h${level}>`;
    };
  }
}

import { Component } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { baseStructure } from '../core/structure';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-structure',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatTreeModule,
    RouterModule,
    DatePipe,
    TitleCasePipe,
  ],
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.css',
})
export class StructureComponent {
  baseStructure = baseStructure;
}

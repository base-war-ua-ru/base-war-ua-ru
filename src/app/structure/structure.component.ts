import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-structure',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.css',
})
export class StructureComponent {}

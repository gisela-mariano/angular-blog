import { TagStyle, TagTheme } from '@/types';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  content = input.required<string>();
  style = input<TagStyle>(
    {
      showDot: false,
      theme: TagTheme.DARK,
      fill: false,
    },
    { alias: 'tagStyle' }
  );
}

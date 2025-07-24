import { TagStyle, TagTheme } from '@/types';
import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class AppTag {
  content = input.required<string>();
  style = input<TagStyle>({}, { alias: 'tagStyle' });

  private readonly defaultStyle = signal<TagStyle>({
    showDot: false,
    theme: TagTheme.DARK,
    fill: false,
    showBorder: true,
  });

  readonly mergedStyle = computed(() => ({
    ...this.defaultStyle(),
    ...this.style(),
  }));
}

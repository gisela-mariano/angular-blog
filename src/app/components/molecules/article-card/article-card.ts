import { Tag, TagTheme } from '@/types';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { Button } from '@components/atoms/button/button';
import { AppTag } from '@components/atoms/tag/tag';

@Component({
  selector: 'app-article-card',
  imports: [AppTag, Button],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ArticleCard {
  TagTheme = TagTheme;

  image = input.required<string>();
  title = input.required<string>();
  insideTags = input<Tag[]>();
  category = input<string>();
}

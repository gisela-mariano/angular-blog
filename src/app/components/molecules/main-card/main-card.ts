import { Tag, TagTheme } from '@/types';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { Button } from '@components/atoms/button/button';
import { AppTag } from '../../atoms/tag/tag';

@Component({
  selector: 'app-main-card',
  imports: [AppTag, Button],
  templateUrl: './main-card.html',
  styleUrl: './main-card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainCard {
  TagTheme = TagTheme;

  tags = input<Tag[]>();
  bgImageUrl = input.required<string>();
}

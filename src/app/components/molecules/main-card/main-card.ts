import { MainCardTag, TagTheme } from '@/types';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { Button } from '@components/atoms/button/button';
import { Tag } from '@components/atoms/tag/tag';

@Component({
  selector: 'app-main-card',
  imports: [Tag, Button],
  templateUrl: './main-card.html',
  styleUrl: './main-card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainCard {
  TagTheme = TagTheme;

  tags = input<MainCardTag[]>();
  bgImageUrl = input.required<string>();
}

import { CTA, TagTheme } from '@/types';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { Button } from '@components/atoms/button/button';
import { AppTag } from '@components/atoms/tag/tag';

@Component({
  selector: 'app-ads-card',
  imports: [AppTag, Button],
  templateUrl: './ads-card.html',
  styleUrl: './ads-card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdsCard {
  TagTheme = TagTheme;

  title = input.required<string>();
  subtitle = input.required<string>();
  cta = input.required<CTA>();
}

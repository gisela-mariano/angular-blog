import { TagTheme } from '@/types';
import { DatePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { AdsCard } from '@components/molecules/ads-card/ads-card';
import { CarouselCard } from '@components/molecules/carousel-card/carousel-card';
import { HeaderMenu } from '@components/molecules/header-menu/header-menu';
import { MainCard } from '@components/molecules/main-card/main-card';

@Component({
  selector: 'app-home',
  imports: [HeaderMenu, MainCard, DatePipe, AdsCard, CarouselCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  TagTheme = TagTheme;

  titleTag = signal<string>('Travel');
  titleMessages = signal<string[]>([
    'Get your dream now',
    'destinations with',
    'TravelPro',
  ]);
}

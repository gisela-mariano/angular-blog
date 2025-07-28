import { TagTheme } from '@/types';
import { DatePipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { SectionTitle } from '@components/atoms/section-title/section-title';
import { AdsCard } from '@components/molecules/ads-card/ads-card';
import { CarouselCard } from '@components/molecules/carousel-card/carousel-card';
import { HeaderMenu } from '@components/molecules/header-menu/header-menu';
import { JoinForm } from '@components/molecules/join-form/join-form';
import { MainCard } from '@components/molecules/main-card/main-card';
import { FeaturedArticles } from '@components/organisms/featured-articles/featured-articles';

@Component({
  selector: 'app-home',
  imports: [
    HeaderMenu,
    MainCard,
    DatePipe,
    AdsCard,
    CarouselCard,
    SectionTitle,
    FeaturedArticles,
    JoinForm,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class Home {
  TagTheme = TagTheme;

  titleTag = signal<string>('Travel');
  titleMessages = signal<string[]>([
    'Get your dream now',
    'destinations with',
    'TravelPro',
  ]);

  footerImageUrls = signal<string[]>([
    'https://ik.imagekit.io/storybird/images/bdd90b5b-b6df-4a65-8ec9-c1bed517b5ea/0_274221147.webp?tr=q-80',
    'https://cdn.mos.cms.futurecdn.net/vv6boDgnRudyxjta3cg7SU.jpg',
    'https://artfasad.com/wp-content/uploads/2024/08/tomboy-outfit-ideas-22.jpg',
    'https://i.pinimg.com/474x/1e/e2/8c/1ee28c8d0d661b97c9dd9ea7b3a6a574.jpg',
  ]);
}

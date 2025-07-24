import { Article } from '@/types/article';
import { Component, input } from '@angular/core';
import { ArticleCard } from '@components/molecules/article-card/article-card';

@Component({
  selector: 'app-featured-articles',
  imports: [ArticleCard],
  templateUrl: './featured-articles.html',
  styleUrl: './featured-articles.scss',
})
export class FeaturedArticles {
  articles = input.required<Article[]>();
}

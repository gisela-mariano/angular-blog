import { Tag } from '@/types';

export type Article = {
  image: string;
  title: string;
  insideTags?: Tag[];
  category?: string;
};

import { Tag } from '@/types';

export type Article = {
  image: string;
  title: string;
  redirectPath: string;
  insideTags?: Tag[];
  category?: string;
};

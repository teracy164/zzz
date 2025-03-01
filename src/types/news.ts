export interface NewsItem {
  id: string;
  createdAt: string;
  title: string;
  description?: string;
  link: string;
  hashTags?: string[];
}

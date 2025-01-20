import type { NewsItem } from '~/types/news';

/** ニュースアイテム（追加するときはcreatedAt降順となるように追加する） */
export const NEWS: NewsItem[] = [
  {
    id: 'goods-20250121',
    createdAt: '2025/01/20',
    title: '【グッズ情報】主人公（アキラ・リン）のねんどろいど予約開始！！',
    link: '/news/goods/20250121',
  },
  { id: '', createdAt: '2025/01/19', title: '【エージェント情報】アストラ育成素材判明！！　※非リーク', link: '/news/agent/20250119-astra' },
  { id: '', createdAt: '2025/01/18', title: '【グッズ情報】エレン・ジョー 月曜から金曜まで【フィギュア】', link: '/news/goods/20250118' },
];

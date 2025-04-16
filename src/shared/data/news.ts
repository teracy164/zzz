import type { NewsItem } from '~/types/news';

/** ニュースアイテム（追加するときはcreatedAt降順となるように追加する） */
export const NEWS: NewsItem[] = [
  {
    id: 'goods-20250416',
    createdAt: '2025/04/16',
    title: '【グッズ情報】アキラとリンのフィギュアが登場！予約受付中！！【2025年10月発売予定】',
    description: 'ゼンレスゾーンゼロの主人公アキラとリンのフィギュアの予約があみあみにて開始されました。',
    link: '/news/goods/20250416',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
  {
    id: 'agent-20250412',
    createdAt: '2025/04/12',
    title: '【エージェント情報】ビビアンの育成素材判明！！',
    description: 'HoYoLABの育成ガイドにてビビアンの素材が公開されています',
    link: '/news/agent/20250412-vivian',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
  {
    id: 'agent-20250125',
    createdAt: '2025/01/25',
    title: '【エージェント情報】0号・アンビーの育成素材判明！！',
    description: 'HoYoLABの育成ガイドにてアンビーの素材が公開されています',
    link: '/news/agent/20250307-anby',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
  {
    id: 'goods-20250301',
    createdAt: '2025/03/01',
    title: '【グッズ情報】カリンの1/7フィギュア予約開始！【2026年01月発売予定】',
    description: 'ゼンレスゾーンゼロのヴィクトリア家政に属するカリン・ウィクスの1/7フィギュアの予約があみあみにて開始されました。',
    link: '/news/goods/20250301',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
  {
    id: 'agent-20250125',
    createdAt: '2025/01/25',
    title: '【エージェント情報】イヴリンの育成素材判明！！　※リークではありませんが、ネタバレ注意',
    description: 'ストーリー上で見れる情報にイブリンの育成素材判明！！',
    link: '/news/agent/20250125-eve',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
  {
    id: 'skin-20250120',
    createdAt: '2025/01/20',
    title: 'アストラ・エレン・ニコの新衣装が登場！！',
    link: '/news/skin/20250120',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
  {
    id: 'goods-20250121',
    createdAt: '2025/01/20',
    title: '【グッズ情報】主人公（アキラ・リン）のねんどろいど予約開始！！',
    link: '/news/goods/20250121',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },

  {
    id: '',
    createdAt: '2025/01/19',
    title: '【エージェント情報】アストラ育成素材判明！！　※非リーク',
    link: '/news/agent/20250119-astra',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
  {
    id: '',
    createdAt: '2025/01/18',
    title: '【グッズ情報】エレン・ジョー 月曜から金曜まで【フィギュア】',
    link: '/news/goods/20250118',
    hashTags: ['ゼンレスゾーンゼロ', 'ゼンゼロ', 'zzzero'],
  },
];

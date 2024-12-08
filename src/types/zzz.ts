/*
  公式データの型を定義
*/

/** ゼンゼロ戦績ページのJSONデータ */
export interface ZzzData {
  avatar_list: ZzzAvatar[];
  weapon_wiki: ZzzWiki;
  avatar_wiki: ZzzWiki;
  strategy_wiki: ZzzWiki;
}

export interface ZzzWiki {
  [id: string]: string;
}

export interface ZzzAvatar {
  id: number;
  level: number;
  name_mi18n: string;
  element_type: number;
  /** 所属 */
  camp_name_mi18n: string;
  avatar_profession: number;
  rarity: string;
  group_icon_path: string;
  hollow_icon_path: string;
  equip: ZzzEquip[];
  weapon: ZzzWeapon;
  properties: ZzzAvatarProperty[];
  skills: ZzzAvatarSkill[];
  rank: number;
  ranks: any[];
}

export interface ZzzAvatarProperty {
  property_name: string;
  property_id: number;
  base: string;
  add: string;
  final: string;
}

export interface ZzzAvatarSkill {
  level: number;
  skill_type: number;
  items: ZzzAvatarSkillItem[];
}

export interface ZzzAvatarSkillItem {
  title: string;
  text: string;
}

export interface ZzzAvatarRank {
  id: number;
  name: string;
  desc: string;
  pos: number;
  is_unlocked: boolean;
}

export interface ZzzEquip {
  id: number;
  level: number;
  name: string;
  icon: string;
  rarity: string;
  properties: ZzzEquipProperty[];
  main_properties: ZzzEquipProperty[];
  equip_suit: ZzzEquipSuit;
  equipment_type: number;
}

export interface ZzzEquipProperty {
  property_name: string;
  property_id: number;
  base: string;
}

export interface ZzzEquipSuit {
  suit_id: number;
  name: string;
  own: number;
  desc1: string;
  desc2: string;
}

export interface ZzzWeapon {
  id: number;
  level: number;
  name: string;
  star: number;
  icon: string;
  rarity: string;
  properties: ZzzEquipProperty[];
  main_properties: ZzzEquipProperty[];
  talent_title: string;
  talent_content: string;
  profession: number;
}

export interface ZzzScore {
  total: number;
  sub: { critRate: number; critDamage: number; attackRate: number };
}

export enum ZzzSkillType {
  NORMAL = 0,
  SKILL = 1,
  DASH = 2,
  ULT = 3,
  CORE = 5,
  SWITCH = 6,
}

export enum ZzzAttribute {
  PHYSICAL = 1,
  FIRE,
  ICE,
  ELECTRIC,
  ETHER,
}

export type ZzzAttributeInfo = {
  value: ZzzAttribute;
  icon: string;
  materialIcon: string;
};

export const ATTRIBUTE_NAMES: ZzzAttributeInfo[] = [
  { value: ZzzAttribute.PHYSICAL, icon: '/images/attributes/physical.png', materialIcon: '/images/tips/physical.webp' },
  { value: ZzzAttribute.FIRE, icon: '/images/attributes/fire.png', materialIcon: '/images/tips/fire.webp' },
  { value: ZzzAttribute.ICE, icon: '/images/attributes/ice.png', materialIcon: '/images/tips/ice.webp' },
  { value: ZzzAttribute.ELECTRIC, icon: '/images/attributes/electric.png', materialIcon: '/images/tips/electric.webp' },
  { value: ZzzAttribute.ETHER, icon: '/images/attributes/ether.png', materialIcon: '/images/tips/ether.webp' },
];

export enum ZzzProfession {
  ATTACK = 1,
  BREAKTHROUGH,
  ANOMALY,
  SUPPORT,
  DEFENSIVE,
}

export type ZzzProfessionInfo = {
  value: ZzzAttribute;
  icon: string;
  badgeIcon: string;
  kitIcon: string;
};

export const PROFESSION_NAMES = [
  {
    value: ZzzProfession.ATTACK,
    icon: '/images/professions/attack.png',
    kitIcon: '/images/kits/attack.webp',
    badgeIcon: '/images/badges/attack.webp',
  },
  {
    value: ZzzProfession.BREAKTHROUGH,
    icon: '/images/professions/breakthrough.png',
    kitIcon: '/images/kits/breakthrough.webp',
    badgeIcon: '/images/badges/breakthrough.webp',
  },
  {
    value: ZzzProfession.ANOMALY,
    icon: '/images/professions/anomaly.png',
    kitIcon: '/images/kits/anomaly.webp',
    badgeIcon: '/images/badges/anomaly.webp',
  },
  {
    value: ZzzProfession.SUPPORT,
    icon: '/images/professions/support.png',
    kitIcon: '/images/kits/support.webp',
    badgeIcon: '/images/badges/support.webp',
  },
  {
    value: ZzzProfession.DEFENSIVE,
    icon: '/images/professions/defensive.png',
    kitIcon: '/images/kits/defensive.webp',
    badgeIcon: '/images/badges/defensive.webp',
  },
];

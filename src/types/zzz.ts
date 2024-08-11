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

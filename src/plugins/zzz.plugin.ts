import type { MaterialBreakthrough, MaterialLevelUp } from '~/types/material';
import type { StorageHistoryItem } from '~/types/storage';
import type { ZzzAvatar, ZzzEquip, ZzzScore } from '~/types/zzz';

export class ZzzPlugin {
  private readonly STORAGE_KEY_HISTORY = 'history';
  private readonly ScoreBorders = [
    { score: 180, name: 'SS' },
    { score: 150, name: 'S' },
    { score: 120, name: 'A' },
    { score: 90, name: 'B' },
  ];

  getRank(totalScore: number) {
    const rank = this.ScoreBorders.find((item) => totalScore >= item.score);
    return rank?.name || 'C';
  }

  getRankBorders() {
    return this.ScoreBorders;
  }

  loadHistory(): StorageHistoryItem[] {
    const data = localStorage.getItem(this.STORAGE_KEY_HISTORY);
    if (data) {
      return JSON.parse(data) as StorageHistoryItem[];
    }
    return [];
  }

  removeHistory(index: number) {
    const histories = this.loadHistory();
    if (histories.length > index) {
      histories.splice(index, 1);
      localStorage.setItem(this.STORAGE_KEY_HISTORY, JSON.stringify(histories));
    }
  }

  clearHistory() {
    localStorage.removeItem(this.STORAGE_KEY_HISTORY);
  }

  saveAvatar(avatar: ZzzAvatar) {
    const history = this.loadHistory();

    const d = new Date();
    const pad = (value: number) => String(value).padStart(2, '0');
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hour = pad(d.getHours());
    const minute = pad(d.getMinutes());
    const sec = pad(d.getSeconds());
    const date = `${year}/${month}/${day} ${hour}:${minute}:${sec}`;
    const item = {
      date,
      data: avatar,
    } as StorageHistoryItem;
    // 100件まで保持可能とする
    const json = JSON.stringify([item, ...history].slice(0, 100));
    localStorage.setItem(this.STORAGE_KEY_HISTORY, json);

    return item;
  }

  /** キャラ属性⇒画像URL変換 */
  getElementImg(elementType: number) {
    const items: { [type: number]: string } = {
      /** 物理 */
      200: 'https://act.hoyolab.com/app/mihoyo-zzz-game-record/images/attribute-physical-icon.a657c07a.png',
      /** 炎 */
      201: '	https://act.hoyolab.com/app/mihoyo-zzz-game-record/images/attribute-fire-icon.aeddecee.png',
      /** 氷 */
      202: 'https://act.hoyolab.com/app/mihoyo-zzz-game-record/images/attribute-ice-icon.5c85742d.png',
      /** 電撃 */
      203: '	https://act.hoyolab.com/app/mihoyo-zzz-game-record/images/attribute-electric-icon.ad4c441f.png',
      /** エーテル */
      205: 'https://act.hoyolab.com/app/mihoyo-zzz-game-record/images/attribute-ether-icon.9a1e42a1.png',
    };
    return items[elementType] || '';
  }

  /** キャラタイプ⇒画像URL変換 */
  getProfessionImg(professionType: number) {
    const items: { [type: number]: string } = {
      /** 強攻 */
      1: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/07/78d407e2839038da13d26ad84b99a6b8_8151225937174652019.png',
      /** 撃破 */
      2: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/07/a798cde5543596aae302d7fc037df2d5_4111998480888596222.png',
      /** 異常 */
      3: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/07/55982d13c3284d382a9a59ce9f5e5d50_2052082579823154975.png',
      /** 支援 */
      4: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/07/e1ce1ff7a8c3debf3235b2bbd94bd4c0_2060958246427347333.png',
      /** 防護 */
      5: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/07/ba974570d0627f78131b5c09ffb630f2_1224778078231447651.png',
    };
    return items[professionType] || '';
  }

  calcScore(equip: ZzzEquip): ZzzScore {
    const score = {
      total: 0,
      sub: { critRate: 0, critDamage: 0, attackRate: 0 },
    };
    for (const p of equip.properties) {
      if (p.property_id === 20103) {
        score.sub.critRate += this.pickNumber(p.base) * 2;
      } else if (p.property_id === 21103) {
        score.sub.critDamage += this.pickNumber(p.base);
      } else if (p.property_id === 12102) {
        score.sub.attackRate += this.pickNumber(p.base);
      }
    }

    const total = Object.values(score.sub).reduce((sum, v) => sum + v, 0);
    score.total = this.adjustScore(total);
    return score;
  }

  /**
   * まるめ誤差対策のための調整
   * ※小数点2位以下を切り捨て
   */
  adjustScore(value: number) {
    return Math.floor(value * 10) / 10;
  }

  private pickNumber(value: any) {
    const matches = String(value).match(/^([0-9.]+)%?$/);
    if (matches?.length) {
      return this.adjustScore(Number(matches[1]));
    }
    return 0;
  }

  /** キャラの育成素材一覧を取得 */
  getCharacterMaterials(rank: 'S' | 'A' = 'S') {
    return {
      breakthrough: this.getCharacterBreakthroughMaterials(rank),
      exp: this.getCharacterExpMaterials(rank),
      skill: this.getCharacterSkillMaterials(rank),
      core: this.getCharacterCoreSkillMaterials(rank),
    };
  }

  /** キャラ突破素材一覧を取得 */
  getCharacterBreakthroughMaterials(rank: 'S' | 'A' = 'S') {
    const table = {
      S: [
        { lv: 10, money: 24000, materials: { rank: 'C', num: 4 } },
        { lv: 20, money: 56000, materials: { rank: 'B', num: 12 } },
        { lv: 30, money: 120000, materials: { rank: 'B', num: 20 } },
        { lv: 40, money: 200000, materials: { rank: 'A', num: 10 } },
        { lv: 50, money: 400000, materials: { rank: 'A', num: 20 } },
      ],
      // TODO
      // A: [],
    };

    return table[rank].reduce((list, item, index) => {
      const d: MaterialBreakthrough = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } };
      if (index > 0) {
        // ひとつ前の累計情報をコピー
        Object.assign(d.sum, list[index - 1].sum);
      }
      d.sum[item.materials.rank] += item.materials.num;
      d.sum.money += item.money;
      return list.concat(d);
    }, [] as MaterialBreakthrough[]);
  }

  /** キャラの経験値素材一覧を取得 */
  getCharacterExpMaterials(rank: 'S' | 'A' = 'S') {
    const table = {
      S: [
        { lv: '0～10', require: 6000 },
        { lv: '11～20', require: 24000 },
        { lv: '21～30', require: 60000 },
        { lv: '31～40', require: 135000 },
        { lv: '41～50', require: 225000 },
        { lv: '51～60', require: 450000 },
      ],
      // TODO
      // A: [],
    };
    return table[rank].reduce((list, item, index) => {
      const d: MaterialLevelUp = {
        ...item,
        materials: { rank: 'A', num: Math.ceil(item.require / 3000) },
        sumExp: 0,
        sum: { rank: 'A', num: 0 },
      };
      if (index > 0) {
        d.sumExp = list[index - 1].sumExp;
      }
      d.sumExp += d.require;
      d.sum.num = Math.ceil(d.sumExp / 3000);
      list.push(d);
      return list;
    }, [] as MaterialLevelUp[]);
  }

  /** キャラのスキル素材一覧を取得 */
  getCharacterSkillMaterials(rank: 'S' | 'A' = 'S') {
    const table = {
      S: [
        { lv: 2, money: 2000, materials: { rank: 'C', num: 2 } },
        { lv: 3, money: 3000, materials: { rank: 'C', num: 3 } },
        { lv: 4, money: 6000, materials: { rank: 'B', num: 2 } },
        { lv: 5, money: 9000, materials: { rank: 'B', num: 3 } },
        { lv: 6, money: 12000, materials: { rank: 'B', num: 4 } },
        { lv: 7, money: 18000, materials: { rank: 'B', num: 6 } },
        { lv: 8, money: 45000, materials: { rank: 'A', num: 5 } },
        { lv: 9, money: 67500, materials: { rank: 'A', num: 8 } },
        { lv: 10, money: 90000, materials: { rank: 'A', num: 10 } },
        { lv: 11, money: 112500, materials: { rank: 'A', num: 12 } },
        { lv: 12, money: 135000, materials: { rank: 'A', num: 15 }, ex: 1 },
      ],
      // A: [],
    };
    return table[rank].reduce((list, item, index) => {
      const d = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } };
      if (index > 0) {
        // ひとつ前の累計情報をコピー
        Object.assign(d.sum, list[index - 1].sum);
      }
      d.sum[item.materials.rank] += item.materials.num;
      d.sum.money += item.money;
      return list.concat(d);
    }, [] as any[]);
  }

  /** キャラのコアスキル素材一覧を取得 */
  getCharacterCoreSkillMaterials(rank: 'S' | 'A' = 'S') {
    const table = {
      S: [
        { lv: 1, money: 5000, expert: 0, boss: 0 },
        { lv: 2, money: 12000, expert: 2, boss: 0 },
        { lv: 3, money: 28000, expert: 4, boss: 0 },
        { lv: 4, money: 60000, expert: 9, boss: 2 },
        { lv: 5, money: 100000, expert: 15, boss: 3 },
        { lv: 6, money: 200000, expert: 30, boss: 4 },
      ],
      // TODO
      // A: [],
    };
    return table[rank].reduce((list, item, index) => {
      const d = { ...item, no: this.toCoreSkillLavel(item.lv), sum: { money: 0, expert: 0, boss: 0 } };
      if (index > 0) {
        // ひとつ前の累計情報をコピー
        Object.assign(d.sum, list[index - 1].sum);
      }
      d.sum.money += item.money;
      d.sum.expert += item.expert;
      d.sum.boss += item.boss;

      return list.concat(d);
    }, []);
  }

  /** 武器の育成素材一覧を取得 */
  getWeaponMaterials(rank: 'S' | 'A' = 'S') {
    return {
      breakthrough: this.getWeaponBreakthroughMaterials(rank),
      exp: this.getWeaponExpMaterials(rank),
    };
  }

  /** 武器突破素材一覧を取得 */
  getWeaponBreakthroughMaterials(rank: 'S' | 'A' = 'S') {
    const table = {
      S: [
        { lv: 10, money: 12000, materials: { rank: 'C', num: 4 } },
        { lv: 20, money: 28000, materials: { rank: 'B', num: 12 } },
        { lv: 30, money: 60000, materials: { rank: 'B', num: 20 } },
        { lv: 40, money: 100000, materials: { rank: 'A', num: 10 } },
        { lv: 50, money: 200000, materials: { rank: 'A', num: 20 } },
      ],
      // TODO
      // A: [],
    };
    return table[rank].reduce((list, item, index) => {
      const d: MaterialBreakthrough = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } };
      if (index > 0) {
        // ひとつ前の累計情報をコピー
        Object.assign(d.sum, list[index - 1].sum);
      }
      d.sum[item.materials.rank] += item.materials.num;
      d.sum.money += item.money;
      return list.concat(d);
    }, [] as MaterialBreakthrough[]);
  }

  /** 武器の経験値素材一覧 */
  getWeaponExpMaterials(rank: 'S' | 'A') {
    const table = {
      S: [
        { lv: '0～10', require: 4000 },
        { lv: '11～20', require: 16000 },
        { lv: '21～30', require: 40000 },
        { lv: '31～40', require: 90000 },
        { lv: '41～50', require: 150000 },
        { lv: '51～60', require: 300000 },
      ],
      // TODO
      // A: [],
    };

    return table[rank].reduce((list, item, index) => {
      const d = { ...item, materials: { rank: 'A', num: Math.ceil(item.require / 3000) }, sumExp: 0, sum: { rank: 'A', num: 0 } };
      if (index > 0) {
        d.sumExp = list[index - 1].sumExp;
      }
      d.sumExp += d.require;
      d.sum.num = Math.ceil(d.sumExp / 3000);
      list.push(d);
      return list;
      return list;
    }, [] as MaterialLevelUp[]);
  }

  /** コアスキルのインデックスからA～Fのラベルに変換 */
  toCoreSkillLavel(index: number) {
    const labels = {
      0: '',
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
      5: 'E',
      6: 'F',
    };
    return labels[index];
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      zzz: new ZzzPlugin(),
    },
  };
});

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
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      zzz: new ZzzPlugin(),
    },
  };
});

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

  /** 属性の数値⇒名称変換 */
  getElementName(elementType: number) {
    const items: { [type: number]: string } = {
      200: '物理',
      201: '炎',
      202: '氷',
      203: '電撃',
      205: 'エーテル',
    };
    return items[elementType] || '';
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

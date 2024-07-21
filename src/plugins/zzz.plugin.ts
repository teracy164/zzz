import type { ZzzEquip, ZzzScore } from '~/types/zzz';

export class ZzzPlugin {
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

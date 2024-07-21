import type { ZzzEquip, ZzzScore } from '~/types/zzz'

export class ZzzPlugin {
  calcScore(equip: ZzzEquip): ZzzScore {
    const score = {
      total: 0,
      sub: { critRate: 0, critDamage: 0, attackRate: 0 },
    }
    console.log(equip)
    for (const p of equip.properties) {
      console.log(p.property_name, p.property_id, this.pickNumber(p.base))
      if (p.property_id === 20103) {
        score.sub.critRate += this.pickNumber(p.base) * 2
      } else if (p.property_id === 21103) {
        score.sub.critDamage += this.pickNumber(p.base)
      } else if (p.property_id === 12102) {
        score.sub.attackRate += this.pickNumber(p.base)
      }
    }

    score.total = Object.values(score.sub).reduce((sum, v) => sum + v, 0)
    // 小数点第2位以下を切り捨て
    score.total = Math.floor(score.total * 10) / 10
    return score
  }

  private pickNumber(value: any) {
    const matches = String(value).match(/^([0-9.]+)%?$/)
    if (matches?.length) {
      console.log(value, matches)
      return Math.floor(Number(matches[1]) * 10) / 10
    }
    return 0
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      zzz: new ZzzPlugin(),
    },
  }
})

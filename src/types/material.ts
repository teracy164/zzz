/** レベルアップ素材 */
export interface MaterialExp {
  /** from～to形式で定義 */
  lv: string;
  require: number;
  materials: { rank: string; num: number };
  sumExp: number;
  sum: { rank: string; num: number };
}

/** 突破素材 */
export interface MaterialBreakthrough {
  lv: number;
  money: number;
  materials: { rank: string; num: number };
  sum: { A: number; B: number; C: number; money: number };
}

/** スキル素材 */
export interface MaterialSkill {
  lv: number;
  money: number;
  materials: { rank: string; num: number };
  sum: { A: number; B: number; C: number; money: number };
  /** ﾊﾑｽﾀｰｹｰｼﾞの必要数 */
  ex?: number;
}

/** コアスキル素材 */
export interface MaterialCoreSkill {
  no: string;
  lv: number;
  money: number;
  /** エキスパート素材数 */
  expert: number;
  /** 週ボス素材数 */
  boss: number;
  sum: { expert: number; boss: number; money: number };
}

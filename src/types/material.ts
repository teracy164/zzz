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

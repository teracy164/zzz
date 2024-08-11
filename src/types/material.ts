/** レベルアップ素材 */
export interface MaterialLevelUp {
  lv: string;
  require: number;
  materials: { rank: string; num: number };
  sumExp: number;
  sum: { rank: string; num: number };
}

/** 突破素材 */
export interface MaterialBreakthrough {
  lv: string;
  money: number;
  materials: { rank: string; num: number };
  sum: { A: number; B: number; C: number; money: number };
}

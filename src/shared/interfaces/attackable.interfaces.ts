import type { IHealthable } from './healthable.interfaces';

export interface IAttackable {
  attack: (target: IHealthable) => void;

  getAttackPoints: () => number;
}

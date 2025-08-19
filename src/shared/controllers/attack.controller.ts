import type { IAttackable, IHealthable } from '../interfaces';

export class AttackController implements IAttackable {
  private attackPoints: number;

  constructor(attackPoints: number = 20) {
    this.attackPoints = attackPoints;
  }

  attack(target: IHealthable) {
    target.takeAwayHealth(this.attackPoints);
  }

  getAttackPoints() {
    return this.attackPoints;
  }
}

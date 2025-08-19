import type { IHealthable } from "../interfaces";

export class HealthController implements IHealthable {
  private health: number;
  private maxHealth: number;
  private regenerationPoints: number;

  constructor(
    _initialHealth: number,
    _maxHealth: number,
    _regenerationPoints: number = 10
  ) {
    this.health = _initialHealth;
    this.maxHealth = _maxHealth;
    this.regenerationPoints = _regenerationPoints;
  }

  addHealth(healthPoints: number) {
    this.health = Math.max(this.maxHealth, this.health + healthPoints);
  }

  takeAwayHealth(healthPoints: number) {
    this.health = Math.max(0, this.health - healthPoints);
  }

  getHealth() {
    return this.health;
  }

  getMaxHealth() {
    return this.maxHealth;
  }
}

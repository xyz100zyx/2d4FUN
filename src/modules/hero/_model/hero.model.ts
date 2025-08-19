import {
  HealthController,
  PositionController,
} from "../../../shared/controllers";
import { AttackController } from "../../../shared/controllers/attack.controller";
import type {
  IAttackable,
  IHealthable,
  IMovable,
  IPosition,
  TPosition,
} from "../../../shared/interfaces";

export class Hero implements IHealthable, IAttackable, IMovable, IPosition {
  private healthController: HealthController;
  private attackController: AttackController;
  private positionController: PositionController;

  constructor(
    health: number,
    maxHealth: number,
    regenerationPoints: number,
    attackPoints: number,
    initialPosition: TPosition
  ) {
    this.healthController = new HealthController(
      health,
      maxHealth,
      regenerationPoints
    );
    this.attackController = new AttackController(attackPoints);
    this.positionController = new PositionController(initialPosition);
  }

  getHealth() {
    return this.healthController.getHealth();
  }

  getMaxHealth() {
    return this.healthController.getMaxHealth();
  }

  addHealth() {}

  takeAwayHealth() {}

  attack(target: IHealthable) {}

  getAttackPoints() {
    return this.attackController.getAttackPoints();
  }

  jump() {}

  run() {}

  changePosition(x: number, y: number) {
    this.positionController.changePosition(x, y);
  }

  changeX(x: number) {
    this.positionController.changeX(x);
  }

  changeY(y: number) {
    this.positionController.changeY(y);
  }

  getPosition() {
    return this.positionController.getPosition();
  }

  getX() {
    return this.positionController.getX();
  }

  getY() {
    return this.positionController.getY();
  }
}

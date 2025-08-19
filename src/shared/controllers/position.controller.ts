import type { IPosition, TPosition } from "../interfaces";

export class PositionController implements IPosition {
  private position: TPosition;

  constructor(initialPosition: TPosition = { x: 0, y: 0 }) {
    this.position = initialPosition;
  }

  getPosition() {
    return this.position;
  }

  getX() {
    return this.position.x;
  }

  getY() {
    return this.position.y;
  }

  changePosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }

  changeX(x: number) {
    this.position.x = x;
  }

  changeY(y: number) {
    this.position.y = y;
  }
}

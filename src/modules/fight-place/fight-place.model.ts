import type { IDrawable } from "../../shared/interfaces";

export class FightPlace implements IDrawable {
  private readonly image: HTMLImageElement;

  constructor(backgroundUrl: string) {
    this.image = new Image();
    this.image.src = backgroundUrl;
  }
  draw(context: CanvasRenderingContext2D) {}
}

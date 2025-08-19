export type TPosition = {
  x: number;
  y: number;
};

export interface IPosition {
  getPosition: () => TPosition;
  getX: () => TPosition['x'];
  getY: () => TPosition['y'];

  changePosition: (x: number, y: number) => void;
  changeX: (x: number) => void;
  changeY: (y: number) => void;
}

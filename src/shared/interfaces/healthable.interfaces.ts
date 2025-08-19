export interface IHealthable {
  takeAwayHealth: (value: number) => void;
  addHealth: (value: number) => void;

  getHealth: () => number;
  getMaxHealth: () => number;
}

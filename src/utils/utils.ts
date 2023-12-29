import { TPrices } from '../types';

export const generatePastelColor = () => {
  const randomNum = () => Math.floor(Math.random() * 129) + 64;

  const r = randomNum().toString(16).padStart(2, '0');
  const g = randomNum().toString(16).padStart(2, '0');
  const b = randomNum().toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
};

export const findHalfBaseInPercents = (angle: number) => {
  const inRadians = (angle / 2) * (Math.PI / 180);

  return 50 * Math.tan(inRadians);
};

export const generateWinProbability = (prices: TPrices) => {
  const sum = prices.reduce(
    (accumulator, price) => accumulator + price.probability,
    0
  );

  let pick = Math.random() * sum;
  const i = prices.findIndex((price) => (pick -= price.probability) <= 0);

  return i !== -1 ? i : 0;
};

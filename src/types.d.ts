import { prices } from './mockup';

type TPrices = typeof prices;

type TWheelOfFortune = {
  prices: TPrices;
  spinning: boolean;
  startStopSpinning: (state: boolean) => void;
  showResult: (str: string) => void;
};

import { Periods } from '@/types';

export type DataItem = {
  date: number;
  [key: string]: number;
};

export type DataKeys<T> = {
  x: keyof T;
  y: keyof T;
};

export type Dimensions = {
  width: number;
  height: number;
};

export type Point = {
  x: number;
  y: number;
};

export type ChartContextProps = {
  container: Dimensions;
  plot: Dimensions;
  period: Periods;
  labelsTickLengths: Point;
  offset: Point;
  verticalLabels: Array<number | string>;
  horizontalLabels: Array<number | string>;
  dataKeys: DataKeys<DataItem>;
  data: Array<DataItem>;
};
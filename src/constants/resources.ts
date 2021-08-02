export interface IColorsVariable {
  DARKEN_1?: string;
  BASE: string;
  LIGHTEN_1?: string;
  LIGHTEN_2?: string;
  LIGHTEN_3?: string;
}

export interface IColors {
  PRIMARY: IColorsVariable;
  WHITE: IColorsVariable;
  GRAY: IColorsVariable;
  BLACK: IColorsVariable;
  SUCCESS: IColorsVariable;
  DANGER: IColorsVariable;
}

export const Colors: IColors = {
  PRIMARY: {
    BASE: '#75255D',
  },
  WHITE: {
    BASE: '#ffffff',
  },
  GRAY: {
    DARKEN_1: '#424949',
    BASE: '#616A6B',
    LIGHTEN_1: '#7F8C8D',
    LIGHTEN_2: '#B2BABB',
    LIGHTEN_3: '#E5E8E8',
  },
  BLACK: {
    BASE: '#272426',
  },
  SUCCESS: {
    BASE: '#65D932',
  },
  DANGER: {
    BASE: '#E52B2B',
  },
};

export interface IFontSize {
  EXTRA_SMALL: number;
  SMALL: number;
  DEFAULT: number;
  MEDIUM: number;
  BIG: number;
  EXTRA_BIG: number;
}

export const FontSize: IFontSize = {
  EXTRA_SMALL: 10,
  SMALL: 12,
  DEFAULT: 14,
  MEDIUM: 16,
  BIG: 24,
  EXTRA_BIG: 32,
};

export interface IPadding {
  VERY_SMALL: number;
  SMALL: number;
  DEFAULT: number;
  MEDIUM: number;
  BIG: number;
}

export const Padding: IPadding = {
  VERY_SMALL: 4,
  SMALL: 8,
  DEFAULT: 16,
  MEDIUM: 24,
  BIG: 32,
};

export interface IBorder {
  SMALL: number;
}

export const Border: IBorder = {
  SMALL: 8,
};

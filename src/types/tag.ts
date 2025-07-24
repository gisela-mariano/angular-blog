export enum TagTheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type TagStyle = {
  showDot?: boolean;
  theme?: TagTheme;
  fill?: boolean;
  showBorder?: boolean;
};

export type Tag = {
  label: string;
  style?: TagStyle;
};

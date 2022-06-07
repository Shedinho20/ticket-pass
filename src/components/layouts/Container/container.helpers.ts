import { CSSProperties } from 'react';

export interface ContainerProps {
  extraClassNames?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flex?: number;
  gap?: number | 'space-between';
  bgColor?: string;
  pagePadding?: boolean;
  align?: 'flex-end' | 'center';
  justify?: 'flex-end' | 'center';
  children: React.ReactNode;
}

export const getStyles = ({
  direction = 'row',
  flex,
  gap,
  pagePadding,
  bgColor,
  align,
  justify
}: ContainerProps): CSSProperties => ({
  flexDirection: direction,
  flex,
  gap: gap === 'space-between' ? undefined : gap,
  justifyContent: justify ? justify : gap === 'space-between' ? gap : undefined,
  padding: pagePadding ? '2em 2.5em' : undefined,
  backgroundColor: bgColor,
  alignItems: align
});

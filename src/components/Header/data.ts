export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly className: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
} 

export const colourOptions: readonly ColourOption[] = [
  { value: 'price', label: 'Price', className: '#00B8D9' },
  { value: 'date', label: 'Publish Date', className: '#0052CC' },
];
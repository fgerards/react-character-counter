declare module '@fgerards/react-character-counter' {
  import * as React from 'react';

  export interface CharacterCounterProps {
    value: string;
    maxLength: number;
    wrapperStyle?: React.CSSProperties;
    characterCounterStyle?: React.CSSProperties;
    overrideStyle?: boolean;
    children: React.ReactNode;
    warningThreshold?: number;
  }

  const CharacterCounter: React.FC<CharacterCounterProps>;
  export default CharacterCounter;
}

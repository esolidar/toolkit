import React, { FC } from 'react';
import Props from './TextWithBreakLine.types';

const TextWithBreakLine: FC<Props> = ({ text }: Props): JSX.Element => {
  return (
    <>
      {text.split('\n').map((item, index) => (
        <span key={index} data-testid={`textWithBreakLine-${index}`}>
          {item}
          <br />
        </span>
      ))}
    </>
  );
};
export default TextWithBreakLine;

import React from 'react';
import Props from './Section.types';
import Viewport from '../../../../components/viewport';
import rawDraftToHtml from '../../../../utils/rawDraftToHtml';

const CustomQuestionsSection = ({ title, description }: Props): JSX.Element => {
  const text = rawDraftToHtml(description, 1);

  return (
    <Viewport size="xl">
      <>
        <h2>{title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </>
    </Viewport>
  );
};

export default CustomQuestionsSection;

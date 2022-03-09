import React from 'react';
import CustomQuestionsSectionProps from './CustomQuestionsSection.types';
import Viewport from '../../../../components/viewport';
import rawDraftToHtml from '../../../../utils/rawDraftToHtml';

const CustomQuestionsSection = ({
  title,
  description,
}: CustomQuestionsSectionProps): JSX.Element => {
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

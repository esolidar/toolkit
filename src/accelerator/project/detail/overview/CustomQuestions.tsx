import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import Badge from '../../../../elements/badge';
import rawDraftToHtml from '../../../../utils/rawDraftToHtml';

interface Options {
  id: number;
  value: string;
}

interface Form {
  description: any;
  title: string;
  privacy: 'private' | 'public';
  question: string;
  options: Options[];
}

interface Question {
  form?: Form;
  reply: string | string[];
  description: string;
  name: string;
  type: 'section' | 'multiChoice' | 'checkboxes' | 'fileUploader';
}

interface Props {
  question: Question;
  companyName: string;
}

const CustomQuestions = ({ question, companyName }: Props) => {
  const isDescriptionString = typeof question.form?.description === 'string';

  const isDescriptionEmpty = isDescriptionString
    ? question.form?.description
    : question.form?.description.blocks[0].text;

  const descriptionPreview = isDescriptionString
    ? question.description
    : rawDraftToHtml(question.form?.description, 1);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  if (question.type === 'section') {
    return (
      <>
        <h3>
          {question.form.title || question.form.question}
          {question.form.privacy === 'private' && <PrivateBadge companyName={companyName} />}
        </h3>
        {isDescriptionEmpty && (
          <div
            dangerouslySetInnerHTML={{
              __html: descriptionPreview,
            }}
          />
        )}
      </>
    );
  }

  if (question.reply?.length === 0) return <></>;

  if (question.type === 'multiChoice' || question.type === 'checkboxes') {
    const getReplyValue = () => {
      const { reply } = question;
      if (typeof reply === 'string')
        return <li>{question.form.options.find(q => q.id === +reply).value}</li>;

      const repliesList = (reply || []).map((r, index) => (
        <li key={index}>{question.form.options.find(q => q.id === +r).value}</li>
      ));
      return repliesList;
    };

    return (
      <>
        <h3>
          {question.form.question}
          {question.form.privacy === 'private' && <PrivateBadge companyName={companyName} />}
        </h3>
        <ul>{getReplyValue()}</ul>
      </>
    );
  }

  if (question.type === 'fileUploader') return <></>;

  return (
    <>
      <h3>
        {question.form?.title || question.form?.question || question.name}
        {question.form?.privacy === 'private' && <PrivateBadge companyName={companyName} />}
      </h3>

      {question.reply && typeof question.reply === 'string' && <p>{question.reply}</p>}
    </>
  );
};

export default CustomQuestions;

interface PrivateBadgeProps {
  companyName: string;
}

const PrivateBadge = ({ companyName }: PrivateBadgeProps) => {
  const intl = useIntl();
  return (
    <div
      data-tip={intl.formatMessage(
        {
          id: 'toolkit.visible.only.admins',
        },
        { companyName }
      )}
    >
      <Badge extraClass="white" size="md" text="toolkit.private" />
    </div>
  );
};

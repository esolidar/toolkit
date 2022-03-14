import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './Video.types';
import Viewport from '../../../../components/viewport';
import TextField from '../../../../elements/forms/textField';

const Video = ({ name, control, id, reply, required }: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <Viewport size="lg" centred={false}>
      <div className="page-content-checkbox">
        <h2>{intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.video' })}</h2>
        <p>
          <FormattedMessage id="toolkit.project.video.description-1" />
          <br />
          <br />
          <FormattedMessage id="toolkit.project.video.description-2" />
        </p>
        <p className="small">
          <FormattedMessage id="toolkit.project.video.helper" />
        </p>
        <TextField
          name={name}
          control={control}
          required={required}
          textFieldProps={{
            id,
            value: reply,
            size: 'lg',
            placeholder: 'https://www.youtube.com/watch?v=myvideo',
          }}
        />
      </div>
    </Viewport>
  );
};

export default Video;

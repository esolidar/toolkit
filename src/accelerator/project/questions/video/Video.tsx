import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './Video.types';
import Viewport from '../../../../components/viewport';
import Preview from '../../../../components/preview';
import TextField from '../../../../elements/forms/textField';

// TODO: remove onBlur, validate url with debounce
// TODO: after validation of the url, skeleton can appear
// TODO: input should have a loading icon

const Video = ({ name, control, id, reply, required, onDeletePreview }: Props): JSX.Element => {
  const intl = useIntl();
  const canDisplayVideoPreview = useRef(false);
  const [videoUrl, setVideoUrl] = useState(reply);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (videoUrl === '' && !!reply && !canDisplayVideoPreview.current) {
      canDisplayVideoPreview.current = true;
      setVideoUrl(reply);
    }
  }, [reply]);

  const handleBlurInput = ({ target: { value } }) => {
    setVideoUrl(value);
    setError(null);
  };

  const handleDeleteImage = () => {
    onDeletePreview();
    setVideoUrl('');
  };

  const handleErrorVideo = () => {
    setError(intl.formatMessage({ id: 'toolkit.project.video.error' }));
  };

  return (
    <Viewport size="lg" centred={false}>
      <div className="page-content-video">
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
            error,
          }}
          onBlur={handleBlurInput}
        />
        {videoUrl !== '' && canDisplayVideoPreview.current && (
          <Preview
            type="video"
            videoUrl={videoUrl}
            handleDeleteImage={handleDeleteImage}
            onErrorVideo={handleErrorVideo}
          />
        )}
      </div>
    </Viewport>
  );
};

export default Video;

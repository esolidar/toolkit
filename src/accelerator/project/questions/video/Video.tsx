import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './Video.types';
import Viewport from '../../../../components/viewport';
import Preview from '../../../../components/preview';
import TextField from '../../../../elements/forms/textField';
import useDebounce from '../../../../hooks/useDebounce';

const Video = ({
  name,
  control,
  reply,
  required,
  onFinishVideoValidation,
  onDeletePreview,
}: Props): JSX.Element => {
  const intl = useIntl();
  const debouncedReply = useDebounce(reply, 500);

  const [isValidatingVideo, setIsValidatingVideo] = useState(false);
  const [isVideoValid, setIsVideoValid] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (reply === '') {
      if (error !== null) setError(null);
      if (isValidatingVideo) setIsValidatingVideo(false);
      if (isVideoValid) setIsVideoValid(false);
    }
  }, [reply]);

  useEffect(() => {
    if (reply !== '') {
      if (error !== null) setError(null);
      if (debouncedReply !== '' && !isValidatingVideo) setIsValidatingVideo(true);
    }
  }, [debouncedReply]);

  const handleOnDeleteImage = e => {
    e.stopPropagation();
    onDeletePreview();
    if (error !== null) setError(null);
    if (isValidatingVideo) setIsValidatingVideo(false);
    if (isVideoValid) setIsVideoValid(false);
  };

  const handleClickPreview = () => {
    window.open(reply);
  };

  const handleOnFinishVideoValidation = videoDetails => {
    const { hasError } = videoDetails;

    setIsValidatingVideo(false);
    setIsVideoValid(!hasError);
    onFinishVideoValidation(videoDetails);
    if (hasError && reply !== '')
      setError(intl.formatMessage({ id: 'toolkit.project.video.error' }));
  };

  return (
    <Viewport size="lg" centred={false}>
      <div className="page-content-video">
        <h2>
          {intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.video' })}
          <span className="h2-optional">({intl.formatMessage({ id: 'optional' })})</span>
        </h2>
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
            size: 'lg',
            placeholder: 'https://www.youtube.com/watch?v=myvideo',
            error,
            isLoading: isValidatingVideo,
          }}
        />
        <Preview
          type="video"
          videoUrl={debouncedReply}
          handleDeleteImage={e => handleOnDeleteImage(e)}
          handleClickPreview={handleClickPreview}
          onFinishVideoValidation={handleOnFinishVideoValidation}
          isVisible={reply !== '' && isVideoValid && !isValidatingVideo}
        />
      </div>
    </Viewport>
  );
};

export default Video;

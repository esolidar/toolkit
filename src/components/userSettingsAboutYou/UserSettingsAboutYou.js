import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../elements/button/Button';
import DropZoneBox from '../../elements/dropZoneBox/DropZoneBox';

const UserSettingsAboutYou = ({ translateMessage, color, thumb, errors, onDrop, env }) => {
  const handleOnSelect = file => {
    const type = typeof file.name === 'string' ? 'file' : 'blob';

    const thumb = type === 'blob' ? URL.createObjectURL(file[0]) : file[0].preview;

    onDrop({
      image: file,
      thumb,
    });
  };

  return (
    <div className="user-settings-about-you">
      <h4 style={{ color: color.primaryColor }} data-testid="title-settings-about-you">
        <FormattedMessage id="user.settings.regional" defaultMessage="About you" />
      </h4>
      <div className="box">
        <div
          className={classnames('form-group overflow-auto', {
            'has-error': errors.image,
          })}
        >
          <div className="thumb-box">
            <div
              className="thumb"
              data-testid="thumb-settings-about-you"
              style={{ backgroundImage: `url(${thumb})` }}
            />
          </div>
          {errors.image && <span className="help-block">{errors.image}</span>}
        </div>
        <DropZoneBox
          accept=".jpg, .jpeg, .png"
          onSelect={handleOnSelect}
          showImagesPreviews={false}
          env={env}
          showDropArea={false}
          multiple={false}
          hasCropper={{
            showCropper: true,
            aspectRatioW: 1,
            aspectRatioH: 1,
            minWidth: 200,
            minHeight: 200,
          }}
          modalClassName="userSettingsAboutYou"
        >
          <Button
            extraClass="dark"
            type="file"
            text={translateMessage({ id: 'user.settings.choose.file' })}
            dataTestId="button-user-settings-about-you"
          />
        </DropZoneBox>
      </div>
    </div>
  );
};

UserSettingsAboutYou.propTypes = {
  translateMessage: PropTypes.func,
  color: PropTypes.object,
  thumb: PropTypes.string,
  errors: PropTypes.string,
  onDrop: PropTypes.func,
  env: PropTypes.object,
};

UserSettingsAboutYou.defaultProps = {
  color: '#ddd',
  thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
};

export default UserSettingsAboutYou;

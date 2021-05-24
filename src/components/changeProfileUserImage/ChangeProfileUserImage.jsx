import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../elements/button';
import DropZoneBox from '../../elements/dropZoneBox';

const ChangeProfileUserImage = ({ color, thumb, errors, onDrop, env }) => {
  const handleOnSelect = file => {
    const type = typeof file.name === 'string' ? 'file' : 'blob';
    const thumb = type === 'blob' ? URL.createObjectURL(file[0]) : file[0].preview;

    onDrop({
      image: file,
      thumb,
    });
  };

  return (
    <div className="change-profile-user-image">
      <h4
        style={{ color: color ? color.primaryColor : '' }}
        data-testid="title-change-profile-user-image"
      >
        <FormattedMessage id="user.settings.regional" defaultMessage="About you" />
      </h4>
      <div className="box">
        <div
          className={classnames('form-group overflow-auto', {
            'has-error': errors.image,
          })}
        >
          <div className="thumb-box d-flex justify-content-center">
            <div
              className="thumb"
              data-testid="thumb-change-profile-user-image"
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
          modalClassName="change-profile-user-image"
          titleCropModal={useIntl().formatMessage({ id: 'modal.crop.title' })}
          textSaveCropModal={useIntl().formatMessage({ id: 'modal.crop.button.save' })}
        >
          <Button
            extraClass="dark"
            type="file"
            text={useIntl().formatMessage({ id: 'user.settings.choose.file' })}
            dataTestId="button-change-profile-user-image"
          />
        </DropZoneBox>
      </div>
    </div>
  );
};

ChangeProfileUserImage.propTypes = {
  color: PropTypes.object,
  thumb: PropTypes.string,
  errors: PropTypes.object,
  onDrop: PropTypes.func,
  env: PropTypes.object,
};

ChangeProfileUserImage.defaultProps = {
  thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
};

export default ChangeProfileUserImage;

import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import classnames from 'classnames';
import InputLabel from '../../elements/inputLabel';
import Button from '../../elements/button';
import DropZoneBox from '../../elements/dropZoneBox';
import Icon from '../icon';
import { Props } from './ChangeProfileUserImage.types';

const ChangeProfileUserImage: FC<Props> = ({ thumb, errors, onDrop, env }: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  const noImage = `${env.cdnStatic}/frontend/assets/no-image/upload.svg`;

  const handleOnSelect = file => {
    const type = typeof file.name === 'string' ? 'file' : 'blob';
    const thumb = type === 'blob' ? URL.createObjectURL(file[0]) : file[0].preview;

    onDrop({
      image: file,
      thumb,
    });
  };

  const onClick = () => {
    document.getElementById('change-profile-user-image__button-upload').click();
  };

  return (
    <div className="change-profile-user-image">
      <InputLabel
        cssClass="change-profile-user-image-title"
        label={intl.formatMessage({ id: 'toolkit.profile.picture' })}
      />
      <div
        className={classnames('form-group overflow-auto', {
          'has-error': errors.image,
        })}
      >
        <div className="thumb-box">
          <div
            onKeyPress={onClick}
            onClick={onClick}
            className="thumb"
            data-testid="thumb-change-profile-user-image"
            style={{ backgroundImage: `url(${thumb})` }}
          />
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
            titleCropModal={intl.formatMessage({ id: 'modal.crop.title' })}
            textSaveCropModal={intl.formatMessage({ id: 'modal.crop.button.save' })}
          >
            <Button
              id="change-profile-user-image__button-upload"
              extraClass="dark"
              className={classnames({ 'change-profile-user-image__no-button': thumb === noImage })}
              type="file"
              text=""
              dataTestId="button-change-profile-user-image"
              icon={<Icon iconClass="icon-edit-2" />}
            />
          </DropZoneBox>
        </div>
        {errors.image && <span className="help-block">{errors.image}</span>}
      </div>
    </div>
  );
};

export default ChangeProfileUserImage;

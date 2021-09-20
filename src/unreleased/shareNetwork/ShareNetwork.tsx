import React, { FC, useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import classnames from 'classnames';
import Props from './ShareNetwork.types';
import Icon from '../../components/icon';

const ShareNetwork: FC<Props> = ({
  title,
  showFacebook = true,
  showTwitter = true,
  showWhatsapp = true,
  showCopyToClipboard = true,
  windowLocationHref = window.location.href,
  blackIcons = false,
}: Props): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(false);
  const intl = useIntl();
  const fbShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?display=popup&u=${windowLocationHref}&quote=${title}`;
    const options =
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,left=660,top=190,width=600,height=600';
    window.open(url, 'sharer', options);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(windowLocationHref);
    setShowTooltip(true);
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      if (showTooltip) {
        setShowTooltip(false);
      }
    }, 500);
    return () => clearInterval(timeout);
  }, [showTooltip]);

  return (
    <div className="share-network" data-testid="btn-share">
      {showFacebook && (
        <button
          onClick={fbShare}
          aria-label="facebook"
          title="Facebook"
          className={classnames('share-icon share-facebook', { black: blackIcons })}
          data-testid="share-facebook"
        >
          <Icon iconClass="icon-facebook" />
        </button>
      )}
      {showTwitter && (
        <a
          href={`https://twitter.com/intent/tweet?text=${title}&url=${windowLocationHref}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
          title="Twitter"
          className={classnames('share-icon share-twitter', { black: blackIcons })}
          data-testid="share-twitter"
        >
          <Icon iconClass="icon-twitter" />
        </a>
      )}
      {showWhatsapp && (
        <a
          href={`https://api.whatsapp.com/send?text=${title} ${windowLocationHref}`}
          data-action="share/whatsapp/share"
          aria-label="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          title="Whatsapp"
          className={classnames('share-icon share-whatsapp', { black: blackIcons })}
          data-testid="share-whatsapp"
        >
          <Icon iconClass="icon-whatsapp" />
        </a>
      )}
      {showCopyToClipboard && (
        <button
          aria-label="copyToClipboard"
          title={intl.formatMessage({
            id: 'copy.link',
          })}
          className={classnames('share-icon share-link', { black: blackIcons })}
          data-testid="share-link"
          onClick={copyToClipboard}
        >
          <Icon iconClass="icon-link" />
          <span className={`tooltiptext ${showTooltip ? 'show-opacity' : 'hide-opacity'}`}>
            <FormattedMessage id="copied.link" />
          </span>
        </button>
      )}
    </div>
  );
};

export default ShareNetwork;

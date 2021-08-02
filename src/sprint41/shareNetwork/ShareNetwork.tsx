import React, { FC, useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Props from './ShareNetwork.types';
import Icon from '../../components/icon';

const ShareNetwork: FC<Props> = ({
  title,
  windowLocationHref = window.location.href,
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
      <a
        onClick={fbShare}
        aria-label="facebook"
        title="Facebook"
        className="share-icon share-facebook"
      >
        <Icon iconClass="icon-facebook" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${title}&url=${windowLocationHref}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="twitter"
        title="Twitter"
        className="share-icon share-twitter"
      >
        <Icon iconClass="icon-twitter" />
      </a>

      <a
        href={`https://api.whatsapp.com/send?text=${title} ${windowLocationHref}`}
        data-action="share/whatsapp/share"
        aria-label="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Whatsapp"
        className="share-icon share-whatsapp"
      >
        <Icon iconClass="icon-whatsapp" />
      </a>
      <a
        aria-label="copyToClipboard"
        title={intl.formatMessage({
          id: 'copy.link',
        })}
        className="share-icon share-link"
        onClick={copyToClipboard}
      >
        <Icon iconClass="icon-link" />
        <span className={`tooltiptext ${showTooltip ? 'show-opacity' : 'hide-opacity'}`}>
          <FormattedMessage id="copied.link" />
        </span>
      </a>
    </div>
  );
};

export default ShareNetwork;

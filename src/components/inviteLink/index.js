import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Button from '../../elements/button';

const InviteLink = ({
  inviteLinkText,
  inviteLink,
  copyLinkFunc,
  copied,
  CopyLinkText,
  CopiedLinkText,
}) => (
  <Row>
    <div className="col-sm-12">
      <div className="box">
        <p>{inviteLinkText}</p>
        <Row>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              value={inviteLink}
              onFocus={e => e.target.select()}
              readOnly={true}
            />
          </div>
          <div className="col-sm-3">
            <CopyToClipboard text={inviteLink} onCopy={copyLinkFunc}>
              <Button extraClass="dark" href="#" text={!copied ? CopyLinkText : CopiedLinkText} />
            </CopyToClipboard>
          </div>
        </Row>
      </div>
    </div>
  </Row>
);

InviteLink.propTypes = {
  inviteLinkText: PropTypes.string,
  inviteLink: PropTypes.string.isRequired,
  copyLinkFunc: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired,
  CopyLinkText: PropTypes.string,
  CopiedLinkText: PropTypes.string,
};

export default InviteLink;

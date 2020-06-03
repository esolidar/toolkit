/* eslint-disable camelcase */
import React from 'react';
import {
  Row, Col, Card,
} from 'react-bootstrap';
import { injectIntl } from 'react-intl';
import Moment from 'react-moment';
import moment from 'moment';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const TicketsComments = ({
  ticketComments,
  activePage,
  total,
  handlePageChange,
  intl,
}) => {
  const renderFiles = (files) => files.map((document, index) => (
    <div className="document-row" key={index}>
      <a href={document.file} className="download-file" rel="noopener noreferrer" target="_blank" title={document.title}>
        {decodeURI(document.name)}
      </a>
    </div>
  ));

  const createHtmlMarkup = (text) => ({ __html: text });

  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const renderComments = () => ticketComments.map((ticketComment, index) => (
    <Card className="ticketCard mb-2" key={index}>
      <Card.Body>
        <Row>
          <Col sm={3} className="header">
            <img alt="Thumb" className="thumb" src={ticketComment.project_comment.user ? ticketComment.project_comment.user.thumbs.thumb : 'https://static.testesolidar.com/frontend/assets/no-image.png'} />
            <div className="user-post">{ticketComment.project_comment.user ? ticketComment.project_comment.user.name : '--'}</div>
            <div className="ticket-date">
              <Moment utc tz={moment.tz.guess()} format="YYYY-MM-DD HH:mm:ss">
                {ticketComment.project_comment.created_at}
              </Moment>
            </div>
          </Col>
          <Col sm={9} className="border-left">
            <p className="text-right mb-0 comment-date"><Moment utc fromNow ago>{ticketComment.project_comment.created_at}</Moment></p>
            {ticketComment.project_comment.text.split('\n').map((item, index) => (
              <span key={index}>
                <p dangerouslySetInnerHTML={createHtmlMarkup(item.replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`))} />
                <br />
              </span>
            ))}
            {ticketComment.project_comment.attachment_files.length > 0 && (
              <div className="text-right w-100 mt-3 files-box">
                {renderFiles(ticketComment.project_comment.attachment_files)}
              </div>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  ));

  return (
    <Col sm={12}>
      {renderComments()}
      <Col sm={{ span: 6, offset: 3 }}>
        {(ticketComments.length < total) && (
          <div className="text-center">
            <Button extraClass="dark" onClick={() => handlePageChange(activePage)} text={intl.formatMessage({ id: 'readmore', defaultMessage: 'Read more' })} />
          </div>
        )}
      </Col>
    </Col>
  );
};

TicketsComments.propTypes = {
  ticketComments: PropTypes.array,
  activePage: PropTypes.number,
  total: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
  intl: PropTypes.object,
};

export default injectIntl(TicketsComments);

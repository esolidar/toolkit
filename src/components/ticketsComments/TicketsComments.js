/* eslint-disable camelcase */
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { injectIntl } from 'react-intl';
import Moment from 'react-moment';
import moment from 'moment';
import PropTypes from 'prop-types';
import Button from '../../elements/button/Button';

const TicketsComments = ({
  ticketComments,
  activePage,
  total,
  handlePageChange,
  intl,
  supportTag,
}) => {
  const renderFiles = files =>
    files.map((document, index) => (
      <div className="document-row" key={index}>
        <a
          href={document.file}
          className="download-file"
          rel="noopener noreferrer"
          target="_blank"
          title={document.title}
        >
          {decodeURI(document.name)}
        </a>
      </div>
    ));

  const createHtmlMarkup = text => ({ __html: text });

  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const renderComments = () =>
    ticketComments.map((ticketComment, index) => {
      const comment = ticketComment.project_comment ? ticketComment.project_comment : ticketComment;
      const user = ticketComment.project_comment
        ? ticketComment.project_comment.user
        : ticketComment.user;
      let thumb = '';
      if (user) {
        thumb = user.institution ? user.institution.thumbs.thumb : user.thumbs.thumb;
      }

      return (
        <Card className="ticketCard mb-2" key={index}>
          <Card.Body>
            <Row>
              <Col sm={3} className="header">
                <div className="user-post">
                  <img
                    alt="Thumb"
                    className="thumb"
                    src={thumb || 'https://static.testesolidar.com/frontend/assets/no-image.png'}
                  />
                  {user ? (
                    <span>
                      {user.institution ? user.institution.sigla : user.name}
                      {supportTag && !user.institution && (
                        <span className="support">
                          {intl.formatMessage({
                            id: 'tickets.supportTag',
                            defaultMessage: 'Support eSolidar',
                          })}
                        </span>
                      )}
                    </span>
                  ) : (
                    <span>--</span>
                  )}
                </div>
                <div className="ticket-date">
                  <Moment utc tz={moment.tz.guess()} format="YYYY-MM-DD HH:mm:ss">
                    {comment.created_at}
                  </Moment>
                </div>
              </Col>
              <Col sm={9} className="border-left">
                <p className="text-right mb-0 comment-date">
                  <Moment utc fromNow ago>
                    {comment.created_at}
                  </Moment>
                </p>
                {comment.text.split('\n').map((item, index) => (
                  <span key={index}>
                    <p
                      dangerouslySetInnerHTML={createHtmlMarkup(
                        item.replace(urlRegex, url => `<a href="${url}" target="_blank">${url}</a>`)
                      )}
                    />
                  </span>
                ))}
                {comment.attachment_files.length > 0 && (
                  <div className="text-right w-100 mt-3 files-box">
                    {renderFiles(comment.attachment_files)}
                  </div>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    });

  return (
    <Col sm={12}>
      {renderComments()}
      <Col sm={{ span: 6, offset: 3 }}>
        {ticketComments.length < total && (
          <div className="text-center">
            <Button
              extraClass="dark"
              onClick={() => handlePageChange(activePage)}
              text={intl.formatMessage({ id: 'readmore', defaultMessage: 'Read more' })}
            />
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
  supportTag: PropTypes.bool,
};

export default injectIntl(TicketsComments);

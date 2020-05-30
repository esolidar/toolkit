/* eslint-disable camelcase */
import React from 'react';
import {
  Row, Col, Card,
} from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const TicketsComments = ({
  ticketComments,
  activePage,
  per_page,
  total,
  handlePageChange,
}) => {
  const renderFiles = (files) => files.map((document, index) => (
    <div className="document-row" key={index}>
      <a href={document.file} className="download-file" rel="noopener noreferrer" target="_blank" title={document.title}>
        {decodeURI(document.name)}
      </a>
    </div>
  ));

  const renderComments = () => ticketComments.map((ticketComment, index) => (
    <Card className="ticketCard mb-2" key={index}>
      <Card.Body>
        <Row>
          <Col sm={3} className="header">
            <img alt="Thumb" className="thumb" src={ticketComment.project_comment.user ? ticketComment.project_comment.user.thumbs.thumb : 'https://static.testesolidar.com/frontend/assets/no-image.png'} />
            <div className="user-post">{ticketComment.project_comment.user ? ticketComment.project_comment.user.name : '--'}</div>
          </Col>
          <Col sm={9} className="border-left">
            <p className="text-right mb-0"><Moment utc fromNow ago>{ticketComment.project_comment.created_at}</Moment></p>
            <p>{ticketComment.project_comment.text}</p>
            {ticketComment.project_comment.attachment_files.length > 0 && (
              <div className="text-right w-100 mt-3">
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
        <div className="text-center">
          <Pagination
            prevPageText={<div className="prev-page" />}
            nextPageText={<div className="next-page" />}
            activePage={activePage}
            itemsCountPerPage={Number(per_page)}
            totalItemsCount={Number(total)}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </Col>
    </Col>
  );
};

TicketsComments.propTypes = {
  ticketComments: PropTypes.array,
  activePage: PropTypes.number,
  per_page: PropTypes.number,
  total: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
};

export default TicketsComments;

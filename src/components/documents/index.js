/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { Row, Col, Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading';
import Icon from '../icon';
import TextField from '../../elements/textField';
import Button from '../../elements/button';

const Documents = ({
  isLoadingSearch,
  documents,
  downloadText,
  noResultsText,
  activePage,
  per_page,
  total,
  handlePageChange,
  headerTitleText,
  headerSubtitleText,
  onSearch,
  errors,
  searchPlaceholder,
  searchValue,
  deleteDocument,
  openModalDelete,
  showDeleteModal,
  closeModal,
  colSm,
}) => {
  const formatBytes = bytes => {
    const kb = 1024;
    const ndx = Math.floor(Math.log(bytes) / Math.log(kb));
    const fileSizeTypes = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'pb', 'eb', 'zb', 'yb'];

    return `${(bytes / kb / kb).toFixed(2)} ${fileSizeTypes[ndx]}`;
  };

  const renderDocuments = () => {
    if (isLoadingSearch) {
      return <Loading />;
    }

    if (documents.length > 0) {
      return documents.map(document => {
        const fileUserOwner = document.user_id ? document.user_id : 0;
        const userId = localStorage.user ? JSON.parse(localStorage.user).id : '';
        let icon;
        switch (document.file_type) {
          case 'application/pdf':
            icon = 'icon-pdf';
            break;

          case 'application/msword':
            icon = 'icon-ic-doc';
            break;

          case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            icon = 'icon-ic-ppt';
            break;

          default:
            icon = 'icon-ic-txt';
        }

        return (
          <div className="document-row" key={document.id}>
            {document.title ? <h3>{document.title}</h3> : <h3>{decodeURI(document.name)}</h3>}
            {document.summary && <p>{document.summary}</p>}
            <Icon iconClass={icon} />
            &nbsp;
            <a
              href={document.file}
              className="download-file"
              rel="noopener noreferrer"
              target="_blank"
              title={document.title}
            >
              {downloadText}
              &nbsp;
              {formatBytes(document.file_size)}
            </a>
            {openModalDelete && fileUserOwner === userId && (
              <button
                type="button"
                className="deleteButton"
                onClick={() => openModalDelete(document.id)}
              >
                <Icon iconClass="icon-icon-delete" />
              </button>
            )}
          </div>
        );
      });
    }
    return <div className="noResult-div">{noResultsText}</div>;
  };

  return (
    <Col sm={colSm || 9} className="documents">
      {headerTitleText && (
        <div className="box">
          <h3>{headerTitleText}</h3>
          <p>{headerSubtitleText}</p>
        </div>
      )}
      <TextField
        label=""
        type="text"
        onChange={onSearch}
        error={errors.search ? errors.search : ''}
        placeholder={searchPlaceholder}
        defaultValue={searchValue}
        field="search"
      />
      {renderDocuments()}
      <Row>
        <Col sm={12}>
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
      </Row>
      {openModalDelete && (
        <Modal show={showDeleteModal} onHide={closeModal} className="md-delete-employee">
          <Modal.Header closeButton>
            <Modal.Title>
              <FormattedMessage
                id="documents.list.delete.modal.title"
                defaultMessage="Delete document"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p>
                  <FormattedMessage
                    id="documents.department.delete.text"
                    defaultMessage="Are you sure do you want to delete this document?"
                  />
                </p>
              </div>
              <div className="col-sm-12 text-center mt-3">
                <Button
                  extraClass="success-full"
                  onClick={deleteDocument}
                  text={<FormattedMessage id="yes" defaultMessage="Yes" />}
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </Col>
  );
};

Documents.propTypes = {
  isLoadingSearch: PropTypes.bool.isRequired,
  documents: PropTypes.array.isRequired,
  downloadText: PropTypes.string.isRequired,
  noResultsText: PropTypes.string.isRequired,
  headerTitleText: PropTypes.string,
  headerSubtitleText: PropTypes.string,
  handlePageChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  errors: PropTypes.object,
  searchPlaceholder: PropTypes.string,
  searchValue: PropTypes.string,
  activePage: PropTypes.number,
  per_page: PropTypes.number,
  total: PropTypes.number,
  deleteDocument: PropTypes.func,
  openModalDelete: PropTypes.func,
  showDeleteModal: PropTypes.bool,
  closeModal: PropTypes.func,
  colSm: PropTypes.number,
};

export default Documents;

/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Modal } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'react-intl';
import Pagination from '../../elements/pagination';
import Loading from '../loading';
import FileCard from '../fileCard';
import TextField from '../../elements/textField';
import Button from '../../elements/button';

const Documents = ({
  isLoadingSearch,
  documents,
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
}) => {
  const intl = useIntl();

  const renderDocuments = () => {
    if (isLoadingSearch) {
      return <Loading />;
    }

    if (documents.length > 0) {
      return documents.map(document => {
        const fileOwner = document.user_id || 0;
        const userId = localStorage.user ? JSON.parse(localStorage.user).id : '';

        return (
          <div className="document-row" key={document.id}>
            <FileCard
              title={document.title || decodeURI(document.name)}
              subtitle={document.summary}
              showBadgePrivate={!document.public}
              size={document.file_size}
              dateUploaded={document.created_at}
              file={document.file}
              dropdownItems={[
                {
                  id: 0,
                  leftIcon: 'Trash',
                  onClick: () => openModalDelete(document.id),
                  show: fileOwner === userId,
                  text: intl.formatMessage({ id: 'delete' }),
                },
              ]}
              showDownloadButton
            />
          </div>
        );
      });
    }
    return <div className="noResult-div">{noResultsText}</div>;
  };

  return (
    <Col sm={12} className="documents">
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
        size="xl"
      />
      {renderDocuments()}
      <Row>
        <Col sm={12}>
          <Col sm={{ span: 6, offset: 3 }}>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={Number(per_page)}
              totalItemsCount={Number(total)}
              onChange={handlePageChange}
            />
          </Col>
        </Col>
      </Row>
      {openModalDelete && (
        <Modal show={showDeleteModal} onHide={closeModal} className="md-delete-employee">
          <Modal.Header closeButton>
            <Modal.Title>
              <FormattedMessage id="documents.list.delete.modal.title" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p>
                  <FormattedMessage id="documents.department.delete.text" />
                </p>
              </div>
              <div className="col-sm-12 text-center mt-3">
                <Button
                  extraClass="success-full"
                  onClick={deleteDocument}
                  text={<FormattedMessage id="yes" />}
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
};

export default Documents;

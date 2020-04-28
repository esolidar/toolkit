/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import Loading from '../loading/Loading';
import Icon from '../icon/Icon';
import TextField from '../../elements/textField/TextField';

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
}) => {
  const formatBytes = (bytes) => {
    const kb = 1024;
    const ndx = Math.floor(Math.log(bytes) / Math.log(kb));
    const fileSizeTypes = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'pb', 'eb', 'zb', 'yb'];

    return `${(bytes / kb / kb).toFixed(2)} ${fileSizeTypes[ndx]}`;
  };

  const renderDocuments = () => {
    if (isLoadingSearch) {
      return (
        <Loading />
      );
    }

    if (documents.length > 0) {
      return documents.map((document) => {
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
            <h3>{document.title}</h3>
            <p>{document.summary}</p>
            <Icon iconClass={icon} />
            &nbsp;
            <a href={document.file} className="download-file" rel="noopener noreferrer" target="_blank" title={document.title}>
              {downloadText}
              &nbsp;
              {formatBytes(document.file_size)}
            </a>
          </div>
        );
      });
    }
    return (
      <div>
        {noResultsText}
      </div>
    );
  };

  return (
    <div className="documents col-md-9">
      <div className="box">
        <h3>
          {headerTitleText}
        </h3>
        <p>
          {headerSubtitleText}
        </p>
      </div>
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
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-3" />
          <div className="col-sm-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

Documents.propTypes = {
  isLoadingSearch: PropTypes.bool.isRequired,
  documents: PropTypes.array.isRequired,
  downloadText: PropTypes.string.isRequired,
  noResultsText: PropTypes.string.isRequired,
  headerTitleText: PropTypes.string.isRequired,
  headerSubtitleText: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  errors: PropTypes.object,
  searchPlaceholder: PropTypes.string,
  searchValue: PropTypes.string,
  activePage: PropTypes.number,
  per_page: PropTypes.number,
  total: PropTypes.number,
};

export default Documents;

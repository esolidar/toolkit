/* eslint-disable camelcase */

import React, { useState, useRef } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import FileCard from '../../../../components/fileCard';
import EmptyState from '../../../../components/emptyState';
import UploadDocumentModal from '../../../../components/uploadDocumentModal';
import Container from '../../../../elements/container';
import Button from '../../../../elements/button';
import { Form } from '../../../../components/uploadDocumentModal/UploadDocumentModal.types';
import DeleteModal from '../../../../components/modals/deleteModal';
import formatDate from '../../../../utils/formatDate';

interface File {
  id: number;
  name: string;
  file_size: string;
  updated_at: string;
  file: string;
  is_form_file: boolean;
  public: boolean;
  description: string;
}

interface Props {
  canDeleteFiles: boolean;
  canUploadFiles: boolean;
  files: File[];
  isAdmin: boolean;
  onDeleteFile(fileId: number): void;
  onUploadFile(file: Form): void;
}

const DocumentsTab = ({
  canDeleteFiles,
  canUploadFiles,
  files,
  isAdmin,
  onDeleteFile,
  onUploadFile,
}: Props) => {
  const intl: IntlShape = useIntl();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const fileToDelete = useRef<number>(null);

  return (
    <div className="project-detail-component__content-documents">
      {files?.length > 0 ? (
        <>
          {canUploadFiles && (
            <Button
              extraClass="primary-full"
              onClick={() => setIsOpenUploadModal(true)}
              text={intl.formatMessage({ id: 'toolkit.upload-document' })}
            />
          )}
          {files.map(file => (
            <FileCard
              key={file.id}
              size={file.file_size}
              title={file.name}
              subtitle={file.description}
              dateUploaded={formatDate(file.updated_at, intl.locale)}
              showDownloadButton
              file={file.file}
              showBadgePrivate={!file.public}
              dropdownItems={[
                {
                  text: intl.formatMessage({ id: 'delete' }),
                  leftIcon: 'Trash',
                  onClick: () => {
                    fileToDelete.current = file.id;
                    setIsOpenDeleteModal(true);
                  },
                  disabled: !isAdmin && file.is_form_file,
                  show: canDeleteFiles,
                  tooltip: {
                    overlay: intl.formatMessage({
                      id: 'toolkit.uploads.delete.application-documents',
                    }),
                    placement: 'top',
                    displayNone: !file.is_form_file || isAdmin,
                  },
                },
              ]}
            />
          ))}
        </>
      ) : (
        <Container>
          <EmptyState
            body={intl.formatMessage({
              id: canUploadFiles
                ? 'toolkit.uploads.owner.empty.text'
                : 'toolkit.uploads.empty.text',
            })}
            buttons={
              canUploadFiles && (
                <Button
                  extraClass="secondary"
                  onClick={() => setIsOpenUploadModal(true)}
                  text={intl.formatMessage({ id: 'toolkit.upload-document' })}
                />
              )
            }
            title={intl.formatMessage({
              id: canUploadFiles
                ? 'toolkit.uploads.owner.empty.title'
                : 'toolkit.uploads.empty.title',
            })}
          />
        </Container>
      )}
      <UploadDocumentModal
        openModal={isOpenUploadModal}
        onCloseModal={() => setIsOpenUploadModal(false)}
        onClickSave={file => {
          onUploadFile(file);
          setIsOpenUploadModal(false);
        }}
      />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onClickDelete={() => {
          onDeleteFile(fileToDelete.current);
          fileToDelete.current = null;
          setIsOpenDeleteModal(false);
        }}
        onClickCancel={() => {
          setIsOpenDeleteModal(false);
          fileToDelete.current = null;
        }}
        title={intl.formatMessage({ id: 'toolkit.uploads.delete.title' })}
        bodyText={intl.formatMessage({
          id: isAdmin
            ? 'toolkit.uploads.delete.description.admin'
            : 'toolkit.uploads.delete.description',
        })}
      />
    </div>
  );
};

export default DocumentsTab;

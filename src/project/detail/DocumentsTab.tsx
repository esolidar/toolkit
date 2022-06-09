/* eslint-disable camelcase */

import React from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import FileCard from '../../components/fileCard';
import Container from '../../elements/container';
import Button from '../../elements/button';

interface File {
  id: number;
  name: string;
  file_size: string;
  updated_at: string;
  file: string;
}

interface Props {
  files: File[];
  isOwner: boolean;
}

const DocumentsTab = ({ files, isOwner }: Props) => {
  const intl: IntlShape = useIntl();
  return (
    <div className="project-detail-component__documents">
      {files.length > 0 && (
        <>
          {files.map(file => (
            <FileCard
              key={file.id}
              size={file.file_size}
              title={file.name}
              dateUploaded={file.updated_at}
              showDownloadButton
              file={file.file}
            />
          ))}
        </>
      )}
      {files.length === 0 && (
        <Container>
          <div className="project-detail-component__documents-empty">
            <h3>
              {isOwner ? (
                <FormattedMessage id="You haven’t uploaded documents yet" />
              ) : (
                <FormattedMessage id="No documents uploaded yet" />
              )}
            </h3>
            <p>
              {isOwner ? (
                <FormattedMessage id="Complement your project details" />
              ) : (
                <FormattedMessage id="Documents uploaded by the project owner will be displayed here" />
              )}
            </p>
            {isOwner && (
              <Button
                extraClass="secondary"
                onClick={() => {}}
                text={intl.formatMessage({ id: 'Upload document' })}
                size="xl"
              />
            )}
          </div>
        </Container>
      )}
    </div>
  );
};

export default DocumentsTab;

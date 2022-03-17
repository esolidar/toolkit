import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Viewport from '../../../../components/viewport';
import Props from './Files.types';
import DropZoneBox from '../../../../elements/dropZoneBox';
import FileCard from '../../../../components/fileCard';
import getEnvVar from '../../../../utils/getEnvVar';
import convertFileSize from '../../../../utils/convertFileSize';
import DeleteFileModal from './DeleteFileModal';

const maxFiles = 5;
const maxSize = 5;

const Files = ({
  question,
  description,
  reply,
  onDropError,
  handleDeleteFile,
  handleSelectFile,
}: Props) => {
  const intl = useIntl();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [fileToDelete, setFileToDelete] = useState<number>(null);

  const serverlessResizeImage = getEnvVar('SERVER_LESS_RESIZE_IMAGE');

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];
    element.scrollTop = element.scrollHeight;
  }, [reply]);

  const deleteFile = (id: number, projectId: number) => {
    if (projectId) {
      setIsOpenDeleteModal(true);
      setFileToDelete(id);
    } else {
      handleDeleteFile(id);
    }
  };

  return (
    <>
      <Viewport size="xl">
        <div className="wizard-project-files">
          <Viewport size="lg" centred={false}>
            <>
              <h2>{question}</h2>
              <p>{description}</p>
            </>
          </Viewport>
          <span className="wizard-project-images__helper">
            <FormattedMessage id="toolkit.project.files.helper" values={{ maxSize, maxFiles }} />
          </span>
          <DropZoneBox
            fullWidth
            sortable
            disabled={reply.length >= maxFiles}
            maxFiles={maxFiles - reply.length}
            accept=".doc, .docx, .pdf, .xls, .xlsx, .ppt, .pptx"
            onSelect={handleSelectFile}
            multiple={true}
            showImagesPreviews={false}
            env={serverlessResizeImage}
            onDropError={onDropError}
          />
          <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
            {reply.map(file => (
              <FileCard
                showDownloadButton={false}
                title={file.name}
                badge={!file.public ? intl.formatMessage({ id: 'toolkit.private' }) : null}
                helper={convertFileSize(file.file_size)}
                dropdownItems={[
                  {
                    id: 0,
                    leftIcon: 'Trash',
                    onClick: () => {
                      deleteFile(file.id, file.project_id);
                    },
                    show: true,
                    text: intl.formatMessage({ id: 'delete' }),
                  },
                ]}
              />
            ))}
          </div>
        </div>
      </Viewport>
      <DeleteFileModal
        isOpen={isOpenDeleteModal}
        onClickDelete={() => {
          handleDeleteFile(fileToDelete);
          setFileToDelete(null);
          setIsOpenDeleteModal(false);
        }}
        onClose={() => {
          setIsOpenDeleteModal(false);
          setFileToDelete(null);
        }}
      />
    </>
  );
};

export default Files;

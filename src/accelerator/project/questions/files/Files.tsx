import React, { useEffect, useState, useRef } from 'react';
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
const serverlessResizeImage = getEnvVar('SERVER_LESS_RESIZE_IMAGE');
const acceptedFiles = '.doc, .docx, .pdf, .xls, .xlsx, .ppt, .pptx';

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
  const fileToDelete = useRef<number>(null);
  const [filesList, setFilesList] = useState<any>([]);

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];
    if (element) element.scrollTop = element.scrollHeight;
    setFilesList(reply);
  }, [reply]);

  const deleteFile = (id: number, projectId: number) => {
    if (projectId) {
      setIsOpenDeleteModal(true);
      fileToDelete.current = id;
    } else {
      handleDeleteFile(id);
    }
  };

  const onError = errorList => {
    const files = [...filesList];
    errorList.forEach(error => {
      const { file } = error;
      file.fail = true;
      files.push(file);
    });

    setFilesList(files);
    const element = document.getElementsByClassName('active-page')[0];
    if (element) element.scrollTop = element.scrollHeight;
    onDropError(errorList);
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
            accept={acceptedFiles}
            onSelect={handleSelectFile}
            multiple={true}
            showImagesPreviews={false}
            env={serverlessResizeImage}
            onDropError={onError}
          />
          <div className="wizard-project-files__list">
            {filesList.map((file, i) => {
              const errorBadge = file.fail ? 'error' : null;
              const privateBadge = !file.public
                ? intl.formatMessage({ id: 'toolkit.private' })
                : null;

              return (
                <FileCard
                  key={i}
                  showDownloadButton={false}
                  title={file.name}
                  badge={errorBadge || privateBadge}
                  helper={convertFileSize(file.file_size || file.size)}
                  dropdownItems={
                    errorBadge
                      ? null
                      : [
                          {
                            id: 0,
                            leftIcon: 'Trash',
                            onClick: () => {
                              deleteFile(file.id, file.project_id);
                            },
                            show: true,
                            text: intl.formatMessage({ id: 'delete' }),
                          },
                        ]
                  }
                />
              );
            })}
          </div>
        </div>
      </Viewport>
      <DeleteFileModal
        isOpen={isOpenDeleteModal}
        onClickDelete={() => {
          handleDeleteFile(fileToDelete.current);
          fileToDelete.current = null;
          setIsOpenDeleteModal(false);
        }}
        onClose={() => {
          setIsOpenDeleteModal(false);
          fileToDelete.current = null;
        }}
      />
    </>
  );
};

export default Files;

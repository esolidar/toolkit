import React, { useEffect, useState, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import Viewport from '../../../../components/viewport';
import DeleteModal from '../../../../components/modals/deleteModal';
import DropZoneBox from '../../../../elements/dropZoneBox';
import FileCard from '../../../../components/fileCard';
import getEnvVar from '../../../../utils/getEnvVar';
import Props from './Files.types';

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
  required,
}: Props) => {
  const intl = useIntl();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const fileToDelete = useRef<number>(null);
  const selectedFilesCount = useRef<number>(0);
  const hasErrorFiles = useRef<boolean>(false);
  const errorFiles = useRef<any>([]);
  const [filesList, setFilesList] = useState<any>([]);
  const repliesCount = useRef<number>(0);

  useEffect(() => {
    const element = document.getElementsByClassName('active-page')[0];
    const oldRepliesCount: number = repliesCount.current;
    selectedFilesCount.current = 0;
    repliesCount.current = reply.length;

    setFilesList([...reply, ...errorFiles.current]);

    if (oldRepliesCount <= repliesCount.current && element)
      element.scrollTop = element.scrollHeight;
  }, [reply, hasErrorFiles.current]);

  const deleteFile = (id: number, projectId: number) => {
    if (projectId) {
      setIsOpenDeleteModal(true);
      fileToDelete.current = id;
    } else {
      handleDeleteFile(id);
    }
  };

  const onError = (errorList, count) => {
    selectedFilesCount.current = count;
    const files = [];
    errorList.forEach(error => {
      const { file } = error;
      if (file) {
        file.fail = true;
        files.push(file);
      }
    });
    errorFiles.current = files;
    setFilesList([...filesList, ...files]);
    const element = document.getElementsByClassName('active-page')[0];
    if (element) element.scrollTop = element.scrollHeight;

    onDropError(errorList);
  };

  const onSubmitFiles = files => {
    handleSelectFile(files);

    const selectedFiles = selectedFilesCount.current;
    if (selectedFiles > files.length) {
      hasErrorFiles.current = true;
      selectedFilesCount.current = 0;
    } else {
      hasErrorFiles.current = false;
      errorFiles.current = [];
    }
  };

  const handleReveal = inView => {
    if (inView) {
      const element = document.getElementsByClassName('active-page')[0];
      const card = document.getElementsByClassName('checkbox-card');

      if (card.length < reply.length && element) element.scrollTop = element.scrollHeight;
    }
  };

  return (
    <>
      <Viewport size="xl">
        <div className="wizard-project-files">
          <Viewport size="lg" centred={false}>
            <>
              <h2>
                {question}
                {!required && (
                  <span className="h2-optional">({intl.formatMessage({ id: 'optional' })})</span>
                )}
              </h2>
              <p>{description}</p>
            </>
          </Viewport>
          <span className="wizard-project-images__helper">
            <FormattedMessage id="toolkit.project.files.helper" values={{ maxSize, maxFiles }} />
          </span>
          <DropZoneBox
            fullWidth
            disabled={reply.length >= maxFiles}
            maxFiles={maxFiles - reply.length}
            accept={acceptedFiles}
            onSelect={onSubmitFiles}
            multiple={true}
            showImagesPreviews={false}
            env={serverlessResizeImage}
            onDropError={onError}
          />

          <div className="wizard-project-files__list">
            <Fade
              onVisibilityChange={handleReveal}
              cascade
              triggerOnce={true}
              duration={700}
              damping={0.1}
              className="project-fade-item"
            >
              {filesList.map((file, i) => (
                <FileCard
                  key={file.id || `error-${i}`}
                  showDownloadButton={false}
                  title={file.name}
                  showBadgePrivate={!file.public}
                  showBadgeFailed={file.fail}
                  file={file.file}
                  size={file.file_size || file.size}
                  dropdownItems={[
                    {
                      id: 0,
                      leftIcon: 'Trash',
                      onClick: () => {
                        deleteFile(file.id, file.project_id);
                      },
                      show: !file.fail,
                      text: intl.formatMessage({ id: 'delete' }),
                    },
                  ]}
                />
              ))}
            </Fade>
          </div>
        </div>
      </Viewport>
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onClickDelete={() => {
          handleDeleteFile(fileToDelete.current);
          fileToDelete.current = null;
          setIsOpenDeleteModal(false);
        }}
        onClickCancel={() => {
          setIsOpenDeleteModal(false);
          fileToDelete.current = null;
        }}
        title={intl.formatMessage({ id: 'toolkit.delete.file' })}
        bodyText={intl.formatMessage({ id: 'toolkit.delete.file.description' })}
      />
    </>
  );
};

export default Files;

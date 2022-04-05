/* eslint-disable camelcase */
import React from 'react';
import { useIntl } from 'react-intl';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import FileCard from '../../fileCard';

import convertFileSize from '../../../utils/convertFileSize';

interface File {
  name: string;
  file: string;
  file_size: number;
  size: number;
  id: number;
  project_id: number;
}

interface Props {
  file: File;
  id: any;
  errorBadge: string;
  privateBadge: string;
  deleteFile(id: number, projectId: number): void;
  index: number;
}

const SortableFiles = ({ file, id, deleteFile, errorBadge, privateBadge }: Props) => {
  const intl = useIntl();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style: any = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? '100' : 'auto',
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className="drag-and-drop-file">
        <div {...listeners} {...attributes} className="drag-and-drop-files__item">
          <FileCard
            showDownloadButton={true}
            title={file.name}
            badge={errorBadge || privateBadge}
            file={file.file}
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
        </div>
      </div>
    </div>
  );
};

export default SortableFiles;

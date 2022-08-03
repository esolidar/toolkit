import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import Tabs from '../../../../elements/tabs';
import CardProjectDetail from '../../../../components/cardProjectDetail';
import CarouselLightbox from '../../../../components/carouselLightbox';
import Viewport from '../../../../components/viewport';
import isDefined from '../../../../utils/isDefined';
import sortBy from '../../../../utils/sortBy';
import isEmpty from '../../../../utils/isEmpty';
import getRoute from '../../../../utils/getRoute';
import getUrlParam from '../../../../utils/getUrlParam';
import addUrlParam from '../../../../utils/addUrlParam';
import CustomQuestions from './CustomQuestions';
import Initiatives from './Initiatives';
import DocumentsTab from './DocumentsTab';
import Updates from './Updates';
import CommentsTab from './CommentsTab';
import Props from './Overview.types';
import getEnvVar from '../../../../utils/getEnvVar';
import { PROJECT } from '../../../../constants/status';

const Overview = ({
  program,
  project,
  isOwner,
  userId,
  handleFollow,
  handleUnfollow,
  handleCopyToClipboard,
  locale,
  host,
  company,
  isAdmin = false,
  handleChangeRating,
  handleChangeStatus,
  handleSaveComment,
  files,
  handleAddInitiative,
  onUploadFile,
  onDeleteFile,
  createCommentArgs,
  comments = [],
  commentsData,
  isLoggedIn = true,
  toggleLoginModal,
  handleDeleteComment,
  handleViewAllReplies,
}: Props) => {
  const {
    name: companyName,
    thumbs: { thumb: companyImage },
  } = company;

  const intl = useIntl();

  const [key, setKey] = useState<string>(getUrlParam('tab') || 'about');

  const handleChangeTab = key => {
    setKey(key);
    addUrlParam('tab', key);
  };

  const publicForm = isDefined(project.form) ? [...JSON.parse(project?.form)] : [];
  const privateForm = isDefined(project.private_form) ? [...JSON.parse(project?.private_form)] : [];
  const form = sortBy([...publicForm, ...privateForm], 'id');

  const getYoutubeVideoId = (url: string): string | boolean => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  const imageGallery = () => {
    const images = [];

    if (!isEmpty(JSON.parse(project.video || '{}'))) {
      const video = JSON.parse(project.video);
      const videoThumb = video.thumbnailUrl?.match(/\(([^)]+)\)/)[1];

      if (video.providerName === 'vimeo') {
        const videoId = video.videoUrl.split('/').splice(-1)[0];

        const vimeo = {
          altTag: videoId,
          thumbnail: videoThumb,
          type: 'video',
          url: `https://player.vimeo.com/video/${videoId}`,
        };

        images.push(vimeo);
      } else {
        const videoId = getYoutubeVideoId(video.videoUrl);

        const youtube = {
          altTag: videoId,
          thumbnail: `https://img.youtube.com/vi/${videoId}/default.jpg`,
          type: 'video',
          url: `https://www.youtube.com/embed/${videoId}`,
        };

        images.push(youtube);
      }
    }

    project.images.forEach(image => {
      images.push({
        altTag: image.id,
        thumbnail: `${getEnvVar('SERVER_LESS_RESIZE_IMAGE')}/${image.image}?width=90&heigth=60`,
        type: 'photo',
        url: `${getEnvVar('CDN_UPLOADS_URL')}/${image.image}`,
      });
    });

    return images;
  };

  const canUploadFiles =
    (project.status === PROJECT.pending || project.status === PROJECT.approved) &&
    (isAdmin || isOwner);
  const documentList = files?.data
    ?.filter(file => {
      if (file.public || isAdmin || (!project.as_company && isOwner)) return file;
    })
    .map(file => {
      return {
        ...file,
        canBeDeleted:
          (project.status === PROJECT.pending || project.status === PROJECT.approved) &&
          (isAdmin || (!isAdmin && !project.as_company && isOwner && file.user_id === userId)),
      };
    });

  return (
    <Viewport>
      <div className="project-detail-component">
        <div className="project-detail-component__columns">
          <div className="project-detail-component__columns--left">
            <CarouselLightbox listItems={imageGallery()} />
            <div className="project-detail-component__content">
              <Tabs
                defaultActiveKey={key}
                onChange={k => handleChangeTab(k)}
                tabsList={[
                  {
                    content: (
                      <div className="project-detail-component__content-description">
                        {project.description?.split('\n').map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                        {form.length > 0 && <hr />}
                        {form.map(question => (
                          <div
                            key={question.id}
                            className="project-detail-component__content-custom"
                          >
                            <CustomQuestions question={question} companyName={company.name} />
                          </div>
                        ))}
                      </div>
                    ),
                    key: 'about',
                    title: intl.formatMessage({ id: 'toolkit.about' }),
                  },
                  {
                    content: (
                      <DocumentsTab
                        canUploadFiles={canUploadFiles}
                        files={documentList}
                        isAdmin={isAdmin}
                        onDeleteFile={onDeleteFile}
                        onUploadFile={onUploadFile}
                      />
                    ),
                    key: 'documents',
                    title: intl.formatMessage({ id: 'toolkit.documents' }),
                    counter: documentList?.length || '',
                  },
                  {
                    content: <Updates />,
                    key: 'updates',
                    title: intl.formatMessage({ id: 'toolkit.updates' }),
                  },
                  {
                    content: (
                      <CommentsTab
                        createCommentArgs={createCommentArgs}
                        comments={comments}
                        commentsData={commentsData}
                        companyName={companyName}
                        isAdmin={isAdmin}
                        isLoggedIn={isLoggedIn}
                        toggleLoginModal={toggleLoginModal}
                        handleDeleteComment={handleDeleteComment}
                        handleViewAllReplies={handleViewAllReplies}
                      />
                    ),
                    key: 'comments',
                    title: intl.formatMessage({ id: 'toolkit.comments' }),
                  },
                ]}
              />
            </div>
          </div>
          <CardProjectDetail
            odsList={project.ods}
            onChangeRating={handleChangeRating}
            onChangeStatus={handleChangeStatus}
            onSaveComment={handleSaveComment}
            organizedBy={{
              thumb: companyImage,
              name: companyName,
              buttonUrl: `${host}${getRoute.public.accelerator.program.DETAIL(locale, program.id)}`,
              href: `${host}${getRoute.public.accelerator.program.DETAIL(locale, program.id)}`,
            }}
            rating={project.last_review}
            status={project.status}
            isAdmin={isAdmin}
            followProps={{
              followers: {
                followersCount:
                  isOwner || isAdmin ? project.followers_count + 1 : project.followers_count,
                following: isOwner || isAdmin || project.following,
              },
              href: `https://${host}${getRoute.public.accelerator.project.DETAIL(
                locale,
                program.id,
                project.id,
                project.title
              )}`,
              onClickFollow: handleFollow,
              onClickUnFollow: handleUnfollow,
              onClickCopyToClipboard: handleCopyToClipboard,
              title: project.title,
              disabled: isOwner,
            }}
          />
        </div>

        {(project.status === PROJECT.approved || project.status === PROJECT.completed) &&
          key === 'about' && (
            <div className="project-detail-component__initiatives">
              <Initiatives
                auctions={project.auctions}
                crowdfundings={project.crowdfundings}
                isOwner={isOwner}
                programId={program.id}
                projectId={project.id}
                locale={locale}
                handleAddInitiative={handleAddInitiative}
              />
            </div>
          )}
      </div>
    </Viewport>
  );
};

export default Overview;

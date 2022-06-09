import React from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import slugify from 'slugify';
// import { useRouter } from 'next/router';
import CardCrowdfunding from '../../unreleased/card/crowdfunding';
import Container from '../../elements/container';
import Button from '../../elements/button';
import sortBy from '../../utils/sortBy';
import CardAuction from '../../unreleased/card/auction';
import getRoute from '../../utils/getRoute';

// import isExceptionPages from '../../../../../../shared/utils/isExceptionPages';
// import PropsContext from '../../../../../../contexts/PropsContext';

interface Props {
  auctions: any;
  crowdfundings: any;
  isOwner?: boolean;
  programId: number;
  projectId: number;
  showTitle?: boolean;
}

const Initiatives = ({
  auctions,
  crowdfundings,
  isOwner,
  programId,
  projectId,
  showTitle = true,
  locale,
  router,
  isExceptionPages = () => {},
}: Props) => {
  const intl: IntlShape = useIntl();
  // const { locale } = useContext(PropsContext);
  // const router = useRouter();
  const initiatives = [];

  auctions.forEach(auction => {
    const item = { ...auction };
    item.type = 'auction';
    initiatives.push(item);
  });

  crowdfundings.forEach(crowdfunding => {
    const item = { ...crowdfunding };
    item.dateAdded = crowdfunding.created_at;
    item.type = 'crowdfunding';
    initiatives.push(item);
  });

  const isExceptionPage = isExceptionPages(router?.pathname);

  const thumbLink = (id, auctionTitle) => {
    const path = isExceptionPage ? 'about' : 'needs';
    window.location.href = `/${locale}/${path}/auction/detail/${id}-${slugify(auctionTitle, {
      replacement: '-',
      remove: /[?$*_+~./,()'"!\-:@]/g,
      lower: true,
    })}`;
  };

  const initiativesOrdered = sortBy(initiatives, 'dateAdded');

  if (!isOwner && initiatives.length === 0) {
    return (
      <Container borderSize={1} rounded>
        <div className="project-detail-component__initiatives-empty">
          <h3>
            <FormattedMessage id="No initiatives at the moment" />
          </h3>
          <p>
            <FormattedMessage id="Once the project's owner creates initiatives, they'll be displayed here" />
          </p>
        </div>
      </Container>
    );
  }

  return (
    <>
      {showTitle && (
        <>
          <h2>
            <FormattedMessage id="Initiatives" />
            {initiativesOrdered.length > 3 && (
              <Button
                text="See all"
                extraClass="secondary"
                href={getRoute.public.accelerator.project.INITIATIVES(locale, programId, projectId)}
              />
            )}
          </h2>
          <p>
            <FormattedMessage id="Initiatives supporting this project" />
          </p>
        </>
      )}
      {initiativesOrdered.length === 0 ? (
        <Container borderSize={1} rounded>
          <div className="project-detail-component__initiatives-empty">
            <h3>
              <FormattedMessage id="You haven’t created any initiatives yet" />
            </h3>
            <p>
              <FormattedMessage id="Initiaitives will help you to support your project needs" />
            </p>
            <Button
              className=""
              extraClass="primary-full"
              onClick={() => {}}
              size="md"
              text={intl.formatMessage({ id: 'New initiative' })}
            />
          </div>
        </Container>
      ) : (
        <div className="project-detail-component__initiatives-list">
          {initiativesOrdered.map(item => {
            if (item.type === 'auction') {
              let auctionTitle = item.title;
              const isNotLocalePtBr = locale !== 'pt' && locale !== 'br';
              if (isNotLocalePtBr && item.title_en) {
                auctionTitle = item.title_en;
              }
              return (
                <div className="auction-thumb" key={item.id}>
                  <CardAuction
                    auction={item}
                    clickThumb={() => thumbLink(item.id, auctionTitle)}
                    communityUrl="https://community.testesolidar.com/"
                    currency={item.currency.small}
                  />
                </div>
              );
            }

            return (
              <div className="crowdfunding-thumb" key={item.id}>
                <CardCrowdfunding
                  crowdfunding={item}
                  clickThumb={() => thumbLink(item.id, item.title)}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Initiatives;

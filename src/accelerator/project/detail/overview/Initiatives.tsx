import React from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import CardCrowdfunding from '../../../../unreleased/card/crowdfunding';
import Container from '../../../../elements/container';
import Button from '../../../../elements/button';
import sortBy from '../../../../utils/sortBy';
import CardAuction from '../../../../unreleased/card/auction';
import getRoute from '../../../../utils/getRoute';
import slugify from '../../../../utils/slugify';

interface Props {
  auctions: any;
  crowdfundings: any;
  isOwner?: boolean;
  programId: number;
  projectId: number;
  showTitle?: boolean;
  isAdmin?: boolean;
  locale: string;
  handleAddInitiative(): void;
}

const Initiatives = ({
  auctions,
  crowdfundings,
  isOwner,
  programId,
  projectId,
  showTitle = true,
  isAdmin = false,
  locale,
  handleAddInitiative,
}: Props) => {
  const intl: IntlShape = useIntl();
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

  const crowdfundingUrl = (id: number, title: string) => {
    if (isAdmin) {
      window.location.href = `/crowdfunding/public/detail/${id}-${slugify(title)}`;
    } else {
      window.location.href = `/${locale}/needs/crowdfunding/detail/${id}-${slugify(title)}`;
    }
  };

  const auctionUrl = (id: number, title: string) => {
    window.location.href = `/${locale}/needs/auction/detail/${id}-${slugify(title)}`;
  };

  const initiativesOrdered = sortBy(initiatives, 'dateAdded');

  if (!isOwner && initiatives.length === 0) {
    return (
      <Container borderSize={1} rounded>
        <div className="project-detail-component__initiatives-empty">
          <h3>
            <FormattedMessage id="toolkit.initiatives.owner.empty.title" />
          </h3>
          <p>
            <FormattedMessage id="toolkit.initiatives.owner.empty.text" />
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
            <FormattedMessage id="toolkit.initiatives" />
            {initiativesOrdered.length > 3 && (
              <Button
                text={intl.formatMessage({ id: 'see.all' })}
                extraClass="secondary"
                href={getRoute.public.accelerator.project.INITIATIVES(locale, programId, projectId)}
              />
            )}
          </h2>
          <p>
            <FormattedMessage id="toolkit.initiatives.supporting.project" />
          </p>
        </>
      )}
      {initiativesOrdered.length === 0 ? (
        <Container borderSize={1} rounded>
          <div className="project-detail-component__initiatives-empty">
            <h3>
              <FormattedMessage id="toolkit.initiatives.empty.title" />
            </h3>
            <p>
              <FormattedMessage id="toolkit.initiatives.empty.text" />
            </p>
            <Button
              extraClass="primary-full"
              onClick={handleAddInitiative}
              size="md"
              text={intl.formatMessage({ id: 'whitelabel.new-initiative' })}
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
                    clickThumb={() => auctionUrl(item.id, auctionTitle)}
                    currency={item.currency.small}
                  />
                </div>
              );
            }

            return (
              <div className="crowdfunding-thumb" key={item.id}>
                <CardCrowdfunding
                  crowdfunding={item}
                  clickThumb={() => crowdfundingUrl(item.id, item.title)}
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

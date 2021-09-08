/* eslint-disable no-param-reassign */
import React, { FC, useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import Props from './CardList.types';
import CardCrowdfunding from '../card/crowdfunfing/CardCrowdfunding';
import Button from '../../elements/button';
import ListFooter from '../listFooter/ListFooter';
import Title from '../title/title';
import List from '../../interfaces/list';

interface Types {
  crowdfunding: number;
  auction: number;
  project: number;
}

const getListFooterLabel = ({ crowdfunding, auction, project }: Types, intl: () => void) => {
  if (crowdfunding > 0 && auction === 0 && project === 0) {
    return intl.formatMessage({
      id: 'toolkit.list.footer.crowdfunding',
      values: { count: crowdfunding },
    });
  }
  if (crowdfunding === 0 && auction > 0 && project === 0) {
    return intl.formatMessage({
      id: 'toolkit.list.footer.crowdfunding',
      values: { count: auction },
    });
  }
  if (crowdfunding === 0 && auction === 0 && project > 0) {
    return intl.formatMessage({
      id: 'toolkit.list.footer.project',
      values: { count: auction },
    });
  }

  return intl.formatMessage({
    id: 'toolkit.list.footer.initiative',
    values: { count: auction },
  });
};

const CardList: FC<Props> = ({
  title,
  subtitle,
  list,
  seeAll,
  communityUrl,
  perPageOptions,
  lang = 'en',
  hasListFooter = false,
  onChangePagination,
  onChangeSelectPerPage,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [cardList, setCardList] = useState<List>(list);
  const [types, setTypes] = useState({
    crowdfunding: 0,
    auction: 0,
    project: 0,
  });

  useEffect(() => {
    const tempList = { ...list };
    const tempTypes = { ...types };

    tempList.data.map(card => {
      if (card.contributes_count !== undefined) {
        card.type = 'crowdfunding';
        tempTypes.crowdfunding += 1;
      }
      if (card.bid_start !== undefined) {
        card.type = 'auction';
        tempTypes.auction += 1;
      }
      if (card.project_category !== undefined) {
        card.type = 'project';
        tempTypes.project += 1;
      }
    });

    setTypes(tempTypes);
    setCardList(tempList);
  }, [list]);

  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <Row className="cardList__content">
        {cardList?.data?.map(card => (
          <Col xs={12} sm={4} lg={3}>
            {card?.type === 'crowdfundings' && (
              <CardCrowdfunding
                crowdfunding={card}
                clickThumb={() => {}}
                communityUrl={communityUrl}
                lang={lang}
              />
            )}
          </Col>
        ))}
      </Row>
      {hasListFooter && (
        <ListFooter
          labelResultText={getListFooterLabel(types, intl)}
          onChangePagination={onChangePagination}
          onChangeSelectPerPage={onChangeSelectPerPage}
          data={cardList}
          perPageOptions={perPageOptions}
        />
      )}
      {!!seeAll && !hasListFooter && (
        <div className="cardList__see-all text-center">
          <Button
            extraClass="primary"
            fullWidth={false}
            rounded={false}
            href={seeAll.url}
            size="md"
            target="_blank"
            text={intl.formatMessage({
              id: 'see.all',
            })}
            type="button"
          />
        </div>
      )}
    </>
  );
};

export default CardList;

/* eslint-disable no-param-reassign */
import React, { FC, useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import { Col, Row } from 'react-bootstrap';
import { Props, List } from './CardList.types';
import CardCrowdfunding from '../card/crowdfunding/CardCrowdfunding';
import CardAuction from '../card/auction/CardAuction';
import Button from '../../elements/button';
import isDefined from '../../utils/isDefined';
import ListFooter from '../listFooter/ListFooter';
import Title from '../title/title';
import clone from '../../utils/clone';

interface Types {
  crowdfunding: number;
  auction: number;
  project: number;
}

const getListFooterLabel = ({ crowdfunding, auction, project }: Types, intl: IntlShape) => {
  if (crowdfunding > 0 && auction === 0 && project === 0) {
    return intl.formatMessage(
      {
        id: 'toolkit.list.footer.crowdfunding',
      },
      { count: crowdfunding }
    );
  }
  if (crowdfunding === 0 && auction > 0 && project === 0) {
    return intl.formatMessage(
      {
        id: 'toolkit.list.footer.auction',
      },
      { count: auction }
    );
  }
  if (crowdfunding === 0 && auction === 0 && project > 0) {
    return intl.formatMessage(
      {
        id: 'toolkit.list.footer.project',
      },
      { count: project }
    );
  }

  return intl.formatMessage({
    id: 'toolkit.list.footer.initiative',
  });
};

const CardList: FC<Props> = ({
  title,
  subtitle,
  list,
  button,
  communityUrl,
  footer,
  onClickThumb,
  emptyState,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();
  const [cardList, setCardList] = useState<List>(list);
  const [types, setTypes] = useState<Types>({
    crowdfunding: 0,
    auction: 0,
    project: 0,
  });

  useEffect(() => {
    const tempList = clone(list);
    const tempTypes = clone(types);

    tempList.data.map(card => {
      if (card.contributes_count !== undefined) {
        card.type = 'crowdfunding';
        tempTypes.crowdfunding += 1;
      }
      if (card.bids_count !== undefined) {
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
      {cardList?.data.length > 0 ? (
        <Row className="cardList__content">
          {cardList?.data?.map((card, indx) => (
            <Col key={indx} xs={12} sm={6} md={4}>
              {card?.type === 'crowdfunding' && (
                <CardCrowdfunding
                  crowdfunding={card}
                  clickThumb={() => onClickThumb(card.id)}
                  communityUrl={communityUrl}
                />
              )}
              {card?.type === 'auction' && (
                <CardAuction
                  auction={card}
                  clickThumb={() => onClickThumb(card.id)}
                  communityUrl={communityUrl}
                  currency={card.currency.small}
                />
              )}
            </Col>
          ))}
        </Row>
      ) : (
        <div className="cardList__content">
          <p className="cardList__content--empty-state">{emptyState}</p>
        </div>
      )}
      {isDefined(footer) && (
        <ListFooter {...footer} labelResultText={getListFooterLabel(types, intl)} />
      )}
      {isDefined(button) && (
        <Button
          extraClass="primary"
          className="cardList__button"
          href={button.url}
          target="_blank"
          text={intl.formatMessage({ id: button.text || 'see.all' })}
        />
      )}
    </>
  );
};

export default CardList;

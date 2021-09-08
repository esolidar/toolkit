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

const CardList: FC<Props> = ({
  title,
  subtitle,
  list,
  seeAll,
  communityUrl,
  lang = 'en',
  hasListFooter = false,
  onChangePagination,
  onChangeSelectPerPage,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [cardList, setCardList] = useState<List>([]);
  const [types, setTypes] = useState('');

  useEffect(() => {
    const tempList = { ...list };

    tempList.data.map(card => {
      if (card.contributes_count !== undefined) {
        card.type = 'crowdfunding';
        setTypes(card.type);
      }
      if (card.bid_start !== undefined) {
        card.type = 'auction';
        setTypes(card.type);
      }
    });

    setCardList(tempList);
  }, [list]);

  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <Row className="cardList__content">
        {cardList.data?.map(card => (
          <Col xs={12} sm={4} lg={3}>
            {card?.type === 'crowdfunding' && (
              <CardCrowdfunding
                crowdfunding={card}
                clickThumb={() => {}}
                communityUrl={communityUrl}
                lang={lang}
              />
            )}
            {/* {card?.type === 'auction' && <div>Auction</div>} */}
          </Col>
        ))}
      </Row>
      {hasListFooter && (
        <ListFooter
          labelResultText={types}
          onChangePagination={onChangePagination}
          onChangeSelectPerPage={onChangeSelectPerPage}
          data={cardList}
        />
      )}
      {!!seeAll && !hasListFooter && (
        <div className="text-center">
          <Button
            extraClass="primary-full"
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

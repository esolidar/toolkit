import React, { FC } from 'react';
import Props from './CardNonProfitList.types';
import CardNonProfit from '../nonProfit/CardNonProfit';

const CardNonProfitList: FC<Props> = ({
  items,
  gridType = 'one',
  onClickThumb,
  onClickDonate,
}: Props): JSX.Element => {
  return (
    <>
      {gridType === 'one' && (
        <CardNonProfit
          npo={items[0]}
          inline={true}
          onClickThumb={onClickThumb}
          onClickDonate={onClickDonate}
        />
      )}

      {gridType === 'two' && (
        <div className="cardNonProfitList--col2">
          {items.map((npo, key) => (
            <CardNonProfit
              key={key}
              npo={npo}
              onClickThumb={onClickThumb}
              onClickDonate={onClickDonate}
            />
          ))}
        </div>
      )}

      {gridType === 'multi' && (
        <div className="cardNonProfitList--col3">
          {items.map((npo, key) => (
            <CardNonProfit
              key={key}
              npo={npo}
              onClickThumb={onClickThumb}
              onClickDonate={onClickDonate}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default CardNonProfitList;

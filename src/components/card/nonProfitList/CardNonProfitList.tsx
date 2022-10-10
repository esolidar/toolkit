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
          showButton={items[0]?.stripe_acount?.status === 'A'}
          npo={items[0]}
          inline={true}
          onClickThumb={() => onClickThumb(items[0])}
          onClickDonate={() => onClickDonate(items[0])}
        />
      )}

      {gridType === 'two' && (
        <div className="cardNonProfitList--col2">
          {items.map((npo, key) => (
            <CardNonProfit
              showButton={npo.stripe_acount?.status === 'A'}
              key={key}
              npo={npo}
              onClickThumb={() => onClickThumb(npo)}
              onClickDonate={() => onClickDonate(npo)}
            />
          ))}
        </div>
      )}

      {gridType === 'multi' && (
        <div className="cardNonProfitList--col3">
          {items.map((npo, key) => (
            <CardNonProfit
              showButton={npo.stripe_acount?.status === 'A'}
              key={key}
              npo={npo}
              onClickThumb={() => onClickThumb(npo)}
              onClickDonate={() => onClickDonate(npo)}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default CardNonProfitList;

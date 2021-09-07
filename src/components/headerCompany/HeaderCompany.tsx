import React, { FC, useState, useEffect } from 'react';
import Props from './HeaderCompany.types';

const HeaderCompany: FC<Props> = ({ company, cdnStaticUrl }: Props): JSX.Element => {
  const [thumbCover, setThumbCover] = useState('');

  useEffect(() => {
    setThumbCover(
      company.cover_image
        ? company.cover_image
        : `${cdnStaticUrl}/whitelabel-frontend/assets/company-cover.png`
    );
  }, []);

  const coverBox = { backgroundImage: `url(${thumbCover})` };

  return (
    <div className="header-company-component">
      <div className="header-company-component__header-bg" style={coverBox} />
    </div>
  );
};

export default HeaderCompany;

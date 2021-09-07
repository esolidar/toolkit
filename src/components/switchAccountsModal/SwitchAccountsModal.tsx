import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Props from './SwitchAccountsModal.types';
import CustomModal from '../../elements/customModal';
import ListElement from '../../elements/listElement';

const SwitchAccountsModal: FC<Props> = ({
  title,
  subtitle,
  numberOfAccounts,
  isOpen,
  user,
  companies,
  handleClickSelectUser,
  handleClickSelectCompany,
}: Props): JSX.Element => {
  const showCompanies = companies => {
    if (companies?.length > 0) {
      return companies.map((company, index) => (
        <ListElement
          key={index}
          onClick={handleClickSelectCompany}
          name={company.name}
          email={companies?.length === 1 ? 'Admin' : ''}
          imageSrc={company.thumbs?.thumb}
        />
      ));
    }
  };

  return (
    <CustomModal
      bodyChildren={
        <>
          <div className="switch-accounts-modal__title">
            <h3>
              <FormattedMessage id={title} />
            </h3>
            {subtitle && (
              <p className="switch-accounts-modal__subtitle">
                <FormattedMessage id={subtitle} values={{ number: numberOfAccounts }} />
              </p>
            )}
          </div>
          <div className="switch-accounts-modal__account-list">
            {user && (
              <ListElement
                onClick={handleClickSelectUser}
                name={user?.name}
                email={user?.email}
                imageSrc={user?.thumbs?.thumb}
              />
            )}
            {showCompanies(companies)}
          </div>
        </>
      }
      closeButton={false}
      dialogClassName="switch-accounts-modal"
      show={isOpen}
      showFooter={false}
      showHeader={false}
    />
  );
};

export default SwitchAccountsModal;

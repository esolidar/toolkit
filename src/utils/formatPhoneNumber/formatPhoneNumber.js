const formatPhoneNumber = countryId => {
  switch (countryId) {
    case '208':
      return {
        format: '### ### ### ###',
        placeHolder: '351 911 365 854',
      };

    case '231':
      return {
        format: '## #### ######',
        placeHolder: '44 511 365 854',
      };

    case '232':
      return {
        format: '# ### ### ####',
        placeHolder: '1 511 365 8546',
      };

    case '150':
      return {
        format: '(##) ## #### ####',
        placeHolder: '55 51 3655 8546',
      };

    default:
      return {
        format: null,
        placeHolder: '351 911 365 854',
      };
  }
};

export default formatPhoneNumber;

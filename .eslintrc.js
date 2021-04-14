module.exports = {
  extends: ['@esolidar/eslint-config-esolidar'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

// tentar remover injectIntl do formatCurrency
// tentar usar o useIntl no downloadExcel()
// .dive
// <intlprovider>
// FIXME: errorBoundary, projectAddForm, validateTelephone
// TODO: eliminar o fixme

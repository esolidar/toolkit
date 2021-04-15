module.exports = {
  extends: ['@esolidar/eslint-config-esolidar'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

// tentar usar o useIntl no downloadExcel()
// FIXME: errorBoundary, projectAddForm, validateTelephone
// TODO: eliminar o fixme

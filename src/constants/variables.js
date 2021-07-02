const variables = {
  mainTextColors: {
    light: '#738598',
    dark: '#455c75',
  },

  colors: {
    red: '#ff494c',
    pink: '#ff85af',
    purple: '#d559ea',
    deepPurple: '#673ab7',
    indigo: '#3f51b5',
    blueGray: '#5c7d9c',
    blue: '#0094d4',
    lightBlue: '#05c6e5',
    cyan: '#00bcd4',
    teal: '#39bbb0',
    green: '#34c77f',
    lightGreen: '#8bc34a',
    lime: '#cddc39',
    yellow: '#ffd500',
    sunglow: '#ffca3a',
    amber: '#ffbe00',
    orange: '#ffa500',
    deepOrange: '#ff8100',
    danger: '#fd4b51',
    brown: '#795548',
    gray: '#9e9e9e',
    black: '#000000',
    white: '#ffffff',
    whiteSmoke: '#f2f2f2',
  },

  themeColors: {
    primary: '#04c7e5',
    secondary: this.blue,
    success: this.green,
    info: this.lightBlue,
    warning: this.amber,
    danger: this.red,
    dark: this.mainTextColorDark,
  },
  themeColorsLight: {
    primary: '#b3eef7',
    secondary: this.blue,
    success: this.green,
    info: this.lightBlue,
    warning: this.amber,
    danger: this.red,
    dark: this.mainTextColorDark,
  },
  themeColorsDark: {
    primary: '#163352',
    secondary: this.blue,
    success: this.green,
    info: this.lightBlue,
    warning: this.amber,
    danger: this.red,
    dark: this.mainTextColorDark,
  },

  grays: {
    50: '#fbfcfc',
    100: '#f6f9f9',
    200: '#e7eaed',
    300: '#e7ebed',
    400: '#d0d6dd',
    500: '#a2adba',
    600: '#757575',
    700: '#444444',
    800: '#424242',
    900: '#212121',
  },

  statusColors: {
    active: this.green,
    pending: this.amber,
    ended: this.themeColors.primary,
    deleted: this.danger,
    declined: this.mainTextColorLight,
  },

  input: {
    labelColor: this.mainTextColorDark,
    textColor: this.mainTextColorDark,
    borderColor: this.grays[400],
    backgroundColor: this.white,
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    boxShadowHover:
      'inset 0 1px 1px rgba(0, 0, 0, 0.075) 0 0 6px lighten(map-get($grays, 400), 20%)',
  },

  fonts: {
    main: 'AvenirLT-Roman',
    light: 'AvenirLTStd-Light',
    heavy: 'AvenirLTStd-Heavy',
    notification: 'Notification',
  },

  breakpoints: {
    xs: '425px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },

  footerLinkColor: this.themeColorsLight.primary,
  facebookColor: '#39579b',
  errorColor: this.colors.red,
  tableHeaderTextColor: this.colors.white,

  endedColor: this.colors.red,
  runningColor: '#31bd79',
  soonColor: this.colors.lightBlue,
  pendingColor: this.colors.orange,
};

export default variables;

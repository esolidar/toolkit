import 'bootstrap/dist/css/bootstrap.css';
import '!style-loader!css-loader!sass-loader!../src/assets/sass/main.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

module.exports = {
  title: 'eSolidar Toolkit',
  assetsDir: './styleguide/',
  sections: [
    {
      name: 'Icons',
      components: 'src/components/icon/Icon.js',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Elements',
      components: 'src/elements/**/*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Components',
      components: 'src/components/**/*.js',
      ignore: ['src/components/icon/Icon.js'],
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  theme: {
    color: {
      base: '#666',
      link: '#fff',
      linkHover: '#666',
      sidebarBackground: '#04C7E5',
    },
    sidebarWidth: 300,
  },
  styles: {
    Logo: {
      logo: {
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        background: 'url(https://www.esolidar.com/images/login-logo-top.png) 0px 0px no-repeat',
        backgroundSize: '44px',
      },
    },
  },
  template: {
    favicon: 'https://www.esolidar.com/images/login-logo-top.png',
  },
  require: [
    './src/assets/sass/mainStyleguide.scss',
    './src/assets/sass/bootstrap/bootstrap.min.css',
    './styleguide.css',
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
  },
};

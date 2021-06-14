import React from 'react';
import GoogleMapsView from './GoogleMapsView';

export default {
  title: 'Components/GoogleMapsView',
  component: GoogleMapsView,
};

const Template = args => <GoogleMapsView {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['GoogleMapsView.test.js'],
};
Default.args = {
  latitude: '41.6918275',
  longitude: '-8.8344101',
  onClickMap: () => {},
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBppPOaHl8Dm8OLmzeDDysyyoAfjuxto2U',
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: '300px' }} />,
  mapElement: <div style={{ height: '100%' }} />,
};

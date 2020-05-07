/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

export default class Wrapper extends Component {
  render() {
    return (
      <IntlProvider locale="en">{this.props.children}</IntlProvider>
    );
  }
}

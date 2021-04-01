import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export class PageContent extends Component {
  //consuming context
  static contextType = ThemeContext;
  render() {
    //consuming context
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? 'black' : 'white',
      height: '100vh',
      width: '100vw',
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;

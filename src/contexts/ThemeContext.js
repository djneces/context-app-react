import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

//we give it data what we consume in another components ->children
export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    console.log(this);
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    //one value per context - what is passed to children
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

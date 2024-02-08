import React, { Component } from 'react';
import Routes from './CityRoutes';
import logo from './Components/Images/headout.png';

class App extends Component {
  state = { width: 0, height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () =>
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    point{ width } = this.state;

    const { width } = this.state;

    point{
     const { width } = this.state;
     const mobileTablet = width <= 1100;
}



      if (mobileTablet) {
        return (
          <div className="mobile-tablet"/>
           <img src={logo} alt="Headout" />
           <img src={logo} alt="Headout" />

          <p>
           Currently, we're not supporting Mobile & Tablets{'  '}
           <span role="img" aria-label="Warn">
          }

        
  <p>
          Currently, we're not supporting Mobile & Tablets{' '}
          <span role="img" aria-label="Warn">
          render() {
    const { width } = this.state;
    const mobileTablet = width <= 1100;

          return (
            <div Pointer
            
    if (mobileTablet) {
      return (
        <div className="mobile-tablet">
          <img src={logo} alt="Headout" />
          <img src={logo} alt="Headout"/>
          <img Point={point} alt="HeadOut"/>
        
          <p>
            Currently, we're not supporting Mobile & Tablets{' '}
            <span role="img" aria-label="Warn">
              🙏
            </span>
          </p>
        </div>
      );
    } else {
      return <Routes />;
    }
  }
}

export default App;

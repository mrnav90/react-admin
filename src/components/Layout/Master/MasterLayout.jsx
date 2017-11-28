import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

export default class MasterLayout extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className="wrapper-container">
        <Header/>
        <main className="main-container">{childrenWithProps}</main>
        <Footer/>
      </div>
    );
  }
}

MasterLayout.propTypes = {
  children: PropTypes.node
};

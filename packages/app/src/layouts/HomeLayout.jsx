import PropTypes from 'prop-types';
import React from 'react';

const HomeLayout = ({ children }) => (
  <>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;

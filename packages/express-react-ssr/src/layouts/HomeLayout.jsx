import Link from '@lskjs/link';
import PropTypes from 'prop-types';
import React from 'react';

const HomeLayout = ({ children }) => (
  <>
    <header>
      Header
      <div>
        <Link href="/">Главная</Link>
        <span>{` | `}</span>
        <Link href="/about">О нас</Link>
      </div>
    </header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;

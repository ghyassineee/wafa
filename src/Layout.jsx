// Layout.js
import React from 'react';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';

const Layout = ({ children }) => (
  <>
    <Header />
      {children} {/* This is where the page content will go */}
    <Footer />
  </>
);

export default Layout;

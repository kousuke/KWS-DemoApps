import { ThemeContext } from 'context';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export const Layout = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className='wraper'>
      <Header />
      <div style={{ backgroundColor: theme.primary.bgColor || '#fff' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

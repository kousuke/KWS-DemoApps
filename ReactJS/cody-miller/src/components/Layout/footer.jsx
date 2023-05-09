import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getInitials, isObject } from 'helpers';
import { useAuth } from 'hooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from 'context';
import { setLocalStorage } from 'utils';

const NavLink = (props) => <Link {...props} />;

const Footer = function () {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const { theme } = React.useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef();

  const closeOpenMenus = useCallback(
    (e) => {
      if (
        mobileMenuRef.current &&
        showMenu &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    },
    [showMenu],
  );

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);
  }, [closeOpenMenus]);

  return (
    <footer
      id='myFooter'
      className=' py-2'
      style={{
        backgroundColor: theme.header.bgColor,
        color: 'white',
      }}>
      <div className='container'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <div
            style={{
              alignItems: 'center',
              width: '100%',
            }}>
            <div style={{ width: '100%', height: '60px' }}>CODY MILLER</div>
            <div style={{ width: '100%' }}>Contact US</div>
            <div style={{ width: '100%' }}>Terms of Purchase</div>
          </div>

          <div style={{ display: 'flex' }}></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

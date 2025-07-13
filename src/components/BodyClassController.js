import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BodyClassController() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }
    return () => {
      document.body.classList.remove('home-page');
    };
  }, [location.pathname]);
  return null;
}

export default BodyClassController; 
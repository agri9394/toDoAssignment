import React from 'react';
import './index.css';
import { strict } from 'assert';
type HeaderProps = {
  heading?: string,
  datatestid?:string
}

function Header({datatestid,heading}:HeaderProps) {
  return (
    <div className="headerContainer">
      <p data-testid={datatestid} className="headerTitleStyle">{heading || 'Heading Text'}</p>
    </div>
  );
}

export default Header;

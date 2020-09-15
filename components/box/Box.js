import React from 'react';
import './Box.css'

function Box({myClass, children}) {
  return (
    <div className={myClass}>
      {children}
    </div>
  );
}

export default Box;
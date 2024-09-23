import React from 'react';

function Button({ label, primary }) {
  return (
    <div>
      <button className={`${primary ? 'primary-button' : 'button'}`}>
        {label}
      </button>
    </div>
  );
}

export default Button;
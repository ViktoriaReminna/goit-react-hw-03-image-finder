import React from 'react';

export const Button = ({ onClick, isHidden }) => {
  return isHidden ? null : (
    <button type="button" className="button" onClick={onClick}>
      Load more
    </button>
  );
};

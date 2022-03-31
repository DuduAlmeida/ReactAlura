// #region Imports

import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

// #endregion Imports

// #region Inputs


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

// #endregion Inputs

const ButtonComponent: React.FC<ButtonProps> = ({ isOutlined = false, ...props }) => {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
}

export default ButtonComponent;
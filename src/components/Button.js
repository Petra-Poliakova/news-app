import React from 'react';

import '../styles/Button.scss';

const STYLES = [
    'btn-primary-solid',
    'btn-warning-solid',
    'btn-danger-solid',
    'btn-success-solid',
    'btn-primary-outline',
    'btn-warning-outline',
    'btn-danger-outline',
    'btn-success-outline'
];

const SIZES = ['btn-medium', 'btn-small', 'btn-large'];  

export default function Button(props) {
  const {
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    } = props
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkCustomSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button type={type} className={`btn ${checkButtonStyle} ${checkCustomSize}`} onClick={onClick}>{children}</button>
  )
}


import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn-solid', 'btn-outline'];

const SIZES = ['btn-medium', 'btn-large'];

interface IPrimaryButtonProps {
  text: string;
  onClick: () => void;
  buttonStyle?: string;
  buttonSize?: string;
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = ( props: IPrimaryButtonProps): React.ReactElement<IPrimaryButtonProps> => {
  const {text, onClick, buttonStyle, buttonSize} = props;

  const checkButtonStyle = buttonStyle === 'undifned' && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = buttonSize === 'undifned' && SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
}

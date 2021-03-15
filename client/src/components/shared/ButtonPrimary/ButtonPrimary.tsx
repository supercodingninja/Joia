import React from 'react';
import './ButtonPrimary.css';

interface IButtonPrimaryProps {
  text: string;
  onClick: () => void;
}

export const ButtonPrimary: React.FC<IButtonPrimaryProps> = ( props: IButtonPrimaryProps): React.ReactElement<IButtonPrimaryProps> => {
  const {text, onClick} = props;


  return (
      <button className="btn btn-warning" onClick={onClick}>{text}</button>
  );
}

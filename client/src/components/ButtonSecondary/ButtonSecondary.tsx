import React from 'react';
import './ButtonSecondary.css'

interface IButtonSecondaryProps {
  text: string;
  onClick: () => void;
}

export const ButtonSecondary: React.FC<IButtonSecondaryProps> = ( props: IButtonSecondaryProps): React.ReactElement<IButtonSecondaryProps> => {
  const {text, onClick} = props;

  return (
      <button className="btn btn-outline-warning" onClick={onClick}>{text}</button>
  );
}





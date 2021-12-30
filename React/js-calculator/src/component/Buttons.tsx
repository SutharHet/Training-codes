import React from 'react';
import { isPropertySignature } from 'typescript';
interface Data{
  btnId: string,
  text: string,
  onClick(): void 
}
const Buttons: React.FC<Data> = (props: Data): React.ReactElement => {
  return (  
      <button className="btn" id={props.btnId} onClick={props.onClick}>{props.text}</button>
  );
}

export default Buttons;
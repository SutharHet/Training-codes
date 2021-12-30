import React from 'react';

const Display: React.FC<{text: string}> = (props: {text: string}): React.ReactElement => {
  return (    
    <div id="display">   
      <p>{props.text}</p>
    </div>
  );
}

export default Display;
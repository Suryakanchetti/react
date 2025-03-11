import React , {useState} from 'react';

const Sample = () => {
 const [text, setText] = useState()

 const handleClick = () => {
  setText('Iam here');
 };
  return  (
    <div> 
    <button onClick={handleClick}> Click Me </button>
    <p>{text}</p>
    </div>
   
  )
};

export default Sample;  

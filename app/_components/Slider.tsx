import React, { useEffect } from 'react';
import { getCategory } from '../_utils/gloabalApi';

interface Props {
   // Add props here
}

const Slider: React.FC<Props> = ({  }) => {

useEffect(()=>{
    getCategory()
})

  return (
    <div>
      <h2>slider</h2>
    </div>
  );
};

export default Slider;
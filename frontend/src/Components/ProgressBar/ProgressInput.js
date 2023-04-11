import React, { useState } from "react";

const ProgressInput = () => {

    const [percentage, setPercentage] = useState(25);

    const handleChangeEvent = (event) => {
        setPercentage(event.target.value);
      }
    return (
        <div>
            <input 
              id="progressInput" 
              type="range" 
              min="0" 
              max="100" 
              step="1"
              value={percentage}
              onChange={handleChangeEvent}/>
          </div>
    );
};

export default ProgressInput;

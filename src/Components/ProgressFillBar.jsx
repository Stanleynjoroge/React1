import React, { useState } from 'react';

const ProgressBar = () => {
    const [percent, setPercent] = useState(0);

    const handleInput = (e) => {
        const value = e.target.value;
        setPercent(value > 100 ? 100 : value < 0 ? 0 : value);
    };

    return (
        <div className='main'>
            <div className='input'>
            <p>Input percentage</p>
            <input onChange={handleInput}
            id='input'
            type="number" 
            value={percent}
             />
            </div>
            <div className="Bar"  style={{ width: '400px', height: '20px', backgroundColor: 'white' }}>
        <div className="Progress" style={{ width: `${percent}%`, height: '20px', backgroundColor: 'blue' }}><p> {percent}%</p></div>
      </div>
        </div>
    );
};

export default ProgressBar; 

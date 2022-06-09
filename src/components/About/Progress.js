import React from 'react';

const Progress = ({ value, name }) => {
    return (
        <div className='text-center'>
            <div class="radial-progress text-warning" style={{ '--value': value }}>{value}%</div>
            <h2 className='my-2 text-center uppercase text-white'>{name}</h2>
        </div>
    );
};

export default Progress;
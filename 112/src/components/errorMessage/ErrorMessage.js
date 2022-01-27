import React from 'react';
import error from '../../resources/img/error.gif'

const ErrorMessage = () => {
    return (
        <img src={error} alt='error'
             style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}}
        />
    );
};

export default ErrorMessage;
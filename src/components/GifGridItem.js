import React from 'react';

export const GifGridItem = ({ url, titulo }) => {
    return (
        <div className='card animate__animated animate__fadeInUp'>
            <img src={url} alt={titulo} />
            <p>{titulo}</p>
        </div>
    );
};

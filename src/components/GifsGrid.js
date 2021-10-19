import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifsGrid = ({ categorias }) => {
    const { loading, data } = useFetchGifs(categorias);

    return (
        <>
            <h3 className=' animate__animated animate__fadeInUp'>
                {categorias}
            </h3>
            {loading && (
                <p className=' animate__animated animate__flash'>Loading...</p>
            )}
            <div className='card-grid'>
                {data.map((img) => {
                    return <GifGridItem key={img.id} {...img} />;
                })}
            </div>
        </>
    );
};

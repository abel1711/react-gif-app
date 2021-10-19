import { useEffect } from 'react';
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categorias) => {
    const [state, setState] = useState({ data: [], loading: true });
    useEffect(() => {
        getGifs(categorias).then((gifs) => {
            setState({ data: gifs, loading: false });
        });
    }, [categorias]);
    return state;
};

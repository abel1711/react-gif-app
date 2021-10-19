import { useState } from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifsGrid } from './components/GifsGrid';
const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['One Punch']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategoria setCategorias={setCategorias} />
            <hr />
            <ol>
                {categorias.map((cat) => (
                    <GifsGrid categorias={cat} key={cat} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;

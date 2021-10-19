import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ({ setCategorias }) => {
    const [valueInput, setValueInput] = useState('');
    const cambioInput = (event) => {
        setValueInput(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (valueInput.trim().length > 2) {
            setCategorias((cat) => [valueInput.trim(), ...cat]);
            setValueInput('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={valueInput} onChange={cambioInput} />
        </form>
    );
};

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired,
};

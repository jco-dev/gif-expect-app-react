import { useState } from "react";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.length <= 1) return;
        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
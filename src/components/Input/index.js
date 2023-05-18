import { useState } from 'react';

const Input = ({
    type,
    placeholder,
    initialValue,
    handleValueChange,
    required,
}) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
        handleValueChange(e.target.value);
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
        />
    );
};

export default Input;

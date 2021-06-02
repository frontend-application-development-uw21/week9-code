import { useState } from 'react';

export default function useInput() {
    const [value, setValue] = useState('');
    const onInputChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
    }

    return [value, onInputChange];
}

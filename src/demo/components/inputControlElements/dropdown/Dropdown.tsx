import React, { FC, useState } from 'react';
import { Option } from './dropdown.types';

interface Props {
    options: Option[];
    defaultOption?: Option;
    onOptionChanged?: (option: Option) => void;
}

export const Dropdown: FC<Props> = ({ options, defaultOption, onOptionChanged }) => {
    const [currentOption, setCurrentOption] = useState(defaultOption || options[0]);

    const handleOptionChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const index = e.target.selectedIndex;
        const label = e.target[index].innerText;
        const { value } = e.target;
        const option = { value, label };
        setCurrentOption(option);
        if (onOptionChanged) onOptionChanged(option);
    };

    return (
        <select value={currentOption.value} onChange={(e) => handleOptionChanged(e)}>
            {options.map((option) => {
                return (
                    <option key={`lang-option-${option.label}`} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

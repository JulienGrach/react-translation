import React, { FC, useRef, useState } from 'react';
import { StyledOptionsWrapper, StyledDropdown, StyledOption, StyledHead } from './dropdown.styled';
import {Option} from "./dropdown.types";
import {useClickOutside} from "../../../hooks/useClickOutside";

interface Props {
    options: Option[];
    defaultOption?: Option;
    onOptionChanged?: (option: Option) => void;
}

export const Dropdown: FC<Props> = ({ options, defaultOption, onOptionChanged }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(defaultOption || options?.[0]);
    const dropdownRref = useRef<HTMLDivElement>(null);
    useClickOutside(dropdownRref, () => setIsOpen(false));

    const handleOptionChanged = (option: Option) => {
        setCurrentOption(option);
        if (onOptionChanged) onOptionChanged(option);
    };

    return (
        <StyledDropdown id="lang-dropdown" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} ref={dropdownRref}>
            <StyledHead>
                <span>{currentOption.label}</span>
            </StyledHead>
            {isOpen && (
                <StyledOptionsWrapper>
                    {options.map((option) => {
                        return (
                            <StyledOption key={`lang-option-${option.label}`} onClick={() => handleOptionChanged(option)}>
                                {option.label}
                            </StyledOption>
                        );
                    })}
                </StyledOptionsWrapper>
            )}
        </StyledDropdown>
    );
};

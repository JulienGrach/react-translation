import React, { FC } from 'react';
import { LanguageDropdown } from './languageDropdown/LanguageDropdown';

export const TopBar: FC = () => {
    return (
        <nav>
            <LanguageDropdown />
        </nav>
    );
};

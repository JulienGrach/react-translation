import React, { FC } from 'react';
import {useLanguageContext} from "../../../../lib/context";
import {LANGUAGES} from "../../../constants/languages.constants";
import {Dropdown} from "../../inputControlElements/dropdown/Dropdown";
import {ucFirst} from "../../../utils/string.utils";

export const LanguageDropdown: FC = () => {
    const { language, setLanguage } = useLanguageContext();

    const languageOptions = LANGUAGES.map((languageValue) => {
        return { label: ucFirst(languageValue), value: languageValue };
    });

    return (
        <Dropdown
            options={languageOptions}
            onOptionChanged={(option) => setLanguage(option.value)}
            defaultOption={languageOptions.find((option) => language === option.value)}
        />
    );
};

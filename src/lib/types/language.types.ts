import { Dispatch, SetStateAction } from 'react';

export type Language = string;

export type Languages = Language[];

export interface LanguageContextState {
    language: Language;
    setLanguage: Dispatch<SetStateAction<Language>>;
}

export interface LanguageContextConfig {
    languages: Languages;
    defaultLanguage?: Language;
}

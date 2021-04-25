import { Language, LanguageContextConfig } from '../types';
import { DEFAULT_QUERY_PARAM } from '../constants';

export const updateLanguageQueryParam = (value: Language): void => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(DEFAULT_QUERY_PARAM, value);
    window.history.pushState(null, 'null', `?${queryParams.toString()}`);
};

export const getInitialLanguage = (config: LanguageContextConfig): Language => {
    const { defaultLanguage, languages } = config;
    const queryParams = new URLSearchParams(window.location.search);
    const paramLanguage = queryParams.get(DEFAULT_QUERY_PARAM);
    if (paramLanguage && languages.includes(paramLanguage)) {
        return paramLanguage;
    }
    return defaultLanguage || languages[0];
};

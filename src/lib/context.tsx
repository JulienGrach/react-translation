import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { LanguageContextState, LanguageContextConfig, Language } from './types';
import { getInitialLanguage, updateLanguageQueryParam } from './utils';
import { errorUseLanguageContext } from './utils';

export const languageContext = createContext<LanguageContextState | undefined>(undefined);

export interface Props {
    config: LanguageContextConfig;
}

export const LanguageContextProvider: FC<Props> = ({ children, config }) => {
    const [language, setLanguage] = useState<Language>(getInitialLanguage(config));

    useEffect(() => {
        updateLanguageQueryParam(language);
    }, [language]);

    return <languageContext.Provider value={{ language, setLanguage }}>{children}</languageContext.Provider>;
};

export const useLanguageContext = (): LanguageContextState => {
    const languageState: LanguageContextState | undefined = useContext(languageContext);
    if (!languageState) {
        throw new Error(errorUseLanguageContext());
    }
    return React.useMemo(() => languageState, [languageState]);
};

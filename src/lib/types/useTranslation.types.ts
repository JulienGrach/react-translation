export interface UseTranslationHook {
    translate: TranslateFunction;
}

export type TranslationVariables = { [key: string]: string | number };

export type TranslateFunction = (key: string, variables?: TranslationVariables) => JSX.Element;

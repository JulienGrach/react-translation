import React, { useEffect, useState } from 'react';
import { TFNames, TFs, TranslationVariables, UseTranslationHook } from '../types';
import { BOLD_TAG, DEFAULT_TF_NAME, ITALIC_TAG, REGEX_HTML_TAGS } from '../constants';
import { useLanguageContext } from '../context';
import { createMarkup, importTF, translate, errorForbiddenHtmlTags } from '../utils';

export const useTranslation = (tFNames: TFNames = [DEFAULT_TF_NAME]): UseTranslationHook => {
    const { language } = useLanguageContext();
    const [tFs, setTFs] = useState<TFs | undefined>();

    const prepareTFs = async () => {
        const promises = tFNames.map((tFName) => {
            return importTF(language, tFName);
        });
        await Promise.all(promises).then((values) => {
            setTFs(values);
        });
    };

    const renderTranslation = (keyFullPath: string, variables?: TranslationVariables) => {
        const translatedValue = translate(language, keyFullPath, tFs, variables);

        const htmlTagsMatches = translatedValue.match(REGEX_HTML_TAGS);
        if (htmlTagsMatches?.some((htmlTagMatch) => !(htmlTagMatch === BOLD_TAG.opening || htmlTagMatch === ITALIC_TAG.opening)))
            throw new Error(errorForbiddenHtmlTags(translatedValue));

        return <span dangerouslySetInnerHTML={createMarkup(translatedValue)} />;
    };

    useEffect(() => {
        prepareTFs();
    }, [language]);

    return {
        translate: renderTranslation,
    };
};

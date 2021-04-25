import React, { FC } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { splitKeyFullPath } from '../utils';
import { TranslationVariables } from '../types';

interface Props {
    keyFullPath: string;
    variables?: TranslationVariables;
}

export const Translator: FC<Props> = ({ keyFullPath, variables }) => {
    const { tFName, keyPath } = splitKeyFullPath(keyFullPath);
    const { translate } = useTranslation([tFName]);
    return <>{translate(keyPath, variables)}</>;
};

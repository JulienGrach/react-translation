import { Language, TFs, TranslationVariables } from '../types';
import {
    errorObjectGiven,
    errorKeyDoesntExists,
    errorTFNotAvailable,
    errorVariableisMissing,
    getKeyPathValue,
    findKeyPathValueFromTFs,
    splitAllKeys,
    splitKeyFullPath,
    hasTFName,
} from './index';
import { VARIABLE_PREFIX, VARIABLE_SUFFIX } from '../constants';

const translateWithTargetedTFName = (language: Language, keyFullPath: string, tFs: TFs) => {
    const { tFName, keyPath } = splitKeyFullPath(keyFullPath);
    const splittedKeys = splitAllKeys(keyPath);
    const tFTargeted = tFs.find((tF) => tF.name === tFName);
    if (!tFTargeted) throw new Error(errorTFNotAvailable(tFName));
    const keyPathValue = getKeyPathValue(splittedKeys, tFTargeted);

    if (!keyPathValue) throw new Error(errorKeyDoesntExists(language, keyPath, tFName));
    if (typeof keyPathValue === 'object') throw new Error(errorObjectGiven(language, keyPath, tFName));

    return keyPathValue;
};

const translateWithoutTargetedTFName = (language: Language, keyFullPath: string, tFs: TFs) => {
    const splittedKeys = splitAllKeys(keyFullPath);
    const { tF, value } = findKeyPathValueFromTFs(splittedKeys, tFs);
    const tFNamesRange = `{${tFs.map((currentTF) => currentTF.name).join(' | ')}}`;

    if (!value) throw new Error(errorKeyDoesntExists(language, keyFullPath, tFNamesRange));
    if (typeof value === 'object') throw new Error(errorObjectGiven(language, keyFullPath, tF?.name));

    return value;
};

const solveVariables = (translatedValue: string, variables: TranslationVariables): string => {
    return Object.entries(variables).reduce((acc, curr) => {
        const variable = {
            key: curr[0],
            value: curr[1].toString(),
        };
        const searchedVariable = `${VARIABLE_PREFIX}${variable.key}${VARIABLE_SUFFIX}`;
        if (!translatedValue.includes(searchedVariable)) throw new Error(errorVariableisMissing(searchedVariable, translatedValue));
        return acc.replaceAll(searchedVariable, variable.value);
    }, translatedValue);
};

export const translate = (language: Language, keyFullPath: string, tFs?: TFs, variables?: TranslationVariables): string => {
    if (!tFs || !Array.isArray(tFs) || tFs.length < 1) return '';

    let translatedValue;

    if (hasTFName(keyFullPath)) {
        translatedValue = translateWithTargetedTFName(language, keyFullPath, tFs);
    } else {
        translatedValue = translateWithoutTargetedTFName(language, keyFullPath, tFs);
    }

    if (variables) translatedValue = solveVariables(translatedValue, variables);

    return translatedValue;
};

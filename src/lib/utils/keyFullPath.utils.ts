import { KEYS_SEPARATOR } from '../constants/translation.constants';
import { DEFAULT_TF_NAME, TFS_SEPARATOR } from '../constants/translationFiles.constants';
import { KeyFullPathSplitted, KeyPathValue, KeyPathValueFound, TF, TFs } from '../types/translationFiles.types';
import { errorKeyPathEmpty, errorTFNameEmpty, errorTooManySeparators } from './errors.utils';

export const getKeyPathValue = (splittedKeys: string[], tF: TF): KeyPathValue => {
    return splittedKeys.reduce((acc: KeyPathValue, splittedKey) => {
        if (typeof acc === 'object') return acc?.[splittedKey];
        return undefined;
    }, tF.content);
};

export const findKeyPathValueFromTFs = (splittedKeys: string[], tFs: TFs): KeyPathValueFound => {
    const keyPathValueFound: KeyPathValueFound = {
        value: undefined,
        tF: undefined,
    };
    for (let i = 0; i < tFs.length; i += 1) {
        keyPathValueFound.value = getKeyPathValue(splittedKeys, tFs[i]);
        if (keyPathValueFound.value) {
            keyPathValueFound.tF = tFs[i];
            if (typeof keyPathValueFound.value !== 'object') {
                break;
            }
        }
    }
    return keyPathValueFound;
};

export const hasTFName = (keyFullPath: string): boolean => keyFullPath.includes(TFS_SEPARATOR);

export const splitKeyFullPath = (keyFullPath: string): KeyFullPathSplitted => {
    if (hasTFName(keyFullPath)) {
        const splittedPath = keyFullPath.split(TFS_SEPARATOR);
        if (splittedPath.length > 2) throw new Error(errorTooManySeparators(TFS_SEPARATOR, keyFullPath));
        const [tFName, keyPath] = splittedPath;
        if (!tFName) throw new Error(errorTFNameEmpty(keyFullPath));
        if (!keyPath) throw new Error(errorKeyPathEmpty(keyFullPath));
        return { tFName, keyPath };
    }
    return { tFName: DEFAULT_TF_NAME, keyPath: keyFullPath };
};

export const splitAllKeys = (keyPath: string): string[] => keyPath.split(KEYS_SEPARATOR);

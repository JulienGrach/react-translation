import { AUTHORIZED_HTML_TAGS } from '../constants';
import { Language } from '../types/language.types';
import { TFName } from '../types/translationFiles.types';

export const errorObjectGiven = (language: Language, keyPath: string, tFName?: TFName): string =>
    `The key ${keyPath} from ${language}/${tFName} is an object. String expected`;

export const errorKeyDoesntExists = (language: Language, keyPath: string, tFName: TFName): string =>
    `The key ${keyPath} doesn't exists in ${language}/${tFName}`;

export const errorTooManySeparators = (separator: string, keyFullPath: string): string =>
    `The key ${keyFullPath} contains too many separators. Only one "${separator}" is expected.`;

export const errorKeyPathEmpty = (keyFullPath: string): string =>
    `There are no keys after the translation file name in the following key full path "${keyFullPath}???"`;

export const errorTFNameEmpty = (keyFullPath: string): string =>
    `The translation file name is missing before the separator ":" in the following key full path "???${keyFullPath}"`;

export const errorTFNotAvailable = (tFName: TFName): string =>
    `The translation file with the name "${tFName}" is not available. Please make sure you added it in the translation files array argument for the hook useTranslation.`;

export const errorVariableisMissing = (searchedVariable: string, translatedValue: string): string =>
    `The variable ${searchedVariable} is missing in : "${translatedValue}"`;

export const errorForbiddenHtmlTags = (translatedValue: string): string =>
    `The value "${translatedValue}" contains forbidden html tags. Only "${AUTHORIZED_HTML_TAGS.join(', ')}" are authorized.`;

export const errorUseLanguageContext = (): string => `useLanguageContext must be used within a LanguageContextProvider`;

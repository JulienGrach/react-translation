import { TF, TFContent, TFName } from './translationFiles.types';

export type KeyFullPathSplitted = { tFName: TFName; keyPath: string };

export type KeyPathValue = TFContent | string | undefined;

export type KeyPathValueFound = { tF?: TF; value?: KeyPathValue };

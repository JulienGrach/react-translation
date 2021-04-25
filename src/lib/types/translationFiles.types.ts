import { KeyPathValue } from './keyFullPath.types';

export type TFName = string;

export type TFNames = TFName[];

export type TFContent = { [key: string]: KeyPathValue };

export type TFImported = { default: TFContent };

export type TF = { name: TFName; content: TFContent };

export type TFs = TF[];

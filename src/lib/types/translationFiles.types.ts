export type KeyFullPathSplitted = { tFName: TFName; keyPath: string };

export type KeyPathValue = TFContent | string | undefined;

export type KeyPathValueFound = { tF?: TF; value?: KeyPathValue };

export type TFName = string;

export type TFNames = TFName[];

export type TFContent = { [key: string]: KeyPathValue };

export type TFImported = { default: TFContent };

export type TF = { name: TFName; content: TFContent };

export type TFs = TF[];

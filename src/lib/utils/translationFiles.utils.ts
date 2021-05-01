import { TF, TFImported, TFName } from '../types/translationFiles.types';
import { Language } from '../types/language.types';
import { TFS_DIR_NAME } from '../constants/translationFiles.constants';

export const importTF = async (language: Language, tFName: TFName): Promise<TF> => {
    try {
        const tFImported: TFImported = await import(`../${TFS_DIR_NAME}/${language}/${tFName}`);
        return { name: tFName, content: tFImported.default };
    } catch (error) {
        throw new Error(error);
    }
};

import React from 'react';
import { LanguageContextProvider, Translator } from './lib';
import { TopBar } from './demo/components/topBar/TopBar';
import { LANGUAGES } from './demo/constants/languages.constants';

function App(): JSX.Element {
    return (
        <LanguageContextProvider config={{ languages: LANGUAGES }}>
            <TopBar />
            <Translator keyFullPath="common:welcome.coucou" variables={{ monster: 'disizilla' }} />
        </LanguageContextProvider>
    );
}

export default App;

import translation from '../public/locales/en/translation.json';

import 'react-i18next'

declare module 'react-i18next' {
    export interface Resources {
        translation: typeof translation
    }
}
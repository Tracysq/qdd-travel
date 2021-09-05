import i18n from 'i18next'
import { CHANGE_LANGUAGE, changeLanguageAction } from './languageActions'

export interface LanguageState {
  language: 'en' | 'zh',
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

export default (state = defaultState, action: changeLanguageAction) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}
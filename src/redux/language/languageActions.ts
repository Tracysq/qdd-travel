export const CHANGE_LANGUAGE = 'change_language'

export interface changeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: 'zh' | 'en'
}

export const changeLanguageActionCreator = (languageCode: 'zh' | 'en'): changeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}
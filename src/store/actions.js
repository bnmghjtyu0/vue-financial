import * as types from './mutation-types'

export default {
  setLanguage ({ commit }, lang) {
    commit(types.LANGUAGE, lang)
  }
}

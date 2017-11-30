import * as types from './mutation-types'
import Vue from 'vue'

export default {
  [types.LANGUAGE] (state, setlang) {
    state.lang = setlang
    // 設定 Vue config 將會改變 i18n 使用的語言包而更改語系！
    Vue.config.lang = state.lang
  }
}

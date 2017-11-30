// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './assets/css/main.css'
import './assets/js/main'
import Vue from 'vue'
import App from './App'
import router from './router'
import FontAwesome from './assets/css/font-awesome.min.css'

import VueResource from 'vue-resource'
import store from './store'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import VueLocalStorage from 'vue-localstorage'

var vueScrollto = require('vue-scrollto')
Vue.use(vueScrollto)
Vue.use(FontAwesome)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(VueLocalStorage)

// i18n
import en from './i18n/en.json' // 存放英文翻譯
import cn from './i18n/cn.json' // 存放簡體翻譯
import tw from './i18n/tw.json' // 存放繁體中文翻譯
const locales = {
  en: en,
  cn: cn,
  tw: tw
}
Vue.config.lang = localStorage.lang // 從 state 獲取預設語言設定。
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
Vue.config.productionTip = false

global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $

router.beforeEach((to, from, next) => {
  $('.navbar').removeClass('navbar-fixed')
  next()
})
router.afterEach((to, from, next) => {
  $('.navbar').addClass('navbar-fixed')
  if (to.name === 'Index') {
    $('.navbar').removeClass('navbar-fixed')
  }
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  localStorage: {
    lang: {
      type: String,
      default: 'en'
    },
    langName: {
      type: String,
      default: 'English'
    }
  }
})

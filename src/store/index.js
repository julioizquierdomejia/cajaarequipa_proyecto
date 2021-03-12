import Vuex from 'vuex'
import Vue from 'vue'

import authData from './modules/authData'
import insights from './modules/insights'

import largeSidebar from './modules/largeSidebar'
import compactSidebar from './modules/compactSidebar'
import chat from './modules/chat'
import config from './modules/config'
import invoice from './modules/invoice'
import cart from './modules/cart'
import verticalSidebar from './modules/verticalSidebar'
import scrumboard from './modules/scrumboard'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    authData,
    insights,
    largeSidebar,
    compactSidebar,
    chat,
    config,
    invoice,
    cart,
    verticalSidebar,
    scrumboard
  }
})

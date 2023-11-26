import Vue from 'vue'
import i18n from './lang'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '~/assets/font/font_3656699_rilwj862dw/iconfont.css'
import VueParticles from 'vue-particles'
import App from './App.vue'

Vue.use(ElementUI);
Vue.use(VueParticles)

new Vue({
    i18n,
    store,
    router,
    render: h => h(App)
}).$mount('#app')



require('./mock.js');

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ================
// Bootstrap
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// ================
// Vue-stash aka simple vuex alternative
import VueStash from "vue-stash";
import store from "./store/store";
Vue.use(VueStash);

// ================
// Lodash
import VueLodash from "vue-lodash";
Vue.use(VueLodash);



// ================
// https://fontawesome.com
// https://github.com/FortAwesome/vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalculator, faAlignJustify, faPlus, faArrowsAlt, faHeading, faTable, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faEdit, faCircle, faCheckSquare, faTimesCircle, faTrashAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(faEdit, faCalculator, faAlignJustify, faCircle, faCheckSquare, faTimesCircle,
    faTable, faClock, faCalendarDay,  faPlus,faArrowsAlt, faTrashAlt, faHeading)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


Vue.config.productionTip = false




var vm = new Vue({
    data: { store },
    router,
    render: h => h(App)
}).$mount('#app')

global.vm = vm;

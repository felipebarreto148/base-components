import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
import mdiVue from "mdi-vue/v2";
import * as mdiJs from "@mdi/js";
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import MyBaseComponents from '@/entry.esm';
Vue.use(MyBaseComponents);
Vue.use(mdiVue, {
  icons: mdiJs
})


Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');

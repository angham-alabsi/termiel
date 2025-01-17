import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueSmoothScroll from "vue2-smooth-scroll";
import Lazyanimationx from "./directive/lazyanimationx";
import Lazyanimationxl from "./directive/lazyanimationxl";
import Lazyanimationy from "./directive/lazyanimationy";
import Rotateanimation from "./directive/rotateanimation";
import store from "./store.js";

Vue.use(Vuex);
Vue.use(VueSmoothScroll, {
  duration: 800,
  updateHistory: false,
  offset:-30,

});
Vue.directive("rotateanimation", Rotateanimation);
Vue.directive("lazyanimationx", Lazyanimationx);
Vue.directive("lazyanimationxl", Lazyanimationxl);
Vue.directive("lazyanimationy", Lazyanimationy);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
